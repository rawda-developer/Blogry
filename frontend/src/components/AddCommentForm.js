import { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const addComment = (event) => {
    event.preventDefault();
    fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        comment,
      }),
    })
      .then((res) => res.json())
      .then(setArticleInfo);

    setUsername('');
    setComment('');
  };
  return (
    <div className='w-100'>
      <h2>Add a Comment</h2>
      <input
        type='text'
        className='input input-bordered w-full max-w-xl px-3 py-2 my-2'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        rows={4}
        cols={50}
        placeholder='Comment...'
        className='textarea textarea-bordered w-full max-w-xl px-3 py-2'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <button onClick={(e) => addComment(e)} className='btn btn-primary mt-3'>
        Submit
      </button>
    </div>
  );
};
export default AddCommentForm;
