import { useParams } from 'react-router-dom';
import articles from './ArticlesContent';
const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  return (
    <>
      <h1 className='text-2xl mb-5'>{article.title}</h1>
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
