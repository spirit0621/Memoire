package victor.project.memoire.Repository;

import org.springframework.data.repository.CrudRepository;
import victor.project.memoire.Modele.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
