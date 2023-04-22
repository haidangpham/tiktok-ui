import { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';

import AccountItem from '../AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '../../../components/Icons';
import { useDebounce } from '../../../hooks';
import * as searchService from '../../../utils/services/searchService';
import { ThemeContext } from '../../../App';

const cx = classNames.bind(styles);

function Search() {
    const theme = useContext(ThemeContext);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debouncedValue = useDebounce(searchValue, 700);
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleInput = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        } else {
            return;
        }
    };

    return (
        //Using wrapper tag around the reference element to solve this(Tippy warning)
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Accounts</h3>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search', theme)}>
                    <input
                        className={cx('search-input')}
                        value={searchValue}
                        ref={inputRef}
                        placeholder="Search"
                        spellCheck={false}
                        autoComplete="false"
                        onChange={handleInput}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear-btn')}
                            onClick={() => {
                                setSearchValue('');
                                setSearchResult([]);
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon className={cx('search-icon')} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
