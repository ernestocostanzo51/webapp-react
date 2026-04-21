import Layout from "./layouts/layout"
import { BrowserRouter, Routes, Route } from "react-router"
import Books from "./pages/Books"
import HomePage from "./pages/HomePage"


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route element={<Layout/>}>
        <Route index  element={<HomePage/>}/>
        <Route path="books" element= {<Books/>}/>
       </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
