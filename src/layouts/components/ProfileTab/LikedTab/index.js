import classNames from 'classnames/bind';
import Proptypes from 'prop-types';

import styles from '../ProfileTab.module.scss';

const cx = classNames.bind(styles);

function LikedTab({ isCurrentUser, username }) {
    return (
        <div>
            {isCurrentUser ? (
                <>
                    <p className={cx('title-error')}>No liked videos yet</p>
                    <p className={cx('error-desc')}>Videos you liked will appear here</p>
                </>
            ) : (
                <>
                    <p className={cx('title-error')}>This user's liked videos are private</p>
                    <p className={cx('error-desc')}>Videos liked by {username} are currently hidden</p>
                </>
            )}
        </div>
    );
}
LikedTab.propTypes = {
    isCurrentUser: Proptypes.bool.isRequired,
};
export default LikedTab;
