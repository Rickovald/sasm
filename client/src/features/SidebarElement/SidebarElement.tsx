import { FC, ReactElement } from 'react';
import s from './sidebarElement.module.sass';

interface ISidebarElement {
    text: string
};

export const SidebarElement: FC<ISidebarElement> = ({ text }): ReactElement => {
    return (
        <div className={s.sidebarElement}>
            {text}
        </div>
    );
};