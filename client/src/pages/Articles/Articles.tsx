import { FC, ReactElement } from 'react';
import s from './articles.module.sass';

interface IArticles {

};

export const Articles: FC<IArticles> = (): ReactElement => {
    return (
        <div className = { s.articles }>
            articles
        </div>
    );
};