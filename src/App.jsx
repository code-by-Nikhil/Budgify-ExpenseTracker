import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login"
import Expenses from "./Expenses"
import Layout from './components/Layout'

export default function App() {  

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/expenses" element={<Expenses />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}
