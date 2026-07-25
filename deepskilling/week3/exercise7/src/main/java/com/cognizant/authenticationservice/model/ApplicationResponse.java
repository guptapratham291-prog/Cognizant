package com.cognizant.authenticationservice.model;

public class ApplicationResponse {

    private String token;

    public ApplicationResponse() {
    }

    public ApplicationResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}