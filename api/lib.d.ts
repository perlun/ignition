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

declare namespace org {
    namespace skife {
        namespace jdbi {
            namespace v2 {
                class DefaultMapper {

                }
            }
        }
    }
}

declare namespace spark {
    /** Holds information about an HTTP request */
    interface Request {
        /** Returns the path of the request. Example: /foo */
        pathInfo(): String;
    }

    /** Holds information about an HTTP response */
    interface Response {
    }
}

declare class Handle {
    createQuery(s: String): any;
    select(s: String): any;
    close(): void;
}
