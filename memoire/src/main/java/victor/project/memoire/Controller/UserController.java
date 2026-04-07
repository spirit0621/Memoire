package victor.project.memoire.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import victor.project.memoire.Modele.User;
import victor.project.memoire.Repository.UserRepository;
import java.util.ArrayList;

import java.util.List;

@RestController
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello world";
    }

    @GetMapping("/users")
    // public Iterable<User> users() {
    // return userRepository.findAll();
    // }
    public List<String> user() {
        List<String> infos = new ArrayList<>();
        for (User user : userRepository.findAll()) {
            infos.add(user.getId() + " " + user.getName());
        }
        return infos;
    }
}
