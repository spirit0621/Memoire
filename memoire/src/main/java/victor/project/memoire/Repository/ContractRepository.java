package victor.project.memoire.Repository;

import org.springframework.data.repository.CrudRepository;
import victor.project.memoire.Model.Contract;

public interface ContractRepository extends CrudRepository<Contract, Integer> {
}
