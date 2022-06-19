import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify"
import fastify from "fastify"
import { createContext } from "./context"
import { appRouter } from "./router"

const server = fastify({ maxParamLength: 5000, logger: true })

server.register(require("@fastify/cors"), {
  // put your options here
})

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext },
})
;(async () => {
  try {
    await server.listen({ port: 4000 })
    console.log("__ server started __")
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
})()
