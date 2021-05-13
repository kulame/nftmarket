package com.nftmarket;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.inject.Inject;
import io.vertx.mutiny.pgclient.PgPool;
import io.smallrye.mutiny.Uni;
import io.vertx.mutiny.sqlclient.RowSet;
import io.vertx.mutiny.sqlclient.Row;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.Consumes;
import java.time.Duration;

@Path("/test")
public class GreetingResource {

    @Inject
    PgPool pgClient;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public Uni<String> hello() {
        System.out.println("start hello");
        Uni<RowSet<Row>> rowSet = pgClient.query("select * from user").execute();
        System.out.println(rowSet);
        rowSet.map(rs -> {
            System.out.println(rs.rowCount());
            return true;
        }).await().indefinitely();
        System.out.println("end hello");
        return Uni.createFrom()
                .item(() -> "Hello!")
                .onItem().transform(n -> String.format("hello %s", n));
        

    }
}