package com.cognizant.authenticationservice.controller;

import com.cognizant.authenticationservice.model.ApplicationResponse;
import com.cognizant.authenticationservice.model.ApplicationResponse;
import com.cognizant.authenticationservice.util.JevUtil;
import com.cognizant.authenticationservice.util.JevUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthenticationController {

    @Autowired
    private JevUtil jwtUtil;

    @GetMapping("/authenticate")
    public ApplicationResponse authenticate(
            @RequestHeader("Authorization") String authHeader) {

        String base64Credentials =
                authHeader.substring("Basic ".length());

        byte[] decodedBytes =
                Base64.getDecoder().decode(base64Credentials);

        String credentials =
                new String(decodedBytes, StandardCharsets.UTF_8);

        String username =
                credentials.split(":")[0];

        String token =
                jwtUtil.generateToken(username);

        return new ApplicationResponse(token);

    }

}