package victor.project.memoire.Repository;

import org.springframework.data.repository.CrudRepository;
import victor.project.memoire.Model.Payslip;

import java.util.List;

public interface PayslipRepository extends CrudRepository<Payslip, Integer> {
    List<Payslip> findByUserId(Integer userId);
}
