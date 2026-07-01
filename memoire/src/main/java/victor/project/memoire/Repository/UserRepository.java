package victor.project.memoire.Repository;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import victor.project.memoire.Model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
