import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

import { useParams, Link } from 'react-router-dom';
import articles from './ArticlesContent';
import NotFound from './NotFound';
import ArticleList from '../components/ArticleList';
import CommentList from '../components/CommentList';
import UpvoteSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  const otherArticles = articles.filter((a) => a.name !== name);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [name]);

  useEffect(() => {
    fetch(`/api/articles/${name}`)
      .then((res) => res.json())
      .then(setArticleInfo);
  }, [name]);

  if (!article) return <NotFound />;
  return (
    <>
      <Link to='/articles' className='btn btn-outline'>
        <BiArrowBack className='mr-2' /> Back to all articles
      </Link>
      <h1 className='text-2xl mt-5 mb-5'>{article.title}</h1>
      <UpvoteSection
        articleInfo={articleInfo}
        articleName={name}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, i) => (
        <div key={i}>
          <p>{paragraph}</p>
          <br />
        </div>
      ))}
      <div className='divider'></div>
      {console.log('ARTICLE', articleInfo)}
      <CommentList comments={articleInfo.comments} />

      <div className='divider'></div>
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <div className='divider'></div>
      <h1 className='text-2xl mb-5'>Other Articles</h1>
      <ArticleList articles={otherArticles} />
    </>
  );
};
export default ArticlePage;
