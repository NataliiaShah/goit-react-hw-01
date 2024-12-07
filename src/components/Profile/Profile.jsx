import PropTypes from "prop-types";

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) => {
    
    return (
      <div>
  <div>
    <img src={avatar} 
      alt="User avatar"
    />
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
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

