import classNames from 'classnames/bind';
import { useRef } from 'react';

import styles from './CornerActions.module.scss';
import { DeskTopIcon, MobileIcon, ScrollToTop, XMarkIcon } from '../../../components/Icons';

const cx = classNames.bind(styles);

function CornerActions() {
    const topTopRef = useRef();
    const getAppRef = useRef();
    const expandContainerRef = useRef();

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topTopRef.current.classList.remove(cx('btn-exit'));
            topTopRef.current.classList.add(cx('btn-entrance'));
        } else {
            topTopRef.current.classList.remove(cx('btn-entrance'));
            topTopRef.current.classList.add(cx('btn-exit'));
        }
    };

    window.onscroll = function () {
        scrollFunction();
    };
    const BackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const showExpandContainer = () => {
        getAppRef.current.classList.add(cx('get-app-exit'));
        expandContainerRef.current.classList.add(cx('expand-container-entrance'));
    };

    const hideExpandContainer = () => {
        getAppRef.current.classList.remove(cx('get-app-exit'));
        expandContainerRef.current.classList.remove(cx('expand-container-entrance'));
    };
    return (
        <div className={cx('corner-actions')} ref={topTopRef}>
            <div className={cx('get-app')}>
                <button ref={getAppRef} className={cx('get-app-btn')} onClick={showExpandContainer}>
                    Get app
                </button>
                {/* expand div */}
                <div className={cx('expand-container')} ref={expandContainerRef}>
                    <div className={cx('item-container')}>
                        <div className={cx('expand-item')}>
                            <DeskTopIcon />
                            <span className={cx('item-text')}>Get TikTok for desktop</span>
                        </div>
                        <div className={cx('div-split')}></div>
                        <div className={cx('expand-item')}>
                            <MobileIcon />
                            <span className={cx('item-text')}>Get TikTok App</span>
                        </div>
                    </div>
                    <div className={cx('x-mark')} onClick={hideExpandContainer}>
                        <XMarkIcon />
                    </div>
                </div>
            </div>

            <button className={cx('to-top')} onClick={BackToTop}>
                <ScrollToTop />
            </button>
        </div>
    );
}

export default CornerActions;
