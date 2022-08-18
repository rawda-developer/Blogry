import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) =>
  articles.map((article) => <ArticleItem article={article} />);
export default ArticleList;
