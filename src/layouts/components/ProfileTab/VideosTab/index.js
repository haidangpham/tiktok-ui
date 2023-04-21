import classNames from "classnames/bind";
import Proptypes from 'prop-types';

import styles from '../ProfileTab.module.scss'

const cx= classNames.bind(styles)

function VideosTab({ isCurrentUser }) {
    return (
        <div>
            {isCurrentUser ? (
                <>
                    <p className={cx('title-error')}>Upload your first video</p>
                    <p className={cx('error-desc')}>Your videos will appear here</p>
                </>
            ) : (
                <>
                    <p className={cx('title-error')}>No content</p>
                    <p className={cx('error-desc')}>This user has not published any videos.</p>
                </>
            )}
        </div>
    );
}
VideosTab.propTypes = {
    isCurrentUser: Proptypes.bool.isRequired,
};
export default VideosTab;