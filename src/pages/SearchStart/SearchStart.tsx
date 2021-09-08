import style from './SearchStart.module.scss';

const SearchStart = () => {
    return (
        <section className={style.startSearch}>
            <h2>Search Spotify</h2>
            <p>
                Find your favorite songs, artists, albums, podcasts and playlists.
            </p>
        </section>
    );
}

export default SearchStart;