package SparkTest;

import javax.script.*;
import java.io.FileReader;

public class App {
    public static void main(String[] args)
        throws Exception
    {
        System.out.println("Running JavaScript-based engine");
        new App().runJavascriptExample();
    }

    private void runJavascriptExample()
        throws Exception
    {
        final String file = "bin/app.js";

        ScriptContext context = new SimpleScriptContext();
        context.setAttribute(ScriptEngine.FILENAME, file, ScriptContext.ENGINE_SCOPE);

        ScriptEngineManager engineManager = new ScriptEngineManager();
        ScriptEngine engine = engineManager.getEngineByName("nashorn");
        engine.eval(new FileReader(file), context);
    }
}
