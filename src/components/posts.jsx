const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => {
        const relId = post.related.thumbnail.default[0];
        const imageUrl = post.references[relId].link.media;
        const canonical = post.link.canonical;
        const createdTime = `${new Date(post.date.created).getDay()}/${new Date(
          post.date.created
        ).getMonth()}/${new Date(post.date.created).getFullYear()}`;

        return (
          <div className="col-md-4" key={post.id}>
            <div className="card mb-4">
              <img
                src={imageUrl}
                className="card-img-top"
                alt={post.headline.default}
              />
              <div className="card-body">
                <p>{createdTime}</p>
                <h5 className="card-title">{post.headline.default}</h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.standfirst.default,
                  }}
                />
                <a href={canonical} target="_blank" className="btn btn-primary">
                  Read Me
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
