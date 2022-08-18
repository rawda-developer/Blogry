import articles from './ArticlesContent';
import { Link } from 'react-router-dom';
const ArticleList = () => (
  <>
    <h1 className='text-2xl mb-5'>All Articles</h1>

    <div className='container mx-auto'>
      {articles.map((article) => (
        <div className='card w-100 bg-primary text-primary-content shadow-xl mb-5'>
          <div className='card-body'>
            <h2 className='card-title'>{article.title}</h2>
            <p>{article.content.slice(0, 1)}</p>
            <div className='card-actions justify-end'>
              <Link to={`/articles/${article.name}`} className='btn'>
                Read more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);
export default ArticleList;
