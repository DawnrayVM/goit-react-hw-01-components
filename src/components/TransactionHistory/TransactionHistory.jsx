import PropTypes from 'prop-types';
import './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    const data = items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
            <td>{type[0].toUpperCase().concat(type.slice(1))}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    ));
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>{data}</tbody>
        </table>
    );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};
