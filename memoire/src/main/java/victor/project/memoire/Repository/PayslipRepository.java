package victor.project.memoire.Repository;

import org.springframework.data.repository.CrudRepository;
import victor.project.memoire.Model.Payslip;

public interface PayslipRepository extends CrudRepository<Payslip, Integer> {
}
