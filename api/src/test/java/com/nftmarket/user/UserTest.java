package com.nftmarket.user;


import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;


@QuarkusTest
public class UserTest {
    @Test
    public void testCreateUser(){
        given()
            .param("email","kula@live.com")
            .when().post("/user")
            .then()
                .log()
                .all()
                .statusCode(201);
    }
    
}




