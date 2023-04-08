import classNames from 'classnames/bind';

import config from '../../../config';
import SuggestedAccounts from './SuggestedAccounts';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UsersIcon,
    LiveIcon,
    HomeIconActive,
    UsersIconActive,
    LiveIconActive,
} from '../../../components/Icons';
import Discover from './Discover';
import SidebarFooter from './Footer';

const cx = classNames.bind(styles);

function Sidebar() {
    //fake api for discover
    const tags = [
        {
            type: 'hastag',
            title: 'suthatla',
        },
        {
            type: 'hastag',
            title: 'mackedoi',
        },
        {
            type: 'hastag',
            title: 'sansangthaydoi',
        },
        {
            type: 'audio',
            title: 'Thiên Thần Tình Yêu - RICKY STAR',
        },
        {
            type: 'audio',
            title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
        },
    ];

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UsersIcon />}
                    activeIcon={<UsersIconActive />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>
            <span className={cx('divider')}></span>
            <SuggestedAccounts label="Suggested accounts" />
            <span className={cx('divider')}></span>
            <SuggestedAccounts label="Following accounts" />
            <span className={cx('divider')}></span>
            <Discover data={tags} label="Discover" />
            <span className={cx('divider')}></span>
            {/* Footer */}
            <SidebarFooter />
        </aside>
    );
}

export default Sidebar;
