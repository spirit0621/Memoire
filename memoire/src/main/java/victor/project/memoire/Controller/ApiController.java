package victor.project.memoire.Controller;

import org.springframework.web.bind.annotation.*;
import victor.project.memoire.Model.*;
import victor.project.memoire.Repository.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/api")
public class ApiController {

    private final UserRepository userRepository;
    private final PayslipRepository payslipRepository;
    private final PayrollElementRepository payrollElementRepository;
    private final EstablishmentRepository establishmentRepository;

    public ApiController(UserRepository userRepository, PayslipRepository payslipRepository,
            PayrollElementRepository payrollElementRepository, EstablishmentRepository establishmentRepository) {
        this.userRepository = userRepository;
        this.payslipRepository = payslipRepository;
        this.payrollElementRepository = payrollElementRepository;
        this.establishmentRepository = establishmentRepository;
    }

    public record EmployeeDto(Integer id, String firstName, String lastName, String avatar, String nir,
            String establishment, String role) {
    }

    @GetMapping("/employees")
    public List<EmployeeDto> getEmployees() {
        return StreamSupport.stream(userRepository.findAll().spliterator(), false)
                .map(u -> new EmployeeDto(
                        u.getId(),
                        u.getFirstName(),
                        u.getLastName(),
                        "https://ui-avatars.com/api/?name=" + u.getFirstName() + "+" + u.getLastName()
                                + "&background=0D8ABC&color=fff",
                        u.getNsc() != null ? u.getNsc() : "NIR Inconnu",
                        u.getEstablishment() != null ? u.getEstablishment().getName() : "Unknown",
                        u.getRole()))
                .collect(Collectors.toList());
    }

    public record PayslipDto(Integer id, Integer employeeId, String period, BigDecimal netSalary,
            LocalDateTime generationDate) {
    }

    @GetMapping("/payslips")
    public List<PayslipDto> getPayslips(@RequestParam(required = false) Integer employeeId) {
        List<Payslip> payslips;
        if (employeeId != null) {
            payslips = payslipRepository.findByUserId(employeeId);
        } else {
            payslips = StreamSupport.stream(payslipRepository.findAll().spliterator(), false)
                    .collect(Collectors.toList());
        }

        return payslips.stream()
                .map(p -> {
                    // Convert "04-2025" to "2025-04-01" so JS new Date() parses it correctly
                    String period = p.getPeriodMonthYear();
                    if (period != null && period.matches("\\d{2}-\\d{4}")) {
                        period = period.substring(3) + "-" + period.substring(0, 2) + "-01";
                    }
                    return new PayslipDto(
                            p.getId(),
                            p.getUser() != null ? p.getUser().getId() : null,
                            period,
                            p.getTotalNet(),
                            p.getGenerationDate());
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/variables")
    public List<PayrollElement> getVariables() {
        return StreamSupport.stream(payrollElementRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    @GetMapping("/departments")
    public List<Establishment> getDepartments() {
        return StreamSupport.stream(establishmentRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public record GenerateRequest(Integer employeeId, String period) {
    }

    @PostMapping("/payslips/generate")
    public PayslipDto generatePayslip(@RequestBody GenerateRequest req) {
        return new PayslipDto(1, req.employeeId(), req.period(), new BigDecimal("3000.00"), LocalDateTime.now());
    }
}
