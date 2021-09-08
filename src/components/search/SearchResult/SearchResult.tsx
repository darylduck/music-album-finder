import style from './SearchResult.module.scss';

import { SearchResultItem } from '../../../models';

interface SearchResultProps {
    searchResult: SearchResultItem;
}

const SearchResult = (props: SearchResultProps) => {
    const  { searchResult } = props;

    return (
        <article className={style.searchResult}>
            <img src={searchResult?.thumbnailSrc} alt="" />
            
            <div>
                <h3>{ searchResult?.title }</h3>
                <p className="artist">{ searchResult?.artist }</p>
            </div>
        </article>
    );
}

export default SearchResult;