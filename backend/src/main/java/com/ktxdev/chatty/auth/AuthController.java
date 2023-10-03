package com.ktxdev.chatty.auth;

import com.ktxdev.chatty.users.UserSignUpRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("sign-up")
    public AuthResponse signUp(@Valid @RequestBody UserSignUpRequest signUpRequest) {
        return authService.signUp(signUpRequest);
    }

    @PostMapping("sign-in")
    public AuthResponse signIn(@Valid @RequestBody AuthRequest authRequest) {
        return authService.signIn(authRequest);
    }
}
