import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import Proptypes from 'prop-types';
import { faCheckCircle, faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeedItem.module.scss';
import configs from '../../../../config';
import Button from '../../Button/Button';
import AccountPopper from '../../AccountPopper';
import { posts, userData } from '../../../../assets/data';
import Player from '../Player';
import SharePopper from '../../SharePopper';

const cx = classNames.bind(styles);

function FeedItem({ postId }) {
    const postInfo = posts.find((post) => post.id === postId);
    const userInfo = userData.find((user) => user.id === postInfo.userId);
    //trigger target
    const triggerRef1 = useRef();
    const triggerRef2 = useRef();
    //follow handle
    const [following, setFollowing]= useState()
    const handleFollow= ()=>{
        setFollowing(!following)
    }
    // eslint-disable-next-line no-unused-vars
    const [triggerRefsChanged, setTriggerRefsChanged] = useState(false);

    useEffect(() => {
        setTriggerRefsChanged(true);
    }, [triggerRef1, triggerRef2]);

    return (
        <div className={cx('item-wrapper')}>
            <span>
                <AccountPopper
                    userInfo={userInfo}
                    bio
                    offset={[-8, 3]}
                    delay={[900, 300]}
                    triggerRef1={triggerRef1.current}
                    triggerRef2={triggerRef2.current}
                    following={following}
                    handleFollow={handleFollow}
                >
                    <img src={userInfo.avatar} alt="avatar" className={cx('avatar')} ref={triggerRef1} />
                </AccountPopper>
            </span>
            <div className={cx('content')}>
                {
                    <h3 className={cx('username')} ref={triggerRef2}>
                        {userInfo.username}
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check-circle')} />
                    </h3>
                }

                <p className={cx('name')}>{userInfo.name}</p>

                <div className={cx('post-desc')}>
                    <span>{postInfo.desc}</span>
                </div>
                <h4 className={cx('video-music')} to={configs.routes.music}>
                    <FontAwesomeIcon icon={faMusic} className={cx('music-icon')} />
                    <span className={cx('music-name')}>{postInfo.musicTitle}</span>
                </h4>
                {/* video */}

                <div className={cx('video-wrapper')}>
                    <Player src={postInfo.video} thumb={postInfo.thumb}></Player>
                    <div className={cx('action-btns')}>
                        <button className={cx('action-item')}>
                            <div className={cx('icon-wrapper')}>
                                <FontAwesomeIcon className={cx('action-icon')} icon={faHeart} />
                            </div>
                            <p className={cx('count')}>{postInfo.likeCount}</p>
                        </button>
                        <button className={cx('action-item')}>
                            <div className={cx('icon-wrapper')}>
                                <FontAwesomeIcon className={cx('action-icon')} icon={faComment} />
                            </div>
                            <p className={cx('count')}>{postInfo.commentCount}</p>
                        </button>
                        <SharePopper>
                            <button className={cx('action-item')}>
                                <div className={cx('icon-wrapper')}>
                                    <FontAwesomeIcon className={cx('action-icon')} icon={faShare} />
                                </div>

                                <p className={cx('count')}>{postInfo.shareCount}</p>
                            </button>
                        </SharePopper>
                    </div>
                </div>
                <div className={cx('follow-wrapper')}>
                    {following?
                        <Button onClick={handleFollow} classic small>
                            Following
                        </Button>  :
                        <Button onClick={handleFollow} outline small>
                            Follow
                        </Button>}
                </div>
            </div>
            <hr  className={cx('feed-divider')}/>
        </div>
    );
}

FeedItem.proptype = {
    postId: Proptypes.number.isRequired,
};

export default FeedItem;
