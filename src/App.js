import "./App.css";

import Simple from "./navbar/Nav";
import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Home";

import Socials from "./components/Social";
import { DrawerColor } from "./components/DrawerColor";
function App() {
  return (
    <>
      <div className="App">
        <AnimatedCursor hasBlendMode={true} innerSize={12} outerSize={6} />
        <Simple />
       
        <Home />
        <Socials />
      </div>
    </>
  );
}

export default App;
