import Pages from "./pages/Everything/Everything";
import Category from "./components/Category/Category"
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search/Search";
import DarkMode from "./components/DarkMode/DarkMode";
import './index.css';
import './App.css';
import { Logo, Nav } from "./styles";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {

  return (
    
    <div className="App" id="App-header">
      <BrowserRouter>
      <DarkMode />
      <Nav>
        <GiKnifeFork />
        <Logo to ={"/"}>Recipe App</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>

  )
};

export default App;
