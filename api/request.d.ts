/** Holds information about an HTTP request */
interface SparkRequest {
    /** Returns the path of the request. Example: /foo */
    pathInfo(): String;
}

export default SparkRequest;
