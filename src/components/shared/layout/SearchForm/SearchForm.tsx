import { ChangeEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchTermState } from '../../../../store/searchItemsState';

import MagnifyingIcon from '../../icons/MagnifyingIcon/MagnifyingIcon';
import XIcon from '../../icons/XIcon/XIcon';
import style from './SearchForm.module.scss';

const SEARCH_RESULTS_PAGE_URL = '/search/results/';
const SEARCH_START_PAGE_URL = '/search/start/';

const SearchForm = (props: RouteComponentProps) => {
    const { history, location } = props;
    const isSearchResultsPage = location?.pathname?.startsWith(SEARCH_RESULTS_PAGE_URL);
    const [searchTermRequest, setSearchTermRequest] = useRecoilState<{ requestId: number, searchTerm: string }>(searchTermState);
    const { searchTerm, requestId } = searchTermRequest;
    const clearButtonClass = `${style.tabletClearButton} ${searchTerm.length > 0 ? style.active: undefined}`;

    const performSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target?.value;

        setSearchTermRequest({ searchTerm: newSearchTerm, requestId: requestId + 1 });
        
        if (isSearchResultsPage && newSearchTerm) {
            history.replace(`${newSearchTerm}`);
        } else {
            history.push(`${SEARCH_RESULTS_PAGE_URL}${newSearchTerm}`, { key: history.location.key });
        }
    };

    const clearSearchTerm = () => {
        setSearchTermRequest({ searchTerm: '', requestId: requestId + 1 });
        history.push(SEARCH_START_PAGE_URL, { key: history.location.key });
    };

    return (
        <form id={style.searchForm}>
            <div className={style.searchField}>
                <div className={style.tabletMagnifyingGlass}>
                    <MagnifyingIcon />
                </div>
                <input type="text" value={searchTerm} placeholder="Search" onChange={performSearch} />
                <button type="button" className={clearButtonClass} onClick={clearSearchTerm}>
                    <XIcon />
                </button>
            </div>
        </form>
    );
};

export default withRouter(SearchForm);
