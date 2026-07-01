package victor.project.memoire.Seed;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import victor.project.memoire.Model.*;
import victor.project.memoire.Repository.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;
import org.springframework.security.crypto.password.PasswordEncoder;

@Component
public class UserSeed implements CommandLineRunner {

    private final EstablishmentRepository establishmentRepository;
    private final UserRepository userRepository;
    private final PositionRepository positionRepository;
    private final ContractRepository contractRepository;
    private final PayslipRepository payslipRepository;
    private final PayrollElementRepository payrollElementRepository;
    private final AbsenceRepository absenceRepository;
    private final LeaveBalanceRepository leaveBalanceRepository;
    private final PasswordEncoder passwordEncoder;

    public UserSeed(
            EstablishmentRepository establishmentRepository,
            UserRepository userRepository,
            PositionRepository positionRepository,
            ContractRepository contractRepository,
            PayslipRepository payslipRepository,
            PayrollElementRepository payrollElementRepository,
            AbsenceRepository absenceRepository,
            LeaveBalanceRepository leaveBalanceRepository,
            PasswordEncoder passwordEncoder) {
        this.establishmentRepository = establishmentRepository;
        this.userRepository = userRepository;
        this.positionRepository = positionRepository;
        this.contractRepository = contractRepository;
        this.payslipRepository = payslipRepository;
        this.payrollElementRepository = payrollElementRepository;
        this.absenceRepository = absenceRepository;
        this.leaveBalanceRepository = leaveBalanceRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        Establishment establishment1;
        if (establishmentRepository.count() == 0) {
            establishment1 = new Establishment();
            establishment1.setName("TechCorp SAS");
            establishment1.setSiret("12345678901234");
            establishment1.setAddress("12 Rue de la Paix");
            establishment1.setCity("Paris");
            establishment1.setZipCode("75001");
            establishmentRepository.save(establishment1);

            Establishment establishment2 = new Establishment();
            establishment2.setName("Innovate SARL");
            establishment2.setSiret("98765432109876");
            establishment2.setAddress("5 Avenue des Champs");
            establishment2.setCity("Lyon");
            establishment2.setZipCode("69001");
            establishmentRepository.save(establishment2);
        } else {
            establishment1 = establishmentRepository.findAll().iterator().next();
        }

        createOrUpdateUser(
                "alice.martin@techcorp.fr",
                "Alice",
                "Martin",
                "admin",
                "ADMIN",
                "1234567890123",
                "FR7630006000011234567890189",
                "3 Rue Voltaire",
                "Paris",
                "75011",
                new BigDecimal("15.00"),
                establishment1);

        User employee = createOrUpdateUser(
                "bob.dupont@techcorp.fr",
                "Bob",
                "Dupont",
                "employe",
                "EMPLOYE",
                "9876543210987",
                "FR7630006000019876543210189",
                "7 Rue Gambetta",
                "Paris",
                "75020",
                new BigDecimal("10.50"),
                establishment1);

        if (positionRepository.count() == 0) {
            Position position1 = new Position();
            position1.setTitle("Java Developer");
            position1.setDescription("Spring Boot application development");
            position1.setMinSalary(new BigDecimal("2800.00"));
            position1.setMaxSalary(new BigDecimal("4500.00"));
            positionRepository.save(position1);

            Position position2 = new Position();
            position2.setTitle("Project Manager");
            position2.setDescription("Management and coordination of technical teams");
            position2.setMinSalary(new BigDecimal("3500.00"));
            position2.setMaxSalary(new BigDecimal("6000.00"));
            positionRepository.save(position2);

            Contract contract1 = new Contract();
            contract1.setUser(employee);
            contract1.setPosition(position1);
            contract1.setContractType("CDI");
            contract1.setMonthlyBaseSalary(new BigDecimal("3200.00"));
            contract1.setStartDate(LocalDate.of(2023, 1, 15));
            contract1.setStatus("ACTIVE");
            contractRepository.save(contract1);

            Payslip payslip1 = new Payslip();
            payslip1.setUser(employee);
            payslip1.setContract(contract1);
            payslip1.setPeriodMonthYear("04-2025");
            payslip1.setBaseSalary(new BigDecimal("3200.00"));
            payslip1.setTotalGross(new BigDecimal("3400.00"));
            payslip1.setTotalNet(new BigDecimal("2720.00"));
            payslip1.setStatus("APPROVED");
            payslip1.setGenerationDate(LocalDateTime.now());
            payslipRepository.save(payslip1);

            PayrollElement prime = new PayrollElement();
            prime.setContract(contract1);
            prime.setPayslip(payslip1);
            prime.setCode("PERF_BONUS");
            prime.setLabel("Performance bonus");
            prime.setElementType("GAIN");
            prime.setInputType("AMOUNT");
            prime.setValue("200.00");
            prime.setQuantity(BigDecimal.ONE);
            prime.setStartDate(LocalDate.of(2025, 4, 1));
            prime.setEndDate(LocalDate.of(2025, 4, 30));
            payrollElementRepository.save(prime);

            Absence absence1 = new Absence();
            absence1.setUser(employee);
            absence1.setAbsenceType("PAID_LEAVE");
            absence1.setStartDate(LocalDate.of(2025, 7, 14));
            absence1.setEndDate(LocalDate.of(2025, 7, 25));
            absence1.setStatus("APPROVED");
            absenceRepository.save(absence1);

            LeaveBalance leaveBalance1 = new LeaveBalance();
            leaveBalance1.setUser(employee);
            leaveBalance1.setLeaveType("PAID_LEAVE");
            leaveBalance1.setDaysEarned(new BigDecimal("25.00"));
            leaveBalance1.setDaysTaken(new BigDecimal("10.00"));
            leaveBalanceRepository.save(leaveBalance1);
        }

        System.out.println("Example data verified and updated successfully!");
    }

    private User createOrUpdateUser(
            String email,
            String firstName,
            String lastName,
            String rawPassword,
            String role,
            String nsc,
            String iban,
            String address,
            String city,
            String zipCode,
            BigDecimal taxRate,
            Establishment establishment) {
        Optional<User> existing = userRepository.findByEmail(email);
        User user = existing.orElseGet(User::new);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(rawPassword));
        user.setRole(role);
        user.setNsc(nsc);
        user.setIban(iban);
        user.setAddress(address);
        user.setCity(city);
        user.setZipCode(zipCode);
        user.setTaxRate(taxRate);
        user.setEstablishment(establishment);
        return userRepository.save(user);
    }
}
