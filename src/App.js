import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Project} path='/project' />
      </switch>
    </BrowserRouter>
  )
}

export default App;
