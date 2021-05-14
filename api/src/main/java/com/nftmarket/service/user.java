package com.nftmarket.service;

import java.net.URI;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.POST;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import javax.ws.rs.FormParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.GET;
import javax.inject.Inject;
import io.vertx.mutiny.pgclient.PgPool;
import io.smallrye.mutiny.Uni;
import io.vertx.mutiny.sqlclient.Tuple;
import io.vertx.mutiny.sqlclient.RowSet;
import io.vertx.mutiny.sqlclient.Row;
import javax.ws.rs.core.Response.Status;
import io.vertx.core.json.JsonObject;

@Path("/user")
public class user {

    static final String userCreateSql = """
        INSERT INTO users(email,password_crypt) values($1,'') 
        ON CONFLICT(email) DO NOTHING
    """;

    static final String userCheckSql = """
        select * from users where email = $1 limit 1
    """;


    @Inject
    PgPool pgClient;


    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<Response> createUser(@FormParam("email") String email){
        
        return pgClient.preparedQuery(userCreateSql).execute(Tuple.of(email))
            .map(rs -> {
                var data = new JsonObject();
                data.put("data",new JsonObject());
                data.put("result",0);
                return data;
            })
            .map(json -> Response.status(Status.CREATED).entity(json).build());
    }

    @GET
    @Path("/check")
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<Response> checkUser(@QueryParam("email") String email){
        return pgClient.preparedQuery(userCheckSql).execute(Tuple.of(email))
            .map(rs ->{
                boolean exist = false;
                if (rs.size()  == 1){
                    exist = true;
                }
                rs.iterator().forEachRemaining(row -> {
                    System.out.println(row.getString("email"));
                });
                var json = new JsonObject();
                var data = new JsonObject();
                data.put("exist",exist);
                json.put("data", data);
                json.put("result",0);
                return json;
            })
            .map(json -> Response.ok(json).build());

    }

    
}