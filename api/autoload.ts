var DBI = Java.type('org.skife.jdbi.v2.DBI');
var System = Java.type('java.lang.System');
var Collectors = Java.type('java.util.stream.Collectors');

function sql(callback: (h: Handle) => Object): Object {
    var h: Handle;

    try {
        // FIXME: Take from config instead of being hardwired...
        const dbi = new DBI("jdbc:postgresql://localhost/pagila");
        h = dbi.open();

        return callback(h);
    }
    finally {
        h && h.close();
    }
}
