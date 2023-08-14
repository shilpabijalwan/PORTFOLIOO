import { InfoOutlineIcon } from "@chakra-ui/icons";
import "./App.css";

import Simple from "./navbar/Nav";
import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { Box } from "@chakra-ui/react";
import Socials from "./components/Social";
function App() {
  return (
    <>
      <div className="App">
        <AnimatedCursor
          hasBlendMode={true}
          innerSize={10}
          outerSize={8}
        />
        <Simple />
        <Home />
        <Socials />
      </div>
    </>
  );
}

export default App;
