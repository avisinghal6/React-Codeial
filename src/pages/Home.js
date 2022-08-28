const Home = () => {
  return (
    <div className="posts-list">
      <div className="posts-wrapper">
        <div className="posts-header">
          <div className="posts-avatar">
            <img
              src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt="user-pic"
            />
            <div>
              <span className="post-author"> Avi</span>
              <span className="post-time"> A Minute Ago</span>
            </div>
          </div>
          <div className="posts-actions">
            <div className="posts-like">
              <img
                src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                alt="likes-icon"
              />
              <span>5</span>
            </div>
            <div className="posts-comments-icon">
              <img
                src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                alt="comments-icon"
              />
              <span>2</span>
            </div>
          </div>
          <div className="posts-comment-box">
            <input placeholder="start typing" />
          </div>
          <div className="posts-comments-list">
            <div className="posts-comment-item">
              <div className="posts-comment-header">
                <span className="post-comment-author">Bill</span>
                <span className="post-comment-time"> a minute ago</span>
                <span className="post-comment-likes"> 22</span>
              </div>
              <div className="post-comment-content"> Random Content</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
