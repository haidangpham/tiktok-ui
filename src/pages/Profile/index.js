import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import styles from "./Profile.module.scss";
import {currentUser} from '../../assets/data';
import Image from "../../layouts/components/Image";
import Button from '../../layouts/components/Button/Button'
import { LockIcon, UserProfileIcon } from "../../components/Icons";

const cx= classNames.bind(styles)

function Profile({  username  }) {
    //Check If it is current user profile
    const [isCurrentUser, setIsCurrentUser]= useState(false)
    if(username === currentUser.username){
        setIsCurrentUser(true)
    }
    document.title = `${currentUser.username} (@${currentUser.username}) | TikTok`;
    const videoTab = useRef();
    const likedTab = useRef();
    //Active tab state
    const [activeTab, setActiveTab] = useState('videos');

    const handleChangeTab = (e) => {
        e.target.classList.add(cx('active'));
        //remove active class & change bottom line position
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
        <div className={cx('wrapper')}>
            <div className={cx('user-info')}>
                <div className={cx('div-header')}>
                    <Image className={cx('user-avatar')} src={currentUser.avatar} alt="" />
                    <div className={cx('user-names')}>
                        <h2 className={cx('username')}>{currentUser.username}</h2>
                        <h1 className={cx('name')}>{currentUser.name}</h1>
                        {isCurrentUser ? (
                            <Button className={cx('edit-btn')} classic>
                                <div className={cx('edit-btn-content')}>
                                    <FontAwesomeIcon className={cx('edit-icon')} icon={faPenToSquare} />
                                    <span>Edit Profile</span>
                                </div>
                            </Button>
                        ) : (
                            <Button className={cx('follow-btn')} primary large>
                                Follow
                            </Button>
                        )}
                    </div>
                </div>
                <div className={cx('count-info')}>
                    <div className={cx('div-count')}>
                        <strong>12</strong>
                        <span className={cx('count-label')}>Following</span>
                    </div>
                    <div className={cx('div-count')}>
                        <strong>12</strong>
                        <span className={cx('count-label')}>Followers</span>
                    </div>
                    <div className={cx('div-count')}>
                        <strong>12</strong>
                        <span className={cx('count-label')}>Likes</span>
                    </div>
                </div>
                <h2 className={cx('bio')}>{currentUser.bio === '' ? 'No bio yet.' : currentUser.bio}</h2>
            </div>
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
            <main className={cx('tab-content-wrapper')}>
                <div className={cx('error-container')}>
                    <UserProfileIcon className={cx('user-icon')} />
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
            </main>
        </div>
    );
}

export default Profile;
