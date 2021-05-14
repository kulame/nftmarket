package com.nftmarket.service;

import java.net.URI;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.POST;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import javax.ws.rs.FormParam;   
import javax.inject.Inject;
import io.vertx.mutiny.pgclient.PgPool;
import io.smallrye.mutiny.Uni;
import io.vertx.mutiny.sqlclient.Tuple;
import javax.ws.rs.core.Response.Status;
import io.vertx.core.json.JsonObject;

@Path("/user")
public class user {

    static final String userCreateSql = "INSERT INTO users(email,password_crypt) values($1,'') "+
        "ON CONFLICT(email) DO NOTHING";


    @Inject
    PgPool pgClient;


    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<Response> createUser(@FormParam("email") String email){
        System.out.println("create user"+email);
        
        return pgClient.preparedQuery(userCreateSql).execute(Tuple.of(email))
            .map(status -> {
                var data = new JsonObject();
                data.put("data",new JsonObject());
                data.put("result",0);
                return data;
            })
            .map(json -> Response.status(Status.CREATED).entity(json).build());

    }
    
}