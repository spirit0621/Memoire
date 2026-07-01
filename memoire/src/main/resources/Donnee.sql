CREATE TABLE establishment (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    siret VARCHAR(14) UNIQUE NOT NULL,
    address TEXT,
    city VARCHAR(100),
    zip_code VARCHAR(20)
);

CREATE TABLE position (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    min_salary DECIMAL(12, 2),
    max_salary DECIMAL(12, 2)
);

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    nsc VARCHAR(15) UNIQUE,
    iban VARCHAR(34),
    address TEXT,
    city VARCHAR(100),
    zip_code VARCHAR(20),
    tax_rate DECIMAL(5, 2) DEFAULT 0.00,
    establishment_id INTEGER,
    CONSTRAINT fk_user_establishment FOREIGN KEY (establishment_id) REFERENCES establishment (id) ON DELETE SET NULL
);

CREATE TABLE contract (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    position_id INTEGER,
    contract_type VARCHAR(50) NOT NULL,
    monthly_base_salary DECIMAL(12, 2) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    status VARCHAR(50) DEFAULT 'ACTIVE',
    CONSTRAINT fk_contract_user FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
    CONSTRAINT fk_contract_position FOREIGN KEY (position_id) REFERENCES position (id) ON DELETE SET NULL
);

CREATE TABLE payslip (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    contract_id INTEGER NOT NULL,
    period_month_year VARCHAR(7) NOT NULL,
    base_salary DECIMAL(12, 2) NOT NULL,
    total_gross DECIMAL(12, 2) NOT NULL,
    total_net DECIMAL(12, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'DRAFT',
    generation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_payslip_user FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
    CONSTRAINT fk_payslip_contract FOREIGN KEY (contract_id) REFERENCES contract (id) ON DELETE CASCADE
);

CREATE TABLE payroll_element (
    id SERIAL PRIMARY KEY,
    contract_id INTEGER,
    payslip_id INTEGER,
    
    code VARCHAR(50) NOT NULL,
    label VARCHAR(100) NOT NULL,
    element_type VARCHAR(20) NOT NULL, 
    
    input_type VARCHAR(20) NOT NULL, 
    value VARCHAR(255) NOT NULL,      
    quantity DECIMAL(10, 2) DEFAULT 1, 
    
    start_date DATE,
    end_date DATE,   
    
    CONSTRAINT fk_payroll_element_contract FOREIGN KEY (contract_id) REFERENCES contract (id) ON DELETE CASCADE,
    CONSTRAINT fk_payroll_element_payslip FOREIGN KEY (payslip_id) REFERENCES payslip (id) ON DELETE CASCADE,
    
    CONSTRAINT chk_payroll_element_attachment CHECK (
        (contract_id IS NOT NULL AND payslip_id IS NULL) OR 
        (contract_id IS NULL AND payslip_id IS NOT NULL)
    )
);

CREATE TABLE payslip_line (
    id SERIAL PRIMARY KEY,
    payslip_id INTEGER NOT NULL,
    code VARCHAR(50) NOT NULL,
    label VARCHAR(150) NOT NULL,
    line_type VARCHAR(50) NOT NULL, 
    base_calculation DECIMAL(12, 2),
    employee_rate DECIMAL(7, 4),
    employee_amount DECIMAL(12, 2),
    employer_rate DECIMAL(7, 4),
    employer_amount DECIMAL(12, 2),
    CONSTRAINT fk_payslip_line_payslip FOREIGN KEY (payslip_id) REFERENCES payslip (id) ON DELETE CASCADE
);

CREATE TABLE absence (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    absence_type VARCHAR(50) NOT NULL, 
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING',
    CONSTRAINT fk_absence_user FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);

CREATE TABLE leave_balance (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    leave_type VARCHAR(50) NOT NULL, 
    days_earned DECIMAL(5, 2) DEFAULT 0.00,
    days_taken DECIMAL(5, 2) DEFAULT 0.00,
    CONSTRAINT fk_leave_balance_user FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);
