import "./App.css";
import "./locomotive-scroll.css";
import Top from "./Pages/Top";
import Paragraph from "./Pages/Paragraph";
import Bottom from "./Pages/Bottom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const text =
    "Lorem ipsum dolor sit amet cons lorem ipsum do lor sit amet co Lorem ipsum dolor sit amet cons lorem ipsum do lor sit amet co";

  return (
    <div className="App">
      <Top />
      <Paragraph value={text} />
      <Bottom />
    </div>
  );
}

export default App;
