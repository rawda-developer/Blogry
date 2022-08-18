import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) =>
  articles.map((article, i) => <ArticleItem key={i} article={article} />);
export default ArticleList;
