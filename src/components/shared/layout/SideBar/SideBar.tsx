import style from './SideBar.module.scss';

import HomeIcon from '../../icons/HomeIcon/HomeIcon';

const SideBar = () => {
    return (
        <div id={style.sideBar}>
            <picture>
                <HomeIcon />
            </picture>
        </div>
    );
};

export default SideBar;
