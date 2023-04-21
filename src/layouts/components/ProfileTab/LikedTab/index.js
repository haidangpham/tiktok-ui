import classNames from 'classnames/bind';
import Proptypes from 'prop-types';

import styles from '../ProfileTab.module.scss';

const cx = classNames.bind(styles);

function LikedTab({isCurrentUser}) {
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
                    {/* get username here */}
                    <p className={cx('error-desc')}>Videos liked by ? are currently hidden</p>
                </>
            )}
        </div>
    );
}
LikedTab.propTypes = {
    isCurrentUser: Proptypes.bool.isRequired,
};
export default LikedTab;
