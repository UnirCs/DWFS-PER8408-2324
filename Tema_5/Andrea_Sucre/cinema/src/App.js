import './App.css';
import {Movies} from "./views/Movies";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Movies />
        <Footer />
    </div>
  );
}

export default App;
