import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './Following.module.scss';
import UserCard from '../../layouts/components/UserCard';
import CornerActions from '../../layouts/components/CornerActions';
import videos from '../../assets/videos';
const cx = classNames.bind(styles);
const suggestData = [
    { userId: 3, video: videos.video3 },
    { userId: 2, video: videos.video2 },
    { userId: 3, video: videos.video3 },
    { userId: 4, video: videos.video4 },
    { userId: 4, video: videos.video4 },
    { userId: 2, video: videos.video1 },
];
function Following() {
    const [currentPlay, setCurrentPlay] = useState();
    const prevCurrentPlay= useRef()
    useEffect(()=>{
        prevCurrentPlay.current= currentPlay 
    }, [currentPlay])
 
    return (
        <section className={cx('user-list-wrapper')}>
            <div className={cx('user-card-list')}>
                {suggestData.map((item, index) => (
                <UserCard key={index} userId={item.userId} video={item.video} setCurrentPlay={setCurrentPlay} currentPlay={currentPlay} prevCurrentPlay={prevCurrentPlay.current}/>
            ))}
            </div>
            
            <CornerActions />
        </section>
    );
}

export default Following;
