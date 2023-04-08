import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import Proptypes from 'prop-types';
import { useState } from 'react';

import { ArrowDown, EmbededShare, LinkShare, MailShare, MessageShare, PopperArrow } from '../../../components/Icons';
import styles from './SharePopper.module.scss';
const cx = classNames.bind(styles);

function SharePopper({ children }) {
    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => {
        setShowMore(true);
    };

    return (
        <Tippy
            trigger="mouseenter"
            interactive
            placement="top-start"
            offset={[-26, 0]}
            delay={[0, 500]}
            onHidden={() => setShowMore(false)}
            render={(props) => (
                <div className={cx('feed-share-popper')} {...props}>
                    <div className={cx('share-option')}>
                        <EmbededShare />
                        <span className={cx('share-text')}>Embed</span>
                    </div>
                    <div className={cx('share-option')}>
                        <MessageShare />
                        <span className={cx('share-text')}>Send to friends</span>
                    </div>
                    <div className={cx('share-option')}>
                        <LinkShare />
                        <span className={cx('share-text')}>Copy link</span>
                    </div>

                    {showMore ? (
                        <div className={cx('share-option')}>
                            <MailShare />
                            <span className={cx('share-text')}>Share to Email</span>
                        </div>
                    ) : (
                        <button className={cx('arrow-down-btn')} onClick={handleShowMore}>
                            <ArrowDown />
                        </button>
                    )}
                    <PopperArrow className={cx('popper-arrow')} />
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

SharePopper.propTypes = {
    children: Proptypes.node.isRequired,
};
export default SharePopper;
