import { FC, ReactElement } from 'react';
import { BestArticles } from 'widgets/BestArticles';
import s from './main.module.sass';
// import ObjectsStore from 'entities/stores/ObjectsStore';
import { observer } from 'mobx-react-lite';

export const Main: FC = observer((): ReactElement => {
    // const data = ObjectsStore.getObjects();
    return (
        <div className={s.root}>
            <h3 className={s.main__header}>ВНИМАНИЕ: ПРЕДСТАВЛЕННЫЕ ДАЛЕЕ МАТЕРИАЛЫ</h3>
            <h2 className={s.main__header_big}>Государственная тайна!</h2>
            <h3 className={s.main__header}>Строгое СОБЛЮДЕНИЕ РЕЖИМА СЕКРЕТНОСТИ. НАРУШИТЕЛИ БУДУТ ОТСЛЕЖИВАТЬСЯ И ПОДВЕРГНУТЫ СУРОВЫМ НАКАЗАНИЯМ. БУДЬТЕ ОСТОРОЖНЫ</h3>

            <hr className={s.main__hr} />

            <BestArticles text={'Статья дня'} />
            <BestArticles text={'Статья недели'} />
        </div>
    );
});