package com.ktxdev.chatty.users;

import com.ktxdev.chatty.exceptions.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public User signUp(UserSignUpRequest signUpRequest) {
        if (!signUpRequest.password().equals(signUpRequest.confirmPassword())) {
            throw new BadRequestException("Passwords do not match");
        }

        if (userRepository.existsByEmail(signUpRequest.email())) {
            throw new BadRequestException("Email is already in use");
        }

        User user = userMapper.fromSignUpRequest(signUpRequest);
        user.setPassword(passwordEncoder.encode(signUpRequest.password()));
        user.setAbout("Hey there! I'm using Chatty");

        return userRepository.save(user);
    }

    @Override
    public Page<UserDto> fetchAllUsers(Pageable pageable, User user) {
        return userRepository.findAllByEmailIsNot(user.getEmail(), pageable)
                .map(userMapper::toDto);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
