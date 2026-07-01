package victor.project.memoire.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import victor.project.memoire.Model.User;
import victor.project.memoire.Repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        return userRepository.findByEmail(request.email())
                .map(user -> {
                    if (passwordEncoder.matches(request.password(), user.getPassword())) {
                        LoginResponse resp = new LoginResponse(
                                user.getId(),
                                user.getId(),
                                user.getEmail(),
                                user.getFirstName(),
                                user.getLastName(),
                                user.getRole());
                        return ResponseEntity.ok(resp);
                    }
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect credentials");
                })
                .orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect credentials"));
    }

    public record LoginRequest(String email, String password) {
    }

    public record LoginResponse(Integer id, Integer employeeId, String email, String firstName, String lastName,
            String role) {
    }
}
