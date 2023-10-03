package com.ktxdev.chatty.auth.jwt;

import com.ktxdev.chatty.users.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;

public interface JwtService {
    String generateToken(UserDetails userDetails);
    String generateToken(Map<String, Object> extraClaims, UserDetails userDetails);
    String extractUsername(String token);
    boolean isValidToken(String token, UserDetails userDetails);
}
