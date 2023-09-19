import $api from 'entities/index';

class ObjectsService {
    static get = async () => {
        return await $api.get('/objects.json');
    };

    static post = async (
        rate: string,
        ghs: number,
        name: number,
        mark: string,
        published: string,
        redacted: string
    ) => {
        return await $api.post('/objects', {
            rate,
            ghs,
            name,
            mark,
            published,
            redacted
        });
    };

    static update = async (
        id: number,
        rate: number,
        ghs: number,
        name: string,
        mark: string,
        published: string,
        redacted: string
    ) => {
        return await $api.put(`/objects/${id}`, {
            rate,
            ghs,
            name,
            mark,
            published,
            redacted
        });
    };

    static delete = async (id: number) => {
        return await $api.delete(`/objects/${id}`);
    };
}

export default ObjectsService;
