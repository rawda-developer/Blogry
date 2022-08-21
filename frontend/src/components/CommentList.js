const CommentList = ({ comments }) => {
  if (!comments) return <h1>There're no comments on this article</h1>;
  return (
    <>
      <h1 className='text-lg font-bold mx-2 my-4'>Comments</h1>
      {comments.map((comment, i) => (
        <div className='m-2' key={i}>
          <h3 className='text-white font-bold'>{comment.username}</h3>
          <p className='text-white my-4'>{comment.comment}</p>
        </div>
      ))}
    </>
  );
};
export default CommentList;
