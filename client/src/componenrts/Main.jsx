import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Fotter"

export const Main=()=>{
return(<>
<div className="app-container">
<Header></Header>
 
      <div className="main-content">
    <Outlet></Outlet>
    </div>
   <Footer></Footer>
   </div>
</>)
}
