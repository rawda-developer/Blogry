import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticleList from './pages/ArticlesList';
import NavBar from './NavBar';
import NotFound from './pages/NotFound';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/about' element={<AboutPage />} exact />
          <Route path='/article' element={<ArticlePage />} exact />
          <Route path='/articles' element={<ArticleList />} exact />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
