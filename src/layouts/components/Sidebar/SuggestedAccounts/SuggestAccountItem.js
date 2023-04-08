import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Proptypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import { userData } from '../../../../assets/data';
//temporary avatar
import images from '../../../../assets/images';
import AccountPopper from '../../AccountPopper';
import { CheckCircle } from '../../../../components/Icons';

const cx = classNames.bind(styles);
function SuggestAccountItem({ id }) {
    const userInfo = userData.find((user) => user.id === id);
    if (userInfo.avatar === '') {
        userInfo.avatar = images.noImage;
    }
    return (
        <div>
            <AccountPopper userInfo={userInfo} delay={[900, 0]} primary offset={[-8, 0]}>
                <div className={cx('account-items')}>
                    <img className={cx('avatar')} src={userInfo.avatar} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('username')}>
                            {userInfo.username}
                            {userInfo.isVerified ? <CheckCircle className={cx('check-circle')} /> : <></>}
                        </p>
                        <p className={cx('name')}>{userInfo.name}</p>
                    </div>
                </div>
            </AccountPopper>
        </div>
    );
}
SuggestAccountItem.propTypes = {
    id: Proptypes.number.isRequired,
};
export default SuggestAccountItem;
