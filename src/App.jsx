import Layout from "./layouts/layout"
import { BrowserRouter, Routes, Route } from "react-router"
import Movies from "./pages/Movies"
import SingleMovie from "./pages/SingleMovie"
import HomePage from "./pages/HomePage"


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route element={<Layout/>}>
        <Route index  element={<HomePage/>}/>
        <Route path="movies" element= {<Movies/>}/>
        <Route path="movies/:id" element= {<SingleMovie/>}/>
       </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
