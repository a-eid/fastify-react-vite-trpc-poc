"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
function createContext({ req, res }) {
    var _a;
    const user = { name: (_a = req.headers.username) !== null && _a !== void 0 ? _a : "anonymous" };
    return { req, res, user };
}
exports.createContext = createContext;
//# sourceMappingURL=context.js.map