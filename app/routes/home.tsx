// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// export default function Home() {
//   return <Welcome />;
// }
import { Button } from "~/components/ui/button"

import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
    </div>
  )
}
