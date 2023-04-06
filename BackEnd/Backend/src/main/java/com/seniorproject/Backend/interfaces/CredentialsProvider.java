package com.seniorproject.Backend.interfaces;

import com.google.auth.Credentials;

import java.io.IOException;

public interface CredentialsProvider {
    Credentials getCredentials() throws IOException;
}
