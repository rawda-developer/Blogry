import { useParams } from 'react-router-dom';
const ArticlePage = () => {
  const { name } = useParams();
  return (
    <>
      <h1 className='text-xl mb-5'>This is the {name} Article</h1>
    </>
  );
};
export default ArticlePage;
