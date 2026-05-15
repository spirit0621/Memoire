package victor.project.memoire.Seed;

import victor.project.memoire.Modele.User;
import victor.project.memoire.Repository.UtilisateurRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
// @Profile("dev") // ne s’exécute que quand le profil "dev" est actif
public class UserSeed implements CommandLineRunner {

    private final UtilisateurRepository userRepository;

    public UserSeed(UtilisateurRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        if (userRepository.count() > 0) {
            return; // déjà peuplé, on ne fait rien
        }

        User e1 = new User();
        e1.setName("Alice");
        e1.setEmail("alice@example.com");

        User e2 = new User();
        e2.setName("Bob");
        e2.setEmail("bob@example.com");

        userRepository.save(e1);
        userRepository.save(e2);
    }
}