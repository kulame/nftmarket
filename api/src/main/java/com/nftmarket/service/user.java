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
        
        pgClient.preparedQuery(userCreateSql).execute(Tuple.of(email))
            .map(rs -> {
                System.out.println(rs);
                return true;
            }).await().indefinitely();


        return Uni.createFrom().item("hello")
        .map(item -> URI.create(item))
        .map(uri ->{
            return Response.created(uri).build();
        });

    }
    
}