// Radix
import { Theme } from "@radix-ui/themes"
// Libs
import { ThemeProvider } from "next-themes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
// Routes
import { open_routes, auth_routes } from "./routes"
// Layouts
import { AuthLayout } from "./layout/auth/AuthLayout"

export const App = ()=> {

  return (
    <ThemeProvider attribute={'class'}>
      <Theme accentColor={'grass'}>

      <BrowserRouter>
          <Routes>
            {auth_routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={<AuthLayout>{route.component}</AuthLayout>}/>
            ))}

            {open_routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.component}/>
            ))}
          </Routes>  
        </BrowserRouter>
      
        <Toaster theme={'system'} richColors={true}/>
      </Theme>
    </ThemeProvider>
  )
}
