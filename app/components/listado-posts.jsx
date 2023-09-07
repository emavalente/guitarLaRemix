import Post from "./post";

function ListadoPosts({ posts }) {
  return (
    <>
      <h1 className="heading">Blog</h1>
      <div className="blog">
        {posts.map((post) => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </>
  );
}

export default ListadoPosts;
