import classNames from "classnames/bind";

import styles from './Footer.module.scss';
import { TikTokLogoDarkTheme } from "../../../components/Icons";

const cx= classNames.bind(styles)
function Footer() {
    const navList = [
        {
            title: 'Company',
            list: [
                {
                    text: 'About',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Newsroom',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Contact',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Careers',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'ByteDance',
                    link: 'https://www.tiktok.com/about',
                },
            ],
        },
        {
            title: 'Programs',
            list: [
                {
                    text: 'TikTok for Good',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Advertise',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Developers',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'TikTok Rewards',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'TikTok Browse',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'TikTok Embeds',
                    link: 'https://www.tiktok.com/about',
                },
            ],
        },
        {
            title: 'Support',
            list: [
                {
                    text: 'Help Center',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Safety Center',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Creator Portal',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Community Guidelines',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Transparency',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Accessibility',
                    link: 'https://www.tiktok.com/about',
                },
            ],
        },
        {
            title: 'Legal',
            list: [
                {
                    text: 'Terms of Use',
                    link: 'https://www.tiktok.com/about',
                },
                {
                    text: 'Privacy Policy',
                    link: 'https://www.tiktok.com/about',
                },
            ],
        },
    ];

    return (
        <footer className={cx('footer-wrapper')}>
            <div className={cx('footer-content-wrapper')}>
                <TikTokLogoDarkTheme className={cx('tiktok-logo')} />
                {
                    navList.map((type, index) => {
                        return (
                            <div key={index} className={cx('footer-content-column')}>
                                <h4>{type.title}</h4>
                                {type.list.map((item, index) => {
                                    return (
                                        <span key={index} className={cx('content-text')}>
                                            <a href={item.link}>{item.text}</a>
                                        </span>
                                    );
                                })}
                            </div>
                        );
                    })
                }
            </div>
            <div className={cx('footer-bottom')}></div>
        </footer>
    );
}

export default Footer;