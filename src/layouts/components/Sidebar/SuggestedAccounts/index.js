import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import SuggestAccountItem from './SuggestAccountItem';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <SuggestAccountItem id={3} />
            <SuggestAccountItem id={2} />
            <SuggestAccountItem id={4} />
            <SuggestAccountItem id={2} />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
