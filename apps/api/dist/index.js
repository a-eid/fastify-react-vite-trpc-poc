"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("@trpc/server/adapters/fastify");
const fastify_2 = __importDefault(require("fastify"));
const context_1 = require("./context");
const router_1 = require("./router");
const server = (0, fastify_2.default)({ maxParamLength: 5000, logger: true });
server.register(require("@fastify/cors"), {});
server.register(fastify_1.fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: router_1.appRouter, createContext: context_1.createContext },
});
(async () => {
    try {
        await server.listen({ port: 4000 });
        console.log("__ server started __");
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
})();
//# sourceMappingURL=index.js.map