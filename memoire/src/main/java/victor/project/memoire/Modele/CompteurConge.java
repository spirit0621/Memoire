package victor.project.memoire.Modele;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "compteur_conge")
public class CompteurConge {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer utilisateurId;
    private String typeConge;
    private BigDecimal joursAcquis = BigDecimal.ZERO;
    private BigDecimal joursPris = BigDecimal.ZERO;

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

    public String getTypeConge() {
        return typeConge;
    }

    public void setTypeConge(String typeConge) {
        this.typeConge = typeConge;
    }

    public BigDecimal getJoursAcquis() {
        return joursAcquis;
    }

    public void setJoursAcquis(BigDecimal joursAcquis) {
        this.joursAcquis = joursAcquis;
    }

    public BigDecimal getJoursPris() {
        return joursPris;
    }

    public void setJoursPris(BigDecimal joursPris) {
        this.joursPris = joursPris;
    }
}
