package victor.project.memoire.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import victor.project.memoire.Modele.Utilisateur;
import victor.project.memoire.Repository.UtilisateurRepository;
import java.util.ArrayList;

import java.util.List;

@RestController
public class UtilisateurController {
    private final UtilisateurRepository utilisateurRepository;

    public UtilisateurController(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello world";
    }

    @GetMapping("/users")
    // public Iterable<User> users() {
    // return userRepository.findAll();
    // }
    public List<String> user() {
        List<String> infos = new ArrayList<>();
        for (Utilisateur utilisateur : utilisateurRepository.findAll()) {
            infos.add(utilisateur.getId() + " " + utilisateur.getPrenom());
        }
        return infos;
    }
}
