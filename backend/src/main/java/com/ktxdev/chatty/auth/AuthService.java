package com.ktxdev.chatty.auth;

import com.ktxdev.chatty.users.UserSignUpRequest;

public interface AuthService {
    AuthResponse signUp(UserSignUpRequest signUpRequest);

    AuthResponse signIn(AuthRequest authRequest);
}
