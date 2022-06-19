import { createReactQueryHooks } from "@trpc/react"
import type { AppRouter } from "@as/api/src/router"

export const trpc = createReactQueryHooks<AppRouter>()
