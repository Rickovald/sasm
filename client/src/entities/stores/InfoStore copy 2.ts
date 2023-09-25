import InfoService from 'entities/services/InfoService';
import { makeAutoObservable, toJS } from 'mobx';
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from 'shared/consts';

class InfoStore {
    state = LOADING_STATUS;
    risks: any = [];
    clazzes: any = [];

    constructor () {
        makeAutoObservable(this);
        this.fetchInfo();
    }

    setRisks = (risks: any) => {
        this.risks = risks;
    };

    setClazzes = (clazzes: any) => {
        this.clazzes = clazzes;
    };

    getRisks = (risk: number):any => {
        return toJS(this.risks[risk]);
    };

    getClazzes = (clazz: number):any => {
        return toJS(this.clazzes[clazz]);
    };

    fetchInfo = async () => {
        this.state = LOADING_STATUS;
        try {
            const risks = await InfoService.getRisks();
            const clazzes = await InfoService.getClazzes();

            this.state = COMPLETE_STATUS;

            this.setRisks(risks.data);
            this.setClazzes(clazzes.data);
        } catch (error) {
            this.state = ERROR_STATUS;
        }
    };
}

export default new InfoStore();