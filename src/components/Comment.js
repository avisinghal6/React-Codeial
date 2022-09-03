import propTypes from 'prop-types';

import styles from '../styles/home.module.css';

const Comment = ({ comment }) => {
  return (
    <div className={styles.postCommentsItem}>
      <div className={styles.postCommentHeader}>
        <span className={styles.postCommentAuthor}>{comment.name}</span>
        <span className={styles.postCommentTime}>a minute ago</span>
        <span className={styles.postCommentLikes}>22</span>
      </div>

      <div className={styles.postCommentContent}>{comment.content}</div>
    </div>
  );
};

// propTypes should begin with 'p' when using with react components otherwise it does not work.
Comment.propTypes = {
  comment: propTypes.object.isRequired,
};

export default Comment;
