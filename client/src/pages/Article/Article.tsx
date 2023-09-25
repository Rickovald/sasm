import { FC, ReactElement } from 'react';
import s from './article.module.sass';
import { useParams } from 'react-router-dom';
import { ArticleTitle } from 'widgets/ArticleTitle';
import ObjectsStore from 'entities/stores/ObjectsStore';
import parse from 'html-react-parser';
import InfoStore from 'entities/stores/InfoStore';
import { Error404 } from 'pages/Error404';
interface IArticle {

};

export const Article: FC<IArticle> = (): ReactElement => {
    const params = useParams();
    const data = ObjectsStore.getObjectsById(Number(params.id));
    if (!data) return <Error404 />;
    const risks = InfoStore.getRisks(data.risk);
    const clazzes = InfoStore.getClazzes(data.clazz);

    return (
        <div className={s.article}>
            <ArticleTitle data={data} info={{ risks, clazzes }} />
            {parse(data.mark)}
        </div>
    );
};