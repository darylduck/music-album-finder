import style from './TopBar.module.scss';

import SearchForm from "../SearchForm/SearchForm";

const TopBar = () => {
    return (
        <header className={style.header}>
            <SearchForm />
        </header>
    );
};

export default TopBar;