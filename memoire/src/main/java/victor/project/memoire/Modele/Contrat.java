package victor.project.memoire.Modele;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "contrat")
public class Contrat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer utilisateurId;
    private Integer posteId;
    private String typeContrat;
    private BigDecimal salaireBaseMensuel;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private String statut = "ACTIF";

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

    public Integer getPosteId() {
        return posteId;
    }

    public void setPosteId(Integer posteId) {
        this.posteId = posteId;
    }

    public String getTypeContrat() {
        return typeContrat;
    }

    public void setTypeContrat(String typeContrat) {
        this.typeContrat = typeContrat;
    }

    public BigDecimal getSalaireBaseMensuel() {
        return salaireBaseMensuel;
    }

    public void setSalaireBaseMensuel(BigDecimal salaireBaseMensuel) {
        this.salaireBaseMensuel = salaireBaseMensuel;
    }

    public LocalDate getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(LocalDate dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDate getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }
}
