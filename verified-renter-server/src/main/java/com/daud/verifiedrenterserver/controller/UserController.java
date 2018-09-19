package com.daud.verifiedrenterserver.controller;


import com.daud.verifiedrenterserver.exception.ResourceNotFoundException;
import com.daud.verifiedrenterserver.model.User;
import com.daud.verifiedrenterserver.payload.UserIdentityAvailability;
import com.daud.verifiedrenterserver.payload.UserProfile;
import com.daud.verifiedrenterserver.payload.UserSummary;
import com.daud.verifiedrenterserver.repository.UserRepository;
import com.daud.verifiedrenterserver.security.CurrentUser;
import com.daud.verifiedrenterserver.security.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/myProfile")
    @PreAuthorize("hasRole('USER')")
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {

        List<String> roles = currentUser.getAuthorities().stream().map(grantedAuthority -> grantedAuthority.getAuthority()).collect(Collectors.toList());

        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername(), currentUser.getName(), roles);
        return userSummary;
    }

    @GetMapping("/checkUsernameAvailability")
    public UserIdentityAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
        Boolean isAvailable = !userRepository.existsByUsername(username);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/checkEmailAvailability")
    public UserIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        Boolean isAvailable = !userRepository.existsByEmail(email);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/{username}")
    public UserProfile getUserProfile(@PathVariable(value = "username") String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));


        UserProfile userProfile = new UserProfile(user.getId(), user.getUsername(), user.getName(), user.getRoles(), user.getCreatedAt());

        return userProfile;
    }


}
