export var localStorage = {
    set: function (key, value) {
        if (typeof value === "object") {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            window.localStorage.setItem(key, value);
        }
    },
    get: function (key) {
        var value = window.localStorage.getItem(key);
        if (!value) {
            return null;
        }
        try {
            var obj = JSON.parse(value);
            return obj;
        }
        catch (_a) { }
        return value;
    },
};
