import PropTypes from "prop-types";


const FriendListItem = ({
    avatar,
    name,
    isOnline,
}) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;


      