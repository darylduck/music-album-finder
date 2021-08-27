import style from './HomeIcon.module.scss';

const HomeIcon = () => {
    return (
        <svg height="24" role="img" width="24" viewBox="0 0 24 24" className={style.navigationItem}>
            <path d="M12 3l8 4.927V21h-5.647v-7.03H9.647V21H4V7.968L12 3zm0-1L3 7.506V22h7.579v-6.973h2.842V22H21V7.464L12 2z"></path>
        </svg>
    );
};

export default HomeIcon;
