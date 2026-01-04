package victor.project.memoire;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MemoireApplication {
  public static void main(String[] args) {
    SpringApplication.run(MemoireApplication.class, args);

    Employee employee = new Employee("victor", 25, "BOSS");

    System.out.println(employee.getName());

  }

  @GetMapping("/hello")
  public String hello(@RequestParam(value = "param", defaultValue = "world") String name) {
    String result;
    /*
     * if (name.equals ("victor")) {
     * result="BOSS";
     * }
     * else if (name.equals("charles")){
     * result="sensei";
     * }
     * else {
     * result=name;
     * }
     */
    switch (name) {
      case "victor":
        result = "BOSS";
        break;
      case "charles":
        result = "sensei";
        break;

      default:
        result = name;
        break;
    }
    System.out.println(result);
    return String.format("Hello %s!", result);

  }

  @GetMapping("/countdown")
  public String countdown(@RequestParam(value = "param", defaultValue = "4") int name) {

    String result = "decompte";

    System.out.println(name != 0);
    {
      String nbAjoute = String.valueOf(name);

      result = result + nbAjoute;

      name = name - 1;
      System.out.println(result);
    }

    while (name != 0)
      ;

    return result;

  }

}
