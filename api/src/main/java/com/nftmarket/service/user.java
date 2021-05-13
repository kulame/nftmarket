package com.nftmarket.service;

import java.net.URI;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.POST;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import io.smallrye.mutiny.Uni;

@Path("/user")
public class user {

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<Response> createUser(){
        System.out.println("create user");
        return Uni.createFrom().item("hello")
        .map(item -> URI.create(item))
        .map(uri ->{
            return Response.created(uri).build();
        });

    }
    
}
