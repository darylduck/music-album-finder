import { Suspense } from 'react';

import Loader from '../../components/shared/Loader/Loader';
import SearchResults from '../../components/search/SearchResults/SearchResults';

const SearchResultsPage = () => {
    return (
        <Suspense fallback={<Loader />}>
            <SearchResults />
        </Suspense>
    )
}

export default SearchResultsPage;