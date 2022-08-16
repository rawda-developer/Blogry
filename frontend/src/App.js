import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticleList from './pages/ArticlesList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/article' element={<ArticlePage />} />
          <Route path='/articles' element={<ArticleList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
