import ObjectsService from 'entities/services/ObjectsService';
import { makeAutoObservable } from 'mobx';
// import { ObjectsService } from "entities/services/ObjectsService"
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from 'shared/consts';
import { IObject } from 'shared/interfaces/object';

class ObjectsStore {
    objects: IObject[] = [];
    state = LOADING_STATUS;

    constructor () {
        makeAutoObservable(this);
        this.fetchObjects();
    }

    // constructor () {
    //     makeAutoObservable(this, {
    //         fetchConcerts: flow
    //     });
    //     this.fetchConcerts();
    // }

    setObjects = (objects: IObject[]) => {
        this.objects = objects;
    };

    getObjects = () => {
        return this.objects;
    };

    putObject = async (
        id: number,
        rate: number,
        ghs: number,
        name: string,
        mark: string,
        published: string,
        redacted: string
    ) => {
        await ObjectsService.update(
            id,
            rate,
            ghs,
            name,
            mark,
            published,
            redacted
        );
    };

    createObject = async (
        rate: string,
        ghs: number,
        name: number,
        mark: string,
        published: string,
        redacted: string
    ) => {
        await ObjectsService.post(rate, ghs, name, mark, published, redacted);
    };

    deleteObject = async (id: number) => {
        await ObjectsService.delete(id);
    };

    fetchObjects = async () => {
        this.state = LOADING_STATUS;
        try {
            const objects = await ObjectsService.get();
            this.state = COMPLETE_STATUS;
            this.setObjects(objects.data);
        } catch (error) {
            this.state = ERROR_STATUS;
        }
    };
}

export default new ObjectsStore();