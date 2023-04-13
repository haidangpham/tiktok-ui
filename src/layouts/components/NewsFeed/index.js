import classNames from 'classnames/bind';

import styles from './NewsFeed.module.scss';
import FeedItem from './FeedItem/FeedItem';

const cx = classNames.bind(styles);

function NewsFeed() {
    return (
        <div className={cx('wrapper')}>
            <FeedItem postId={5} />
            <FeedItem postId={1} />
            <FeedItem postId={2} />
            <FeedItem postId={3} />
            <FeedItem postId={4} />
        </div>
    );
}

export default NewsFeed;
