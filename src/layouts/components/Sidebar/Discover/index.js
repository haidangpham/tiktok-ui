import classNames from 'classnames/bind';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import styles from './Discover.module.scss';
import { ThemeContext } from '../../../../App';

const cx = classNames.bind(styles);
function Discover({ data, label }) {
    const theme = useContext(ThemeContext);
    const renderIcon = (title) => {
        if (title === 'hastag') {
            return (
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={faHashtag} />
                </span>
            );
        } else
            return (
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={faMusic} />
                </span>
            );
    };

    const renderObj = (data) => {
        return data.map((item, index) => {
            return (
                <div className={cx('item')} key={index}>
                    {renderIcon(item.type)}
                    <p className={cx('title')}>{item.title}</p>
                </div>
            );
        });
    };
    return (
        <div className={cx('wrapper', theme)}>
            <p className={cx('label')}>{label}</p>
            {renderObj(data)}
        </div>
    );
}

Discover.propTypes = {
    data: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
};

export default Discover;
