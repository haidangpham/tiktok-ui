import classNames from 'classnames/bind';
import styles from './SidebarFooter.module.scss';
import images from '../../../../assets/images';
import { BannerIcon } from '../../../../components/Icons';

const cx = classNames.bind(styles);
function SidebarFooter() {
    return (
        <div className={cx('footer-wrapper')}>

            <div className={cx('nav-container')}>
                <a className={cx('nav')} href="https://www.tiktok.com/about">
                    About
                </a>
                <a className={cx('nav')} href="https://newsroom.tiktok.com/">
                    Newsroom
                </a>
                <a className={cx('nav')} href="https://www.tiktok.com/about/contact">
                    Contact
                </a>
                <a className={cx('nav')} href="https://careers.tiktok.com/">
                    Careers
                </a>
                <a className={cx('nav')} href="https://www.bytedance.com/">
                    ByteDance
                </a>
            </div>

            <div className={cx('nav-container')}>
                <a className={cx('nav')} href="https://www.tiktok.com/forgood">
                    TikTok for Good
                </a>
                <a
                    className={cx('nav')}
                    href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&lang=en&refer=tiktok_web"
                >
                    Advertise
                </a>
                <a className={cx('nav')} href="https://developers.tiktok.com/&refer=tiktok_web">
                    Developers
                </a>
                <a className={cx('nav')} href="https://www.tiktok.com/transparency">
                    Transparency
                </a>
                <a className={cx('nav')} href="https://www.tiktok.com/tiktok-rewards/en">
                    TikTok Rewards
                </a>
                <a className={cx('nav')} href="https://www.tiktok.com/browse">
                    TikTok Browse
                </a>
                <a className={cx('nav')} href="https://www.tiktok.com/embed">
                    TikTok Embeds
                </a>
            </div>
            <div className={cx('nav-container')}>
                <a className={cx('nav')} href="https://support.tiktok.com/en">
                    Help
                </a>
                <a className={cx('nav')} href="https://www.tiktok.com/safety">
                    Safety
                </a>
                <a className={cx('nav')} href="https://www.tiktok.com/legal/terms-of-service">
                    Terms
                </a>
                <a className={cx('nav')} href="https://www.tiktok.com/legal/privacy-policy-row">
                    Privacy
                </a>
                <a className={cx('nav')} href="https://www.tiktok.com/creators/creator-portal/en-us/">
                    Creator Portal
                </a>
                <a className={cx('nav')} href="https://www.tiktok.com/community-guidelines">
                    Community Guidelines
                </a>
            </div>
            <span className={cx('coppyright')}>&copy; 2023 TikTok</span>
        </div>
    );
}

export default SidebarFooter;
