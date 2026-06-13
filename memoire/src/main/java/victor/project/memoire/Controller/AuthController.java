package victor.project.memoire.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import victor.project.memoire.Repository.UtilisateurRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UtilisateurRepository utilisateurRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UtilisateurRepository utilisateurRepository, PasswordEncoder passwordEncoder) {
        this.utilisateurRepository = utilisateurRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        return utilisateurRepository.findByEmail(request.email())
                .map(user -> {
                    if (passwordEncoder.matches(request.password(), user.getMotDePasse())) {
                        LoginResponse resp = new LoginResponse(
                                user.getId(),
                                user.getId(),
                                user.getEmail(),
                                user.getPrenom(),
                                user.getNom(),
                                user.getRole()
                        );
                        return ResponseEntity.ok(resp);
                    }
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Identifiants incorrects");
                })
                .orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Identifiants incorrects"));
    }

    public record LoginRequest(String email, String password) {
    }

    public record LoginResponse(Integer id, Integer employeeId, String email, String prenom, String nom, String role) {
    }
}
