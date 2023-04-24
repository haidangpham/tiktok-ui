import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import styles from "./Profile.module.scss";
import { currentUser, userData } from '../../assets/data';
import Image from "../../layouts/components/Image";
import Button from '../../layouts/components/Button/Button'
import { LockIcon } from "../../components/Icons";
import ProfileTab from "../../layouts/components/ProfileTab";

const cx= classNames.bind(styles)

function Profile() {
    const {username}= useParams()
    let userInfo;
    let isCurrentUser= false
    
    //Check If it is current user profile
    if (username === currentUser.username) {
        isCurrentUser= true;
        userInfo = currentUser;
        console.log('set');
    } else {
        isCurrentUser = false;
        userInfo = userData.find((item) => item.username === username);
    }
    document.title = `${userInfo.name} (@${userInfo.username}) | TikTok`;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-info')}>
                <div className={cx('div-header')}>
                    <Image className={cx('user-avatar')} src={userInfo.avatar} alt="" />
                    <div className={cx('user-names')}>
                        <h2 className={cx('username')}>{userInfo.username}</h2>
                        <h1 className={cx('name')}>{userInfo.name}</h1>
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
                        <strong>{userInfo.following}</strong>
                        <span className={cx('count-label')}>Following</span>
                    </div>
                    <div className={cx('div-count')}>
                        <strong>{userInfo.followers}</strong>
                        <span className={cx('count-label')}>Followers</span>
                    </div>
                    <div className={cx('div-count')}>
                        <strong>{userInfo.likes}</strong>
                        <span className={cx('count-label')}>Likes</span>
                    </div>
                </div>
                <h2 className={cx('bio')}>{userInfo.bio === '' ? 'No bio yet.' : userInfo.bio}</h2>
            </div>
            <ProfileTab isCurrentUser={isCurrentUser} username={username} />
        </div>
    );
}

export default Profile;
