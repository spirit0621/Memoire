package victor.project.memoire.Modele;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "fiche_de_paie")
public class FicheDePaie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer utilisateurId;
    private Integer contratId;
    private String periodeMoisAnnee;
    private BigDecimal salaireBase;
    private BigDecimal totalBrut;
    private BigDecimal totalNet;
    private String statut = "BROUILLON";
    private LocalDateTime dateGeneration;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUtilisateurId() {
        return utilisateurId;
    }

    public void setUtilisateurId(Integer utilisateurId) {
        this.utilisateurId = utilisateurId;
    }

    public Integer getContratId() {
        return contratId;
    }

    public void setContratId(Integer contratId) {
        this.contratId = contratId;
    }

    public String getPeriodeMoisAnnee() {
        return periodeMoisAnnee;
    }

    public void setPeriodeMoisAnnee(String periodeMoisAnnee) {
        this.periodeMoisAnnee = periodeMoisAnnee;
    }

    public BigDecimal getSalaireBase() {
        return salaireBase;
    }

    public void setSalaireBase(BigDecimal salaireBase) {
        this.salaireBase = salaireBase;
    }

    public BigDecimal getTotalBrut() {
        return totalBrut;
    }

    public void setTotalBrut(BigDecimal totalBrut) {
        this.totalBrut = totalBrut;
    }

    public BigDecimal getTotalNet() {
        return totalNet;
    }

    public void setTotalNet(BigDecimal totalNet) {
        this.totalNet = totalNet;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public LocalDateTime getDateGeneration() {
        return dateGeneration;
    }

    public void setDateGeneration(LocalDateTime dateGeneration) {
        this.dateGeneration = dateGeneration;
    }
}
