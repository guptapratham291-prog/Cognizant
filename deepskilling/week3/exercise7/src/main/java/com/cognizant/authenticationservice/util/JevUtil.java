package com.cognizant.authenticationservice.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JevUtil {

    private static final String SECRET =
            "ThisIsASecretKeyForJwtAuthenticationService123456";

    private final Key key =
            Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));

    public  String generateToken(String username) {

        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

}