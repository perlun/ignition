package SparkTest;

import static spark.Spark.*;

import javax.script.*;
import java.io.FileReader;
import java.util.Date;

import com.google.gson.Gson;
import groovy.lang.GroovyShell;
import groovy.lang.Script;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class App {
    public static void main(String[] args)
        throws Exception
    {
        if (args.length > 0 && args[0] == "groovy") {
            System.out.println("Running Groovy-based engine");
        }
        else {
            System.out.println("Running JavaScript-based engine");
            new App().runJavascriptExample();
        }
    }

    private void runJavascriptExample()
        throws Exception
    {
        Gson gson = new Gson();
        Logger logger = LoggerFactory.getLogger(this.getClass());
        ScriptEngineManager engineManager = new ScriptEngineManager();
        ScriptEngine engine = engineManager.getEngineByName("nashorn");

        // Fun facts:
        //
        // - When creating the engine on each request, the request takes about 7-8 ms to run.
        // - If the engine is already created, and we either read + eval on each request _or_ do it once (on startup), we go down to 0-1 ms per request for a hello world example.
        //
        // This is pretty impressive given that we are talking about a Java -> JS -> Java round trip.

        before("/*", (req, res) -> { req.attribute("timeStarted", new Date()); });
        get("/*", (req, res) -> {
            res.type("application/json");

            engine.eval(new FileReader("api/hello.js"));
            Invocable invocable = (Invocable) engine;

            return invocable.invokeFunction("get", req, res);
        }, gson::toJson);
        after("/*", (req, res) -> {
            Date timeEnded = new Date();
            logger.info(String.format("%s %dms", req.pathInfo(),
                timeEnded.getTime() - ((Date) req.attribute("timeStarted")).getTime()));
        });
    }

    private void runGroovyExample()
        throws Exception
    {
        Gson gson = new Gson();
        Logger logger = LoggerFactory.getLogger(this.getClass());
        GroovyShell shell = new GroovyShell();

        // - Creating the shell on each request => minimum request time: 7-8ms.
        // - Creating the shell at once, only re-evaluating the Script on each request => request time still 7-8ms.
        // - Parsing and creating the Script only once => request time: 0-1ms.

        before("/*", (req, res) -> { req.attribute("timeStarted", new Date()); });
        get("/*", (req, res) -> {
            res.type("application/json");

            Script script = shell.parse(new FileReader("api/hello.groovy"));
            return script.invokeMethod("get", req);
        }, gson::toJson);
        after("/*", (req, res) -> {
            Date timeEnded = new Date();
            logger.info(String.format("%s %dms", req.pathInfo(),
                timeEnded.getTime() - ((Date) req.attribute("timeStarted")).getTime()));
        });
    }
}
