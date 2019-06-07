/// <reference path="lib.d.ts"/>

import Request = spark.Request;
import Response = spark.Response;

function get(request: Request, response: Response) {
    return sql(conn => {
        // Example #1: If we want to convert some fields or anything in the output.
        return conn.runQuery("select * from actor", row => {
            return {
                country: row['country'],
                id: row['id'],
                first_name: row['first_name'],
                last_name: row['last_name']
            }
        });

        // // Example #2: A straight return of the result set.
        // return conn.select("select * from actor");
    });
}
