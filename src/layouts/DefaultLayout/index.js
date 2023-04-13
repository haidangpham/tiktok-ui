import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';
import CornerActions from '../components/CornerActions';

const cx = classNames.bind(styles);
function DefaultLayout({ children, handleChangeTheme }) {
    return (
        <div className={cx('wrapper')}>
            <Header handleChangeTheme={handleChangeTheme} />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                <CornerActions />
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
