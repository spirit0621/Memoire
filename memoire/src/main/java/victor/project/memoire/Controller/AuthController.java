package victor.project.memoire.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        // TODO: implémenter l'authentification réelle avec la base de données
        return ResponseEntity.ok(new LoginResponse(request.username(), "login endpoint reached"));
    }

    public record LoginRequest(String username, String password) {
    }

    public record LoginResponse(String username, String message) {
    }
}
