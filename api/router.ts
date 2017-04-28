const Gson = Java.type("com.google.gson.Gson");
const LoggerFactory = Java.type("org.slf4j.LoggerFactory");
const Spark = Java.type("spark.Spark");
const JavaDate = Java.type("java.util.Date");
const JavaString = Java.type("java.lang.String");

const gson = new Gson();
const logger = LoggerFactory.getLogger(this.getClass());

Spark.before("/*", function(req: any, res: any) { req.attribute("timeStarted", new JavaDate()); });
Spark.get("/*", function(req: any, res: any) {
    res.type("application/json");

    return get(req, res);
}, gson.toJson);
Spark.after("/*", function(req: any, res: any) {
    const timeEnded = new JavaDate();
    logger.info(JavaString.format("%s %dms", req.pathInfo(),
        timeEnded.getTime() - (req.attribute("timeStarted")).getTime()));
});
