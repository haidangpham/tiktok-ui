import classNames from "classnames/bind";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import styles from "./Profile.module.scss";
import {currentUser} from '../../assets/data';
import Image from "../../layouts/components/Image";
import Button from '../../layouts/components/Button/Button'
import { LockIcon } from "../../components/Icons";

const cx= classNames.bind(styles)

function Profile() {
    const videoTab= useRef()
    const likedTab= useRef()
    const handleChangeTab= (e)=>{
        e.target.classList.add(cx('active'));
        //remove active
        e.target === likedTab.current
            ? videoTab.current.classList.remove(cx('active'))
            : likedTab.current.classList.remove(cx('active'));
        console.log(e.target.classList);
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-info')}>
                <div className={cx('div-header')}>
                    <Image className={cx('user-avatar')} src={currentUser.avatar} alt="" />
                    <div className={cx('user-names')}>
                        <h2 className={cx('username')}>{currentUser.username}</h2>
                        <h1 className={cx('name')}>{currentUser.name}</h1>
                        <Button className={cx('edit-btn')} classic>
                            <div className={cx('edit-btn-content')}>
                                <FontAwesomeIcon className={cx('edit-icon')} icon={faPenToSquare} />
                                <span>Edit Profile</span>
                            </div>
                        </Button>
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
        </div>
    );
}

export default Profile;
