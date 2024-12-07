import styles from "./Profile.module.css";
import PropTypes from "prop-types";


const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) => {
    
    return (
      <div className={styles.card}>
  <div className={styles.description}>
    <img src={avatar} 
            alt="User avatar"
            className={styles.avatar}
    />
    <p className={styles.userName}>{username}</p>
    <p className={styles.userInfo}>{tag}</p>
    <p className={styles.userInfo}>{location}</p>
  </div>

  <ul className={styles.statsList}>
    <li className={styles.statsItem}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{followers}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{views}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
</div>

    )
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;

