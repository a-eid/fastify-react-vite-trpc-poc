import * as trpc from "@trpc/server";
declare type User = {
    id: string;
    name: string;
    bio?: string;
};
export declare const appRouter: import("@trpc/server/dist/declarations/src/router").Router<unknown, unknown, {}, Record<"users", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<unknown, unknown, {}, undefined, undefined, Record<string, User>, unknown, Record<string, User>>> & Record<"getUserById", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<unknown, unknown, {}, string, string, User, unknown, User>>, Record<"createUser", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<unknown, unknown, {}, {
    bio?: string | undefined;
    name: string;
}, {
    bio?: string | undefined;
    name: string;
}, User, unknown, User>>, {}, trpc.DefaultErrorShape>;
export declare type AppRouter = typeof appRouter;
export {};
