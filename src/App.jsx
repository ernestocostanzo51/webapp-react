import Layout from "./layouts/layout"
import { BrowserRouter, Routes, Route } from "react-router"
import Movies from "./pages/Movies"
import HomePage from "./pages/HomePage"


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route element={<Layout/>}>
        <Route index  element={<HomePage/>}/>
        <Route path="books" element= {<Movies/>}/>
       </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
