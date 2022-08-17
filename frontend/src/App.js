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
        <div className='mx-auto w-4/5'>
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/about' element={<AboutPage />} exact />
            <Route path='/articles/:name' element={<ArticlePage />} exact />
            <Route path='/articles' element={<ArticleList />} exact />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
