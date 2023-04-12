import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { ThemeContext } from '../../../App';

const cx = classNames.bind(styles);

function Button({
    primary = false,
    outline = false,
    small = false,
    large = false,
    classic = false,
    disabled = false,
    to,
    href,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const theme = useContext(ThemeContext);
    const props = { onClick, ...passProps };
    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', { primary, outline, small, large, classic, disabled }, theme);
    return (
        <Comp onClick={onClick} className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}
Button.propTypes = {
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    classic: PropTypes.bool,
    disabled: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
