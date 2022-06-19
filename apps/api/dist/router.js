"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const trpc = __importStar(require("@trpc/server"));
const zod_1 = require("zod");
const users = {};
exports.appRouter = trpc
    .router()
    .query("users", {
    async resolve() {
        return users;
    },
})
    .query("getUserById", {
    input: zod_1.z.string(),
    async resolve({ input }) {
        return users[input];
    },
})
    .mutation("createUser", {
    input: zod_1.z.object({
        name: zod_1.z.string().min(3),
        bio: zod_1.z.string().max(142).optional(),
    }),
    async resolve({ input }) {
        const id = Date.now().toString();
        const user = { id, ...input };
        users[user.id] = user;
        return user;
    },
});
//# sourceMappingURL=router.js.map