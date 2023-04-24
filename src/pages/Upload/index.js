import classNames from "classnames/bind";

import styles from './Upload.module.scss'
import Footer from "../../layouts/components/Footer";
import { CloudUploadIcon } from "../../components/Icons";
import Button from "../../layouts/components/Button/Button";
import { useRef } from "react";

const cx= classNames.bind(styles)
function Upload() {
    const uploadBtn= useRef()
    return (
        <div className={cx('upload-wrapper')}>
            <div className={cx('upload-section')}>
                <input ref={uploadBtn} type="file" accept="video/*" className={cx('input-upload')}></input>
                <div className={cx('upload-card')} onClick={()=>uploadBtn.current.click()}>
                    <CloudUploadIcon />
                    <span className={cx('text-main')}>Select video to upload</span>
                    <span className={cx('text')}>Or drag and drop a file</span>
                    <span className={cx('text', 'text-last')}>
                        Long videos can be split into multiple parts to get more exposure
                    </span>
                    <span className={cx('sub-text')}>MP4 or WebM</span>
                    <span className={cx('sub-text')}>720x1280 resolution or higher</span>
                    <span className={cx('sub-text')}>Up to 30 minutes</span>
                    <span className={cx('sub-text')}>Less than 2 GB</span>
                    <Button primary extraLarge>
                        Select file
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Upload;
