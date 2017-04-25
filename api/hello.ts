import Request from './request';

function get(request: Request, response: SparkResponse) {
    return sql(conn => {
        // Example #1: If we want to convert some fields or anything in the output.
        // return h.select("select * from actor").stream().map((row: Map<String, Object>) => {
        //     return {
        //         country: row['country'],
        //         id: row['id']
        //     }
        // }).collect(Collectors.toList());

        // Example #2: A straight return of the result set.
        return conn.select("select * from actor");
    });
}
