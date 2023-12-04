import React from "react";
import {Header} from "./components/Header";
import {MovieList} from "./components/MovieList";
import {Footer} from "./components/Footer";

export const App = () => {
    return (
        <div>
          <Header />
          <MovieList />
          <Footer />
        </div>
    );
}
