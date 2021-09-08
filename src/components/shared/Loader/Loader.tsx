import style from './Loader.module.scss';

import LoadingIcon from "../icons/LoadingIcon/LoadingIcon";

const Loader = () => {
    return(
        <div className={style.loadingDiv}>
            <LoadingIcon />
        </div>
    );
};

export default Loader;