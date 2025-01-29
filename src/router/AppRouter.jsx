import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";




export const AppRouter = () => {
  return (
    <>

      <Routes>

          <Route path="login/*" element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />}/>
              </Routes>
            </PublicRoute>
          }/> 


          <Route path="/*" element={
            <PrivateRouter>
              <HeroesRoutes /> 
            </PrivateRouter>
          }/>

          {/* // <Route path="/*" element={<HeroesRoutes />} /> */}


      </Routes>
    </>
  )
}
