import { SidebarElement } from 'features/SidebarElement';
import { FC, ReactElement } from 'react';
import s from './sidebar.module.sass';

interface ISidebar {
};

export const Sidebar: FC<ISidebar> = (): ReactElement => {
    return (
        <div className={s.sidebar}>
            <SidebarElement text="sidebarElement" />
            <SidebarElement text="test" />
            <SidebarElement text="jff" />
        </div>
    );
};