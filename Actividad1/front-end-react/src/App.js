import { AdminContext } from "./context/AdminContext";
import { AdminRouter } from "./router/AdminRouter";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import './styles/App.css';
import {useApartamentos} from "./hooks/useApartamentos";
import {useBotones} from "./hooks/useBotones";



function App() {

  const apartamentos = useApartamentos();
  const botones = useBotones();
  return (
      <>
          <Header />
        <AdminContext.Provider value={{botones, apartamentos}}>

          <AdminRouter></AdminRouter>

        </AdminContext.Provider>
          <Footer/>
      </>
  );
}

export default App;
