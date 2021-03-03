import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import SingleProject from "./components/SingleProject";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SingleProject} path='/:slug' />
        <Route component={Projects} path='/projects' />
      </switch>
    </BrowserRouter>
  )
}

export default App;
