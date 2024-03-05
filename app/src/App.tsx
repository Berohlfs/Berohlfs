// Radix
import { Theme } from "@radix-ui/themes"
// Libs
import { ThemeProvider } from "next-themes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
// Routes
import { routes } from "./routes"
// Layout
import { Layout } from "./layout/Layout"

export const App = ()=> {

  return (
    <ThemeProvider attribute={'class'}>
      <Theme accentColor={'orange'}>

      <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={<Layout>{route.component}</Layout>}/>
            ))}
          </Routes>  
        </BrowserRouter>
      
        <Toaster theme={'system'} richColors={true}/>
      </Theme>
    </ThemeProvider>
  )
}
