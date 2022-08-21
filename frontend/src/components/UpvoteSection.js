import React from 'react';
const UpvoteSection = ({ articleInfo, articleName, setArticleInfo }) => {
  const upvoteArticle = () => {
    fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post',
    })
      .then((res) => res.json())
      .then(setArticleInfo);
    console.log(articleInfo);
  };
  return (
    <div className='mb-3'>
      <p className='text-lg my-3 text-white'>
        This post has been upvoted {articleInfo.upvotes} times.
      </p>
      <button className='btn btn-outline' onClick={() => upvoteArticle()}>
        Upvote
      </button>
    </div>
  );
};
export default UpvoteSection;
