import { Search } from 'features/Search';
import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigation.module.sass';
import logo from 'shared/assets/logo.png';

export const Navigation: FC = (): ReactElement => {
    return (
        <div className={s.root}>
            <div className={s.wrapper}>
                <div className={s.upper}>
                    <NavLink className={s.head__logo} to='/'>
                        <img className={s.logo} src={logo} alt='logo' />
                        <div className={s.header}>НИИ ГХС</div>
                    </NavLink>
                </div>
                <div className={s.links__wrapper}>
                    <div className={s.profile}>
                        <p className={s.href}>Авторизоваться</p>
                        <p className={s.href}>Устроиться в НИИ</p>
                    </div>
                    <Search />
                    <div className={s.links}>
                        {/* <NavLink className={s.link} to='/'>Main</NavLink> */}
                        <NavLink className={s.link} to='/about'>Новости</NavLink>
                        <NavLink className={s.link} to='/contacts'>Свод законов</NavLink>
                        <NavLink className={s.link} to='/contacts'>Авторам</NavLink>
                        <NavLink className={s.link} to='/contacts'>Переводчикам</NavLink>
                        <NavLink className={s.link} to='/contacts'>Архивы</NavLink>
                        <NavLink className={s.link} to='/contacts'>Профсоюз</NavLink>
                        {/* COMPONENT LINKS */}
                    </div>
                </div>
            </div>
        </div>
    );
};