import ObjectsService from 'entities/services/ObjectsService';
import { makeAutoObservable, toJS } from 'mobx';
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from 'shared/consts';
import { IObject } from 'shared/interfaces/object';

class ObjectsStore {
    state = LOADING_STATUS;
    objects: IObject[] = [];

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

    getObjects = ():IObject[] => {
        // ! УДАЛИТЬ ПЕРЕД БИЛДОМ TOJS
        return toJS(this.objects);
    };

    getObjectsById = (id: number):IObject => {
        // ! УДАЛИТЬ ПЕРЕД БИЛДОМ TOJS
        return toJS(this.objects[id]);
    };

    putObject = async (newObject: IObject) => {
        await ObjectsService.update(newObject);
    };

    createObject = async (newObject: IObject) => {
        await ObjectsService.post(newObject);
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