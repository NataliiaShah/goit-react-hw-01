import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./FriendListItem.module.css";



const FriendListItem = ({
    avatar,
    name,
    isOnline,
   }) => {
    return (
        <div className={styles.friends}>
            <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={styles.name}>{name}</p>
            <p 
           className={clsx(styles["status"], {
           [styles.online]: isOnline,
           [styles.offline]: !isOnline,
           })}
            >
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;


      