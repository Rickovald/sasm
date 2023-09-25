import $api from 'entities/index';

class InfoService {
    static getRisks = async () => {
        return await $api.get('/risks.json');
    };

    static getClazzes = async () => {
        return await $api.get('/classes.json');
    };
}

export default InfoService;