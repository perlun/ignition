package SparkTest;

import static spark.Spark.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.google.gson.Gson;

public class App {
    public static void main(String[] args) {
        new App().run();
    }

    private void run() {
        Gson gson = new Gson();
        Logger logger = LoggerFactory.getLogger(this.getClass());

        get("/*", (req, res) -> {
            // TODO: compile some Groovy code dynamically and run it.
            // TODO: Test groovy.sql, preferably towards as400.
            res.type("application/json");
            return new MyMessage("You requested " + req.pathInfo());
        }, gson::toJson);
        after("/*", (req, res) -> logger.info(req.pathInfo()));
    }
}
