"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(true);
        }, duration);
    });
}
exports.sleep = sleep;
;
//# sourceMappingURL=index.js.map