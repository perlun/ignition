interface IRequest {
    pathInfo(): String;
}

function get(request: IRequest, response) {
    this.counter++;

    return {
        path: request.pathInfo(),
        count: this.counter || 0,
        this: this.toString(),
        spam: 43
    }
}

function _helper() {
    return 42;
}
