import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <div className="container">
                    <Routes>
                        <Route path="/" exact element={<Home></Home>} />
                        <Route path="/movie/:imdbID" element={<MovieDetail></MovieDetail>} />
                        <Route path="*" element={<PageNotFound></PageNotFound>} />
                    </Routes>
                </div>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
