package victor.project.memoire.Seed;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import victor.project.memoire.Model.Contract;
import victor.project.memoire.Model.Payslip;
import victor.project.memoire.Model.User;
import victor.project.memoire.Repository.ContractRepository;
import victor.project.memoire.Repository.PayslipRepository;
import victor.project.memoire.Repository.UserRepository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Optional;

@Component
@Order(2) // Assure que ce Seed s'exécute APRÈS UserSeed (qui crée Bob)
public class BobSeed implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ContractRepository contractRepository;
    private final PayslipRepository payslipRepository;

    public BobSeed(UserRepository userRepository, ContractRepository contractRepository, PayslipRepository payslipRepository) {
        this.userRepository = userRepository;
        this.contractRepository = contractRepository;
        this.payslipRepository = payslipRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // 1. Récupérer Bob
        Optional<User> bobOpt = userRepository.findByEmail("bob.dupont@techcorp.fr");
        if (bobOpt.isEmpty()) {
            return; // Bob n'existe pas encore
        }
        User bob = bobOpt.get();

        // 2. Récupérer le contrat de Bob
        Contract contract = null;
        for (Contract c : contractRepository.findAll()) {
            if (c.getUser().getId().equals(bob.getId())) {
                contract = c;
                break;
            }
        }
        
        if (contract == null) {
            return; // Pas de contrat pour Bob
        }

        // 3. Mois pour lesquels nous voulons générer des fiches de paie 
        // (04-2025 a déjà été créé dans UserSeed)
        String[] months = {"01-2025", "02-2025", "03-2025", "05-2025", "06-2025"};

        for (String monthYear : months) {
            // Éviter de créer des doublons si le script s'exécute plusieurs fois
            boolean exists = false;
            for (Payslip p : payslipRepository.findAll()) {
                if (p.getUser().getId().equals(bob.getId()) && p.getPeriodMonthYear().equals(monthYear)) {
                    exists = true;
                    break;
                }
            }

            if (!exists) {
                Payslip payslip = new Payslip();
                payslip.setUser(bob);
                payslip.setContract(contract);
                payslip.setPeriodMonthYear(monthYear);
                payslip.setBaseSalary(new BigDecimal("3200.00"));
                
                // Petites variations pour rendre les données réalistes
                if (monthYear.equals("06-2025")) {
                    payslip.setTotalGross(new BigDecimal("3500.00")); // Prime d'été par exemple
                    payslip.setTotalNet(new BigDecimal("2800.00"));
                } else {
                    payslip.setTotalGross(new BigDecimal("3200.00"));
                    payslip.setTotalNet(new BigDecimal("2560.00"));
                }
                
                payslip.setStatus("APPROVED");
                payslip.setGenerationDate(LocalDateTime.now().minusDays((long)(Math.random() * 60))); 
                
                payslipRepository.save(payslip);
            }
        }
        
        System.out.println("BobSeed: Données de fiches de paie supplémentaires générées pour Bob avec succès !");
    }
}
