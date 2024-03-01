// Pages
import { Home } from "./pages/Home"

type Route = {
    component: JSX.Element,
    path: string
}

export const routes: Route[] = [
    {path: '/', component: <Home/>},
]