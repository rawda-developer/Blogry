import articles from './ArticlesContent';

import ArticleList from '../components/ArticleList';
const ArticleListPage = () => (
  <>
    <h1 className='text-2xl mb-5'>All Articles</h1>

    <div className='container mx-auto'>
      <ArticleList articles={articles} />
    </div>
  </>
);
export default ArticleListPage;
