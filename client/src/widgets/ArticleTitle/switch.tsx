import { ReactElement } from 'react';
import s from './articleTitle.module.sass';

export const accessGen = (level: number) => {
    let accessNode: ReactElement = <div />;

    switch (level) {
        case 0:
            accessNode =
                <div className={`${s.access} ${s.one}`}>
                    <span />
                </div>;
            break;
        case 1:
            accessNode =
                <div className={`${s.access} ${s.two}`}>
                    <span />
                    <span />
                </div>;
            break;
        case 2:
            accessNode =
                <div className={`${s.access} ${s.three}`}>
                    <span />
                    <span />
                    <span />
                </div>;
            break;
        case 3:
            accessNode =
                <div className={`${s.access} ${s.four}`}>
                    <span />
                    <span />
                    <span />
                    <span />
                </div>;
            break;
        case 4:
            accessNode =
                <div className={`${s.access} ${s.five}`}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>;
            break;
    }
    return accessNode;
};