// Auth pages
import { Characters } from "./pages/auth/Characters"
// Open pages
import { Home } from "./pages/other/Home"

type Route = {
    component: JSX.Element,
    path: string
}

export const auth_routes: Route[] = [
    {path: '/characters', component: <Characters/>},
]

export const open_routes: Route[] = [
    {path: '/', component: <Home/>},
]