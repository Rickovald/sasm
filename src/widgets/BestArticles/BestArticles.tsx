import { BlockHeader } from 'features/BlockHeader';
import { FC, ReactElement } from 'react';
import s from './bestArticles.module.sass';

interface IBestArticles {
    text: string
};

export const BestArticles: FC<IBestArticles> = ({ text }): ReactElement => {
    return (
        <div className={s.bestArticles}>
            <BlockHeader text={text} />
            <h3>Название статьи</h3>
            <div className={s.separate}/>
            <div>
                Краткое содержание статьи
            </div>
        </div>
    );
};