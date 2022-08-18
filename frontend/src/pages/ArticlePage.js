import { useParams } from 'react-router-dom';
import articles from './ArticlesContent';
import NotFound from './NotFound';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import ArticleList from '../components/ArticleList';
const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  const otherArticles = articles.filter((a) => a.name !== name);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [article]);

  if (!article) return <NotFound />;

  return (
    <>
      <Link to='/articles' className='btn btn-outline'>
        <BiArrowBack className='mr-2' /> Back to all articles
      </Link>
      <h1 className='text-2xl mt-5 mb-5'>{article.title}</h1>
      {article.content.map((paragraph, i) => (
        <div key={i}>
          <p>{paragraph}</p>
          <br />
        </div>
      ))}
      <div className='divider'></div>
      <h1 className='text-2xl mb-5'>Other Articles</h1>
      <ArticleList articles={otherArticles} />
    </>
  );
};
export default ArticlePage;
