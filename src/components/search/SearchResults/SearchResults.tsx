import { useRecoilValue } from 'recoil';
import style from './SearchResults.module.scss';

import { searchTermState, searchItemsBySearchTerm } from '../../../store/searchItemsState';
import SearchResult from "../SearchResult/SearchResult";
import NoSearchResults from '../NoSearchResults/NoSearchResults';

const SearchResults = () => {
    const { searchTerm } = useRecoilValue(searchTermState);
    const { searchItems } = useRecoilValue(searchItemsBySearchTerm);

    if (searchItems.length === 0) {
        return (
            <NoSearchResults searchTerm={searchTerm} />
        );
    }

    return (
        <ul className={style.songList}>
            {searchItems.map((s, index) => {
                return (
                    <li key={index}>
                        <SearchResult searchResult={s} />
                    </li>
                )
            })}
        </ul>        
    );
}

export default SearchResults;
