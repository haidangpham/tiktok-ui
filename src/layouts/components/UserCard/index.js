import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import styles from './UserCard.module.scss';
import { userData } from '../../../assets/data';
import Button from '../Button/Button';
import { CheckCircle } from '../../../components/Icons';
const cx = classNames.bind(styles);
function UserCard({ userId, video, currentPlay }) {
    const userInfo = userData.find((user) => userId === user.id);
    const videoRef = useRef();
    const handleMouseOver = (e) => {
        e.target.play();
    };
    console.log(currentPlay);
    return (
        <div className={cx('user-card')}>
            <Link to={`/@${userInfo.username}`}>
                <div className={cx('card-container')}>
                    <video
                        muted
                        poster={video.thumb}
                        ref={videoRef}
                        className={cx('video')}
                        onMouseOver={handleMouseOver}
                        src={video.src}
                    />
                    <div className={cx('account-info')}>
                        <img className={cx('account-avatar')} src={userInfo.avatar} alt="" />
                        <h5 className={cx('account-name')}>{userInfo.name}</h5>
                        <span className={cx('account-username')}>
                            {userInfo.username}
                            {userInfo.isVerified ? <CheckCircle className={cx('check-circle')} /> : <></>}
                        </span>
                        <Button primary large>
                            Follow
                        </Button>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default UserCard;
