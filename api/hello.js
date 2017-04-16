function get(request, response) {
    this.counter++;

    return {
        path: request.pathInfo(),
        count: this.counter || 0,
        this: this.toString(),
        foo: _helper()
    }
}

function _helper() {
    return 42;
}
