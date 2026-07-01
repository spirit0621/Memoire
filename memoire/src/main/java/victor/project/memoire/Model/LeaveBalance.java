package victor.project.memoire.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "leave_balance")
public class LeaveBalance {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    private String leaveType;
    private BigDecimal daysEarned = BigDecimal.ZERO;
    private BigDecimal daysTaken = BigDecimal.ZERO;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getLeaveType() {
        return leaveType;
    }

    public void setLeaveType(String leaveType) {
        this.leaveType = leaveType;
    }

    public BigDecimal getDaysEarned() {
        return daysEarned;
    }

    public void setDaysEarned(BigDecimal daysEarned) {
        this.daysEarned = daysEarned;
    }

    public BigDecimal getDaysTaken() {
        return daysTaken;
    }

    public void setDaysTaken(BigDecimal daysTaken) {
        this.daysTaken = daysTaken;
    }
}
