import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";


const TransactionHistory = ({items}) => {
    return (
        <table className={styles.transactionTable}>
            <thead>
                <tr>
                    <th className={styles.tableHead}>Type</th>
                    <th className={styles.tableHead}>Amount</th>
                    <th className={styles.tableHead}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={styles.tableLine} key={id}>
                        <td  className={styles.tableBody}>{type}</td>
                        <td  className={styles.tableBody}>{amount}</td>
                        <td  className={styles.tableBody}>{currency}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;

