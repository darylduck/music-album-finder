import style from './NoSearchResults.module.scss';

interface NoSearchResultsProps {
    searchTerm: string;
};

const NoSearchResults = (props: NoSearchResultsProps) => {
    return (
        <div className={style.noResults}>
            <h2>No Results</h2>
            <p>
                No results found for &quot;{props.searchTerm}&quot;
            </p>
        </div>
    );
}

export default NoSearchResults;