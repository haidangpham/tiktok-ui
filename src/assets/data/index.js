import videos from '../videos';
import avatars from '../images/userAvatar';

//USERS
export const userData = [
    {
        id: 1,
        username: 'haidanq_123',
        name: 'Phạm Hải Đăng',
        avatar: '',
        followers: 123,
        likes: 321,
        isVerified: true,
        bio: 'Ngắm lũ lắm lông cho thêm yêu đời nhen ❤️ Follow me ❤️ tks u',
    },
    {
        id: 2,
        username: 'musiclyrics.my',
        name: '𝓶𝓾𝓼𝓲𝓬𝓵𝔂𝓻𝓲𝓬𝓼✨',
        avatar: avatars.user2,
        followers: '118.7K',
        likes: '2.4M',
        isVerified: false,
        bio: "Music Is Life🎵 Don't Missed Out Our Latest Updates✨🇲🇾",
    },
    {
        id: 3,
        username: 'vitaminchill333',
        name: '🎧 Vitamin Cнιℓℓ ✨',
        avatar: avatars.user3,
        followers: '343.3K',
        likes: '11.3M',
        isVerified: false,
        bio: 'Music for you!!! 🎧',
    },
    {
        id: 4,
        username: 'cciinnn',
        name: 'CiiN',
        avatar: avatars.user4,
        followers: '10.3M',
        likes: '264.9M',
        isVerified: true,
        bio: `KHÔNG ACC PHỤ
        KOL - DANCER
        FB/: Bùi Thảo Ly (Sịn) - IG: l.ciin
        👇🏻`,
    },
];

//POSTS
export const posts = [
    {
        id: 1,
        userId: 2,
        desc: 'Better - Khalid',
        video: videos.video1.src,
        thumb: videos.video1.thumb,
        likeCount: 63700,
        commentCount: 148,
        shareCount: 5861,
        musicTitle: 'Better - Khalid',
    },
    {
        id: 2,
        userId: 2,
        desc: '',
        video: videos.video2.src,
        thumb: videos.video2.thumb,
        likeCount: 137500,
        commentCount: 510,
        shareCount: 12900,
        musicTitle: 'golden hour - JVKE',
    },
    {
        id: 3,
        userId: 3,
        desc: '🍫 Một bài tình ca cực hay dành cho Valentine💝... Until i found you - Stephen Sanchez & Em Beihold )',
        video: videos.video3.src,
        thumb: videos.video3.thumb,
        likeCount: 5306,
        commentCount: 54,
        shareCount: 294,
        musicTitle: 'Until I Found You - Em Beihold Version - Stephen Sanchez & Em Beihold',
    },
    {
        id: 4,
        userId: 4,
        desc: 'Mix liền tay Kem Xả và Serum cho từng nhu cầu để tóc luôn trong trạng thái say yes nhé ',
        video: videos.video4.src,
        thumb: videos.video4.thumb,
        likeCount: 16500,
        commentCount: 460,
        shareCount: 279,
        musicTitle: 'nhạc nền  - Choco✨',
    },
];
