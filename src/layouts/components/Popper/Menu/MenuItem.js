import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../App';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, handleChangeTheme }) {
    const theme = useContext(ThemeContext);
    let switchBtn;
    let Item = 'li';
    Item = Link;
    const classes = cx('item', { separate: data.separate }, theme);
    //Dark Mode
    if (data.title === 'Dark Mode') {
        switchBtn = 'switch';
    }
    return (
        <Item className={cx(switchBtn, classes)} to={data.to} onClick={onClick}>
            <div>
                <span className={cx('item-icon')}>{data.icon}</span>
                <span className={cx('item-title')}>{data.title}</span>
            </div>
            {switchBtn ? (
                //handleChangeTheme from App.js
                <label onClick={handleChangeTheme} className={cx('switch-container', theme)}>
                    <input className={cx('input-hidden')} type="checkbox" />
                    <span className={cx('slider', 'round')}></span>
                </label>
            ) : (
                <></>
            )}
        </Item>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    handleChangeTheme: PropTypes.func,
};

export default MenuItem;
