import { useState } from "react";
import { GeoContext } from "./components/GeoContext";
import { GeometricRouter } from "./router/GeometricRouter";
import { Triangulo } from "./components/Triangulo";

function App() {
  const [globalClicks, setGlobalClicks] = useState(0);

  let updateClicks = () => {
    setGlobalClicks(globalClicks + 1);
  };

  return (
    <>
      <Triangulo></Triangulo>
      <GeoContext.Provider value={{ globalClicks, updateClicks }}>
        <GeometricRouter></GeometricRouter>
      </GeoContext.Provider>
    </>
  );
}

export default App;
