package victor.project.memoire.Repository;

import org.springframework.data.repository.CrudRepository;
import victor.project.memoire.Model.Position;

public interface PositionRepository extends CrudRepository<Position, Integer> {
}
