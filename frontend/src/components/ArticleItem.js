import { Link } from 'react-router-dom';
const ArticleItem = ({ article }) => (
  <div className='card w-100 bg-primary text-primary-content shadow-xl mb-5'>
    <div className='card-body'>
      <h2 className='card-title'>{article.title}</h2>
      <p>{article.content[0]}</p>
      <div className='card-actions justify-end'>
        <Link to={`/articles/${article.name}`} className='btn'>
          Read more
        </Link>
      </div>
    </div>
  </div>
);
export default ArticleItem;
