var config = {
    has: function(key) {
        return key in localStorage;
    },
    get: function(key) {
        if (this.has(key)) {
            try {
                return JSON.parse(localStorage[key]);
            } catch(e) {
                return localStorage[key];
            }
        }
    },
    set: function(key, value) {
        localStorage[key] = JSON.stringify(value);
    }
};
