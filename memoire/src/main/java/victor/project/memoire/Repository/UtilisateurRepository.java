package victor.project.memoire.Repository;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import victor.project.memoire.Modele.Utilisateur;

public interface UtilisateurRepository extends CrudRepository<Utilisateur, Integer> {
    Optional<Utilisateur> findByEmail(String email);
}
