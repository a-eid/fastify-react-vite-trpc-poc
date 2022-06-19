import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClientProvider, QueryClient } from "react-query"

import { trpc } from "./utils/trpc"

function App() {
  const { data, refetch } = trpc.useQuery(["users"])
  const { mutate } = trpc.useMutation(["createUser"])

  return (
    <pre>
      <button
        onClick={() => {
          mutate(
            {
              name: "name",
              bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
              onSuccess: refetch as () => void,
            },
          )
        }}
      >
        add
      </button>
      {JSON.stringify(data ?? "{}", null, 2)}
    </pre>
  )
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})
const trpcClient = trpc.createClient({
  url: "http://localhost:4000/trpc",
  // optional
  headers() {
    return {
      // authorization: getAuthCookie(),
    }
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>,
)
