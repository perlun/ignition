class IgnitionHandle {
    constructor(public rawHandle: Handle) {
    }

    // TODO: This should be a Java method instead. We want to get around the problem that the jdbi default mapper provides a "non-Hash#fetch-compliant" object.
    runQuery(sql: String, a: (row: Object) => Map) {
    }
}
