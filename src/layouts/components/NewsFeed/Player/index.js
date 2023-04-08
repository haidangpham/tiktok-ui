import { faPause, faPlay, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Proptypes from 'prop-types';

import styles from './Player.module.scss';

const cx = classNames.bind(styles);
function Player({ src, thumb }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [prevVolume, setPrevVolume] = useState(1);
    // const [showThumbnail, setShowThumbnail] = useState(false);
    const videoRef = useRef();
    const sliderRef = useRef();
    //Hide Thumbnail

    // useEffect(() => {
    //     setShowThumbnail(true);
    // }, []);

    //Play-Pause
    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    //Handle Mute If prevVolome=== 0
    if (videoRef.current && videoRef.current.volume === 0 && prevVolume === 0) {
        setPrevVolume(0.5);
    }

    const toggleMute = () => {
        if (videoRef.current.volume === 0) {
            //unmute

            videoRef.current.volume = prevVolume;
            sliderRef.current.value = prevVolume;
        } else {
            //mute
            setPrevVolume(videoRef.current.volume);
            videoRef.current.volume = 0;
            sliderRef.current.value = 0;
        }
        setIsMuted(!isMuted);
    };

    //Change Volume
    const handleVolumeChange = (e) => {
        const volume = parseFloat(e.target.value);
        videoRef.current.volume = volume;
        setPrevVolume(videoRef.current.volume);
        if (volume === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }
    };
    return (
        <div className={cx('player-wrapper')}>
            <div className={cx('video-wrapper')}>
                <video loop className={cx('video')} ref={videoRef}>
                    <source src={src} type="video/mp4" />
                </video>
                <img className={cx('thumbnail', 'show')} src={thumb} alt="" />
            </div>

            {/* report */}
            <button className={cx('report-btn', 'ctrl-btns')}>
                <FontAwesomeIcon icon={faFlag} className={cx('flag-icon')} />
                <p className={cx('action-text')}>Report</p>
            </button>
            {/* play-pause */}
            <button className={cx('play-btn', 'ctrl-btns')} onClick={togglePlay}>
                {isPlaying ? (
                    <FontAwesomeIcon className={cx('play-icon')} icon={faPause} />
                ) : (
                    <FontAwesomeIcon className={cx('play-icon')} icon={faPlay} />
                )}
            </button>
            {/* volume */}
            <button className={cx('volume-btn', 'ctrl-btns')} onClick={toggleMute}>
                {isMuted ? (
                    <FontAwesomeIcon className={cx('volume-icon')} icon={faVolumeMute} />
                ) : (
                    <FontAwesomeIcon className={cx('volume-icon')} icon={faVolumeHigh} />
                )}
            </button>
            <div className={cx('volume-slider')}>
                <input ref={sliderRef} type="range" min="0" max="1" step="0.025" onChange={handleVolumeChange} />
            </div>
        </div>
    );
}
Player.proptype = {
    src: Proptypes.string.isRequired,
};
export default Player;
