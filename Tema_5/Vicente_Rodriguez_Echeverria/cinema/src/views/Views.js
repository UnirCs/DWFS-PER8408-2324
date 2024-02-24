import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';
const movies = [
    {
        id: 1,
        title: 'El Gran Lebowski',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Biglebowskiposter.jpg',
        synopsis: 'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
        duration: '117 min',
        genre: 'Comedy',
        rating: 8.1
    },
    {
        id: 2,
        title: 'Pulp Fiction',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Biglebowskiposter.jpg',
        synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        duration: '154 min',
        genre: 'Crime, Drama',
        rating: 8.9
    },
    {
        id: 3,
        title: 'The Shawshank Redemption',
        image: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
        synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        duration: '142 min',
        genre: 'Drama',
        rating: 9.3
    },
    {
        id: 4,
        title: 'The Dark Knight',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
        synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        duration: '152 min',
        genre: 'Action, Crime, Drama',
        rating: 9.0
    },
    {
        id: 5,
        title: 'Inception',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
        synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        duration: '148 min',
        genre: 'Action, Adventure, Sci-Fi',
        rating: 8.8
    },
    {
        id: 6,
        title: 'Forrest Gump',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg',
        synopsis: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        duration: '142 min',
        genre: 'Drama, Romance',
        rating: 8.8
    },
    {
        id: 7,
        title: 'The Matrix',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
        synopsis: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        duration: '136 min',
        genre: 'Action, Sci-Fi',
        rating: 8.7
    },
    {
        id: 8,
        title: 'Fight Club',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
        synopsis: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
        duration: '139 min',
        genre: 'Drama',
        rating: 8.8
    },
    {
        id: 9,
        title: 'The Godfather',
        image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
        synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        duration: '175 min',
        genre: 'Crime, Drama',
        rating: 9.2
    },
    {
        id: 10,
        title: 'Goodfellas',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg',
        synopsis: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
        duration: '146 min',
        genre: 'Biography, Crime, Drama',
        rating: 8.7
    },
    {
        id: 11,
        title: 'Schindler\'s List',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg',
        synopsis: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        duration: '195'
    }
];
function Views() {
    return (
        <div>
            <Header />
            <MovieList movies={movies} />
            <Footer />
        </div>
    );
}

export default Views;
