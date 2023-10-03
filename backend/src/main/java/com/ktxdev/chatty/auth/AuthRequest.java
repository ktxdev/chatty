package com.ktxdev.chatty.auth;

import jakarta.validation.constraints.NotNull;

public record AuthRequest(@NotNull String email, @NotNull String password) {
}
