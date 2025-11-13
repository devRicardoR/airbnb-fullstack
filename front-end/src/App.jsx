import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter> 
      <Header />
      <Home />
      <Login />
    </BrowserRouter>
  )
};

export default App;
