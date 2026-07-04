# Ressources et Références - Application Memoire

## 1. Documentation Officielle

### 1.1 Java & Spring Boot

- [Spring Boot Official Docs](https://spring.io/projects/spring-boot)
- [Spring Data JPA Reference](https://spring.io/projects/spring-data-jpa)
- [Spring Security Reference](https://spring.io/projects/spring-security)
- [Java 21 Documentation](https://docs.oracle.com/en/java/javase/21/)
- [Maven Documentation](https://maven.apache.org/documentation.html)

### 1.2 Frontend

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript Tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

### 1.3 Bases de Données

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [JPA/Hibernate Documentation](https://hibernate.org/orm/documentation/5.6/)

### 1.4 Docker & DevOps

- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 2. Outils de Développement

### 2.1 IDEs

- **IntelliJ IDEA** - IDE complète pour Java
  - Édition Community (gratuite)
  - Édition Ultimate (payante)
- **VS Code** - Léger et extensible
  - Extensions: Spring Boot Extension Pack
  - Extensions: Debugger for Java

### 2.2 Gestionnaire de Versions

- **Git** - Version control system
  - [Git Documentation](https://git-scm.com/doc)
  - [GitHub Documentation](https://docs.github.com)

### 2.3 Build & Testing

- **Maven** - Build tool
  - Commandes: `mvn clean`, `mvn build`, `mvn test`
- **JUnit 5** - Testing framework
- **Mockito** - Mocking library
- **Postman** - API testing tool

### 2.4 Monitoring & Logging

- **Logback** - Logging framework
  - Configuration: `logback-spring.xml`
- **SLF4J** - Logging facade
- **Spring Actuator** - Monitoring endpoints

### 2.5 Documentation

- **Swagger/Springdoc OpenAPI** - API documentation
- **Javadoc** - Code documentation
- **Markdown** - Documentation files

## 3. Libraries & Dépendances Recommandées

### 3.1 Backend

```xml
<!-- Spring Boot Starter Web -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- Spring Data JPA -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- Spring Security -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- JWT (JSON Web Token) -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.12.3</version>
</dependency>

<!-- Validation -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>

<!-- Lombok (optionnel) -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>

<!-- Database Driver (PostgreSQL) -->
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <version>42.7.1</version>
</dependency>

<!-- Database Driver (MySQL) -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
</dependency>

<!-- Flyway (Migrations) -->
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>

<!-- Testing -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>

<!-- Mockito -->
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <scope>test</scope>
</dependency>

<!-- Springdoc OpenAPI (Swagger) -->
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.0.2</version>
</dependency>
```

### 3.2 Frontend

- **No dependencies required** - Vanilla JavaScript
- **Optional:**
  - Axios (HTTP client)
  - Chart.js (Charts)
  - Moment.js (Date manipulation)

## 4. Patterns & Best Practices

### 4.1 Patterns Utilisés

- **MVC** - Model-View-Controller
- **Layered Architecture** - Présentation, Business, Data
- **Repository Pattern** - Abstraction de la persistance
- **Service Pattern** - Logique métier
- **DTO Pattern** - Data Transfer Objects
- **Dependency Injection** - Inversion of Control

### 4.2 Clean Code Principles

- [Clean Code by Robert C. Martin](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Design Patterns](https://refactoring.guru/design-patterns)

### 4.3 Security Best Practices

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Spring Security Best Practices](https://spring.io/guides/gs/securing-web/)

## 5. Frameworks & Librairies Alternatives

### 5.1 Authentification Alternative

- **Auth0** - Authentification as a Service
- **Keycloak** - Open Source Identity Provider
- **OAuth 2.0** - Standard d'authentification

### 5.2 Frontend Framework (Pour Futures Versions)

- **React** - UI framework
- **Vue.js** - Progressive framework
- **Angular** - Full framework
- **Next.js** - React meta-framework

### 5.3 Database Alternatives

- **MongoDB** - NoSQL database
- **Redis** - In-memory cache
- **Elasticsearch** - Search engine

### 5.4 Message Brokers

- **RabbitMQ** - Message broker
- **Apache Kafka** - Event streaming

## 6. Tutoriels Recommandés

### 6.1 Spring Boot

- [Spring Boot Getting Started](https://spring.io/guides/gs/spring-boot/)
- [Building REST APIs with Spring Boot](https://spring.io/guides/gs/rest-service/)
- [Spring Data JPA Tutorial](https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa)

### 6.2 JavaScript

- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [JavaScript Tutorial by W3Schools](https://www.w3schools.com/js/)
- [JavaScript.info](https://javascript.info/)

### 6.3 Git & GitHub

- [GitHub Skills](https://skills.github.com/)
- [Pro Git Book](https://git-scm.com/book/en/v2)

### 6.4 Docker

- [Docker Getting Started](https://docs.docker.com/get-started/)
- [Docker &amp; Compose for Java Developers](https://www.docker.com/blog/docker-compose-for-java-developers/)

## 7. Ressources Communautaires

### 7.1 Forums & Q&A

- [Stack Overflow](https://stackoverflow.com/) - Questions & réponses
- [Reddit r/java](https://www.reddit.com/r/java/) - Communauté Java
- [Reddit r/webdev](https://www.reddit.com/r/webdev/) - Développement web
- [Spring Community](https://spring.io/community) - Communauté Spring

### 7.2 Blogs & Articles

- [Baeldung](https://www.baeldung.com/) - Tutoriels Java & Spring
- [DZone](https://dzone.com/) - Articles techniques
- [Medium](https://medium.com/) - Articles variés

### 7.3 YouTube Channels

- [Spring Developer](https://www.youtube.com/@SpringDeveloper)
- [Traversy Media](https://www.youtube.com/@TraversyMedia)
- [Programming with Mosh](https://www.youtube.com/@programmingwithmosh)

## 8. Checklist de Configuration Initiale

### 8.1 Projet Java

- [ ] Installer JDK 21
- [ ] Installer Maven
- [ ] Configurer IDE (IntelliJ ou VS Code)
- [ ] Clone du repository
- [ ] `mvn clean install`
- [ ] Configuration application.properties
- [ ] Configuration base de données
- [ ] Exécuter l'application

### 8.2 Frontend

- [ ] Configurer structure HTML
- [ ] Importer CSS frameworks si nécessaire
- [ ] Setup webpack/bundler (optionnel)
- [ ] Configure Live Reload
- [ ] Test avec serveur local

### 8.3 Environnement Local

- [ ] Docker installé
- [ ] Docker Compose installé
- [ ] Git configuré
- [ ] SSH key générée (GitHub)
- [ ] Éditeur configuré
- [ ] Extensions IDE installées

## 9. Templates & Snippets

### 9.1 Spring Boot Controller Template

```java
@RestController
@RequestMapping("/api/resource")
@Slf4j
public class ResourceController {
  
    @Autowired
    private ResourceService service;
  
    @GetMapping
    public ResponseEntity<?> getAll() {
        try {
            List<?> resources = service.getAll();
            return ResponseEntity.ok(resources);
        } catch (Exception e) {
            log.error("Error fetching resources", e);
            return ResponseEntity.status(500).body("Error");
        }
    }
}
```

### 9.2 JavaScript Fetch Template

```javascript
async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
      
        if (!response.ok) throw new Error(response.statusText);
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
```

## 10. Performance Benchmarks (Cibles)

| Métrique              | Cible              |
| ---------------------- | ------------------ |
| Temps réponse GET     | < 500ms            |
| Temps réponse POST    | < 1000ms           |
| Temps export PDF       | < 5s pour 100 docs |
| Temps pagination       | < 200ms            |
| Requêtes simultanées | > 100              |
| Uptime                 | > 99.5%            |

---

*Dernière mise à jour: 2026-07-03*
