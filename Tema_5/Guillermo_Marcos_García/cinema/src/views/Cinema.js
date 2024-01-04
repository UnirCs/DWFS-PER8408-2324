import '../styles/cinema.css';
import {Movie} from "../components/Movie";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

import imageMovie1 from '../images/movie1.jpg'
import imageMovie2 from '../images/movie2.jpg'
import imageMovie3 from '../images/movie3.jpg'
import imageMovie4 from '../images/movie4.jpg'
import imageMovie5 from '../images/movie5.jpg'
import imageMovie6 from '../images/movie6.jpg'
import imageMovie7 from '../images/movie7.jpg'
import imageMovie8 from '../images/movie8.jpg'
import imageMovie9 from '../images/movie9.jpg'
function Cinema() {

    const movies = [
        { title: "Oppenheimer", summary: "This is the summary of the film...", duration:146, genre:"History, Action", rating: 9.5, image:imageMovie1},
        { title: "Freelance", summary: "This is the summary of the film...", duration:120, genre:"Horror", rating: 6.5, image:imageMovie2},
        { title: "Doctor who", summary: "This is the summary of the film...", duration:110, genre:"Science fiction", rating: 4.5, image:imageMovie3},
        { title: "Los que se quedan", summary: "This is the summary of the film...", duration:130, genre:"Comedy", rating: 8.5, image:imageMovie4},
        { title: "La bestia estelar", summary: "This is the summary of the film...", duration:1, genre:"Fantasy", rating: 6.0, image:imageMovie5},
        { title: "Saints & sinners", summary: "This is the summary of the film...", duration:146, genre:"Fantasy", rating: 7.3, image:imageMovie6},
        { title: "Napoleón", summary: "This is the summary of the film...", duration:146, genre:"History, Action", rating: 6.7, image:imageMovie7},
        { title: "AVATAR el sentido del agua", summary: "This is the summary of the film...", duration:146, genre:"Science fiction, Action", rating: 7, image:imageMovie8},
        { title: "Los juegos del hambre", summary: "This is the summary of the film...", duration:146, genre:"Science fiction, Action", rating: 8, image:imageMovie9},
    ];


  return (
    <div className="cinema">
        <Header/>
        <div className="movies-container">
            {movies.map((movie,id) => (
                <Movie key={id}
                       image={movie.image}
                       title={movie.title}
                       summary={movie.summary}
                       duration={movie.duration}
                       genre={movie.genre}
                       rating={movie.rating}
                />
            ))}
        </div>
        <Footer/>
    </div>
  );
}

export default Cinema;
