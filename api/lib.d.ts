declare class Java {
  static type(name: String): any;
}

declare class JavaObject {
  class: any;
}

declare class Map<TKey, TValue> extends JavaObject {
  // FIXME: Technically incorrect, but TypeScript doesn't allow us to declare anything else than 'string or number' as the key type.
  [key: string]: TValue;
}

/** Holds information about an HTTP request */
interface SparkRequest {
    /** Returns the path of the request. Example: /foo */
    pathInfo(): String;
}

/** Holds information about an HTTP response */
interface SparkResponse {
}

declare class Handle {
  select(s: String): any;
  close(): void;
}
