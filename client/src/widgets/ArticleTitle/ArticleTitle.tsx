import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import s from './articleTitle.module.sass';
import { IObject } from 'shared/interfaces/object';
import { accessGen } from './switch';
import { getImage } from 'shared/hooks/useGetClassImage';
import imgBase from 'shared/assets/scp-ico/ellipse.png';

interface IArticleTitle {
    data: IObject;
    info: any;
};

export const ArticleTitle: FC<IArticleTitle> = ({ data, info }): ReactElement => {
    const accessNode = accessGen(data.access);
    const blockRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [fontSize, setFontSize] = useState<number>(26);
    const [height, setHeight] = useState<number>(52);
    const clazzImg = getImage(info.clazzes.id);

    useEffect(() => {
        if (blockRef.current && textRef.current) {
            const blockHeight = blockRef.current.offsetHeight;
            const textHeight = textRef.current.offsetHeight;

            if (textHeight > 52) {
                const newFontSize = fontSize - 1;
                setFontSize(newFontSize);
                setHeight(50);
            }
            if (blockHeight > textHeight && fontSize >= 26) {
                const newHeight = height - 1;
                setHeight(newHeight);
            } else if (textHeight < 52 && fontSize < 26) {
                const newFontSize = fontSize;
                setFontSize(newFontSize);
            }
        }
    }, [fontSize, height]);

    console.log(data);

    return (
        <div className={s.articleTitle}>
            <div className={s.title__head}>
                <div className={s.title__number}>
                    ГХС - {data.ghs}
                </div>
                {accessNode}
                <div className={s.title__access}>
                    Секрет {data.access + 1}
                </div>
            </div>
            <hr className={s.title__separator} />
            <div className={s.title__info}>
                <div className={s.clazz}>
                    <div className={s.title__wrapper}>
                        <p className={s.title__desc}>Уровень угрозы</p>
                        <p className={s.title__name} style={{
                            marginBottom: '5px'
                        }}>{info.clazzes.name}</p>
                        <p className={s.title__desc} >Название</p>
                        <div
                            ref={blockRef}
                            className={`${s.title__name}`}
                            style={{
                                height: `${height}px`
                            }}>
                            <p ref={textRef} style={{
                                fontSize: `${fontSize}px`
                            }} className={`${s.title__sub_name}`}>{data.name}</p>
                        </div>
                    </div>
                    <div className={s.title__class}>
                        <img className={s.title__classImg} src={clazzImg} alt='' />
                    </div>
                </div>
                <div>
                    <div className={s.clazz}>
                        Уровень опасности
                        <p>{data.risk}</p>
                    </div>
                </div>

                <div className={s.title__summary}>
                    <img className={s.title__baseImg} src={imgBase} alt='' />
                </div>
            </div>
        </div >
    );
};

// <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path
//     d="M50.28 0A99.33 99.24 0 0 0 0.01 13.79 99.33 99.24 0 0 0 0 13.91
// 99.33 99.24 0 0 0 50.08 100 99.33 99.24 0 0 0 100 14.05 99.33 99.24 0 0
// 0 99.98 13.42 99.33 99.24 0 0 0 50.28 0Z" fill="#005" /></svg>;