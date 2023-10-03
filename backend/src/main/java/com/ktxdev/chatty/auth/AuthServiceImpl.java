package com.ktxdev.chatty.auth;

import com.ktxdev.chatty.auth.jwt.JwtService;
import com.ktxdev.chatty.users.User;
import com.ktxdev.chatty.users.UserService;
import com.ktxdev.chatty.users.UserSignUpRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final JwtService jwtService;
    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    @Override
    public AuthResponse signUp(UserSignUpRequest signUpRequest) {
        User user = userService.signUp(signUpRequest);
        String token = jwtService.generateToken(user);
        return new AuthResponse(token);
    }

    @Override
    public AuthResponse signIn(AuthRequest authRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.email(), authRequest.password()));

        final User user = userService.findByEmail(authRequest.email())
                .orElseThrow(() -> new UsernameNotFoundException("Invalid credentials"));

        final String token = jwtService.generateToken(user);

        return new AuthResponse(token);
    }
}
