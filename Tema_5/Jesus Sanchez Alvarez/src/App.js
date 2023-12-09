import './App.css';
import Footer from './Footer.js';
import Header from './Header.js'
import MovieList from './MovieList.js';

function App() {
  return (<>
    <div className="App">

      <Header/>
      <MovieList />
     <Footer/>
    </div>
   
    </>
  );
}

export default App;
