import articles from './ArticlesContent';

import ArticleList from '../components/ArticleList';
const ArticleListPage = () => (
  <>
    <div className='container mx-auto'>
      <h1 className='text-2xl mb-5'>All Articles</h1>
      <ArticleList articles={articles} />
    </div>
  </>
);
export default ArticleListPage;
