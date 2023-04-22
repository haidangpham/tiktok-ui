import classNames from "classnames/bind";
import Proptypes from 'prop-types';
import { useRef, useState } from "react";

import styles from './ProfileTab.module.scss'
import { LockIcon, LockedTabIcon, UserProfileIcon } from '../../../components/Icons';
import VideosTab from "./VideosTab";
import LikedTab from "./LikedTab";

const cx= classNames.bind(styles)
function ProfileTab({ isCurrentUser, username='' }) {
    const [activeTab, setActiveTab] = useState('videos');
    const videoTab = useRef();
    const likedTab = useRef();
    
    //Change Tab Logic
    const handleChangeTab = (e) => {
        e.target.classList.add(cx('active'));
        //Logic animation for bottom line position
        if (e.target !== videoTab.current) {
            videoTab.current.classList.remove(cx('active'));
            e.target.classList.add(cx('liked-bottom-active'));
            setActiveTab('liked');
        } else {
            likedTab.current.classList.remove(cx('active'));
            likedTab.current.classList.remove(cx('liked-bottom-active'));
            setActiveTab('videos');
        }
      };
    return (
        <div>
            <div className={cx('video-feed-tab')}>
                <div ref={videoTab} className={cx('video-label', 'active')} onClick={(e) => handleChangeTab(e)}>
                    <p>Videos</p>
                </div>
                <div ref={likedTab} className={cx('liked-label')} onClick={(e) => handleChangeTab(e)}>
                    <LockIcon className={cx('lock-icon')} />
                    <p>Liked</p>
                </div>
                <div className={cx('bottom-line')}></div>
            </div>
            <main className={cx('tab-wrapper')}>
                <div className={cx('error-container')}>
                    {!isCurrentUser && activeTab === 'liked' ? (
                        <LockedTabIcon className={cx('error-icon')} />
                    ) : (
                        <UserProfileIcon className={cx('error-icon')} />
                    )}
                    {activeTab === 'videos' ? (
                        <VideosTab isCurrentUser={isCurrentUser} />
                    ) : (
                        <LikedTab isCurrentUser={isCurrentUser} username={username} />
                    )}
                </div>
            </main>
        </div>
    );
}

ProfileTab.propTypes = {
    isCurrentUser: Proptypes.bool.isRequired,
    username: Proptypes.string,
};
export default ProfileTab;