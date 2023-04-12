
import classNames from 'classnames/bind';
import Proptypes from 'prop-types';
import Tippy, { tippy } from '@tippyjs/react/headless';

import styles from './AccountPopper.module.scss';
import Button from '../Button/Button';
//temporary avatar
import images from '../../../assets/images';
import { CheckCircle } from '../../../components/Icons';

const cx = classNames.bind(styles);
function AccountPopper({
    children,
    userInfo,
    offset = [0, 0],
    primary,
    following,
    handleFollow,
    bio = null,
    triggerRef1 = null,
    triggerRef2 = null,
    delay,
}) {
    let triggerTarget = null;
    if (triggerRef1 && triggerRef2) {
        triggerTarget = [triggerRef1, triggerRef2];
    }
    return (
        <div>
            <Tippy
                trigger="mouseenter"
                triggerTarget={triggerTarget}
                interactive
                interactiveBorder={30}
                placement="bottom-start"
                delay={delay}
                offset={offset}
                render={(props) => (
                    <div className={cx('popper-wrapper')} {...props}>
                        <div className={cx('popper-header')}>
                            <img className={cx('avatar-popper')} src={userInfo.avatar || images.noImage} alt="" />
                            <div className={cx('btn-popper')}>
                                {/* Following Button */}
                                { following ?<Button onClick={handleFollow} classic><span>Following</span></Button> :(primary ? (
                                    <Button onClick={handleFollow} primary>
                                        <span>Follow</span>
                                    </Button>
                                ) : (
                                    <Button onClick={handleFollow} outline>
                                        <span>Follow</span>
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <span className={cx('username-popper')}>{userInfo.username}</span>
                        <CheckCircle className={cx('check-circle')} />
                        <p className={cx('name-popper')}>{userInfo.name}</p>
                        <span className={cx('count')}>{userInfo.followers}</span>
                        <span className={cx('f-l')}>Followers</span>
                        <span className={cx('count')}>{userInfo.likes}</span>
                        <span className={cx('f-l')}>Likes</span>
                        {bio ? (
                            <div className={cx('bio')}>
                                <span>{userInfo.bio}</span>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}
AccountPopper.propTypes = {
    children: Proptypes.node.isRequired,
    userInfo: Proptypes.object.isRequired,
    primary: Proptypes.bool,
    bio: Proptypes.bool,
    offset: Proptypes.array,
    triggerRef1: Proptypes.object,
    triggerRef2: Proptypes.object,
    delay: Proptypes.array,
};
export default AccountPopper;
