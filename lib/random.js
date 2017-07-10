"use strict";
const _1 = require("./");
class InitializerClass {
    constructor() {
    }
    setDefaultConfig(config) {
        config = {
            lang: 'en',
            len: 2
        };
        return config;
    }
    sanitize(userName, config = {}) {
        let initConfig = (!config || !config.hasOwnProperty('lang')) ? this.setDefaultConfig(config) : config;
        let userArray = (userName.trim().split(" ").
            map((pname) => {
            let retval = (_1.excludedTitles[initConfig.lang].indexOf(pname) > -1)
                ? null : pname;
            return retval;
        }) || []).
            filter((pname) => {
            return pname != undefined;
        });
        return userArray;
    }
    initialize(userName, config) {
        let userArray = this.sanitize(userName, config);
        return (userArray.length > 1) ?
            `${userArray[0][0]}${userArray[userArray.length - 1][0]}`.toUpperCase() :
            `${userArray[0][0]}`.toUpperCase() || null;
    }
}
exports.Initializer = new InitializerClass();
//# sourceMappingURL=random.js.map