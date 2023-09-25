import $api from 'entities/index';
import { IObject } from 'shared/interfaces/object';

class ObjectsService {
    static get = async (id?: number) => {
        if (id) return await $api.get('/objects.json'); // сделать выбор по id когда будет сервак
        else return await $api.get('/objects.json');
    };

    static getRisk = async () => {
        const risks = await $api.get('/risks.json');
        return risks.data;
    };

    static post = async ({
        rate,
        ghs,
        risk,
        clazz,
        tags,
        type,
        name,
        mark,
        published,
        redacted,
        owner
    }: IObject) => {
        return await $api.post('/objects', {
            rate,
            ghs,
            risk,
            clazz,
            tags,
            type,
            name,
            mark,
            published,
            redacted,
            owner
        });
    };

    static update = async ({
        id,
        rate,
        ghs,
        risk,
        clazz,
        tags,
        type,
        name,
        mark,
        published,
        redacted,
        owner
    }: IObject) => {
        return await $api.put(`/objects/${id}`, {
            rate,
            ghs,
            risk,
            clazz,
            tags,
            type,
            name,
            mark,
            published,
            redacted,
            owner
        });
    };

    static delete = async (id: number) => {
        return await $api.delete(`/objects/${id}`);
    };
}

export default ObjectsService;