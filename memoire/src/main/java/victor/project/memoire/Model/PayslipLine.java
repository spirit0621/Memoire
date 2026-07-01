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
@Table(name = "payslip_line")
public class PayslipLine {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "payslip_id", nullable = false)
    private Payslip payslip;
    private String code;
    private String label;
    private String lineType;
    private BigDecimal baseCalculation;
    private BigDecimal employeeRate;
    private BigDecimal employeeAmount;
    private BigDecimal employerRate;
    private BigDecimal employerAmount;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Payslip getPayslip() {
        return payslip;
    }

    public void setPayslip(Payslip payslip) {
        this.payslip = payslip;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getLineType() {
        return lineType;
    }

    public void setLineType(String lineType) {
        this.lineType = lineType;
    }

    public BigDecimal getBaseCalculation() {
        return baseCalculation;
    }

    public void setBaseCalculation(BigDecimal baseCalculation) {
        this.baseCalculation = baseCalculation;
    }

    public BigDecimal getEmployeeRate() {
        return employeeRate;
    }

    public void setEmployeeRate(BigDecimal employeeRate) {
        this.employeeRate = employeeRate;
    }

    public BigDecimal getEmployeeAmount() {
        return employeeAmount;
    }

    public void setEmployeeAmount(BigDecimal employeeAmount) {
        this.employeeAmount = employeeAmount;
    }

    public BigDecimal getEmployerRate() {
        return employerRate;
    }

    public void setEmployerRate(BigDecimal employerRate) {
        this.employerRate = employerRate;
    }

    public BigDecimal getEmployerAmount() {
        return employerAmount;
    }

    public void setEmployerAmount(BigDecimal employerAmount) {
        this.employerAmount = employerAmount;
    }
}
