import spark.Request;

int counter = 0;

def get(request) {
    //counter++

    return [
        path: request.pathInfo(),
        //count: counter || 0,
        this: this.toString(),
        foo: _helper()
    ]
}

def _helper() {
    42
}
