import classNames from "classnames/bind";
import Proptypes from 'prop-types';

import styles from './ProfileTab.module.scss'
import { LockedTabIcon, UserProfileIcon } from '../../../components/Icons';
import VideosTab from "./VideosTab";
import LikedTab from "./LikedTab";

const cx= classNames.bind(styles)
function ProfileTab({ isCurrentUser, tab }) {
    return (
        <main className={cx('tab-wrapper')}>
            <div className={cx('error-container')}>
                {!isCurrentUser && tab === 'liked' ? (
                    <LockedTabIcon className={cx('error-icon')} />
                ) : (
                    <UserProfileIcon className={cx('error-icon')} />
                )}
                {tab === 'videos' ? (
                    <VideosTab isCurrentUser={isCurrentUser} />
                ) : (
                    <LikedTab isCurrentUser={isCurrentUser} />
                )}
            </div>
        </main>
    );
}

ProfileTab.propTypes = {
    isCurrentUser: Proptypes.bool.isRequired,
    tab: Proptypes.string.isRequired,
};
export default ProfileTab;