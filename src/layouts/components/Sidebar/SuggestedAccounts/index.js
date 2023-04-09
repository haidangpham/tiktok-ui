import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import SuggestAccountItem from './SuggestAccountItem';
import styles from './SuggestedAccounts.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, suggestAccountList= [] }) {
    const [more, setMore]= useState(false)
    const lessLength= 5
    let renderList= suggestAccountList
    //shorten the list
    if(!more){
        renderList=  suggestAccountList.slice(0, lessLength)
    }
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
          
            {renderList.map((account, index)=> <SuggestAccountItem key={index} id={account} />)}
            <p className={cx('more-btn')} onClick={()=>setMore(!more)}>{more? 'See less': 'See all'}</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
