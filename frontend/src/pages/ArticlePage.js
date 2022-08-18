import { useParams } from 'react-router-dom';
import articles from './ArticlesContent';
import NotFound from './NotFound';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  if (!article) return <NotFound />;
  return (
    <>
      <Link to='/articles' className='btn btn-outline'>
        <BiArrowBack className='mr-2' /> Back to all articles
      </Link>
      <h1 className='text-2xl mt-5 mb-5'>{article.title}</h1>
      {article.content.map((paragraph, i) => (
        <>
          <p key={i}>{paragraph}</p>
          <br />
        </>
      ))}
    </>
  );
};
export default ArticlePage;
