import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import { ThemeContext } from '../../../App';
import { currentUser } from '../../../assets/data';
import Search from '../Search';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import Menu from '../Popper/Menu';
import {
    TikTokLogo,
    TikTokLogoDarkTheme,
    UserIcon,
    UploadIcon,
    GearIcon,
    InboxIcon,
    UploadIconActive,
    CoinIcon,
    LogOutIcon,
    QuestionIcon,
    KeyboardIcon,
    DarkModeIcon,
    LanguageIcon,
    InboxIconActive,
} from '../../../components/Icons';
import Image from '../Image';
import config from '../../../config';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        sub: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <DarkModeIcon />,
        title: 'Dark Mode',
    },
];

function Header({ handleChangeTheme }) {
    const theme = useContext(ThemeContext);
    const [messageActive, setMessageActive] = useState(false);
    const [inboxActive, setInboxActive] = useState(false);
    const handleMenuChange = (menuItem) => {
        switch (menuItem) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };
    const isLoggedIn = true;
    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: `/@${currentUser.username}`
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <GearIcon />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogOutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    {theme === 'dark' ? <TikTokLogoDarkTheme /> : <TikTokLogo />}
                </Link>
                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    <Link to={'/upload'}>
                        <Button classic>
                            <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                            <span>Upload</span>
                        </Button>
                    </Link>
                    {isLoggedIn ? (
                        <>
                            <Tippy content="Messages" placement="bottom" delay={[0, 50]}>
                                <button
                                    className={cx('action-btn')}
                                    onClick={() => (messageActive ? setMessageActive(false) : setMessageActive(true))}
                                >
                                    <Link to={config.routes.messages}>
                                        {messageActive ? (
                                            <UploadIconActive className={cx('messages')} />
                                        ) : (
                                            <UploadIcon className={cx('messages')} />
                                        )}
                                    </Link>
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom" delay={[0, 50]}>
                                <button
                                    className={cx('action-btn')}
                                    onClick={() => (inboxActive ? setInboxActive(false) : setInboxActive(true))}
                                >
                                    {inboxActive ? (
                                        <InboxIconActive className={cx('inbox')} />
                                    ) : (
                                        <InboxIcon className={cx('inbox')} />
                                    )}
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary to="/">
                                Log in
                            </Button>
                        </>
                    )}
                    {isLoggedIn ? (
                        <Menu
                            items={isLoggedIn ? userMenu : MENU_ITEMS}
                            onChange={handleMenuChange}
                            handleChangeTheme={handleChangeTheme}
                        >
                            <Image className={cx('user-avatar')} alt="user-name" src="" />
                        </Menu>
                    ) : (
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon className={cx('more-icon')} icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
