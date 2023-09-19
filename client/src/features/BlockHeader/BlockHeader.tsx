import { FC, ReactElement } from 'react';
import s from './blockHeader.module.sass';

interface IBlockHeader {
    text: string;
};

export const BlockHeader: FC<IBlockHeader> = ({ text }): ReactElement => {
    return (
        <div className={s.blockHeader}>
            {text}
        </div>
    );
};