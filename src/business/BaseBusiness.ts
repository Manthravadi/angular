import * as mongoose from 'mongoose';
import { IBaseBusiness } from './IBaseBusiness';
import { RepositoryBase } from '../repository/RepositoryBase';


export abstract class BaseBusiness<U extends mongoose.Document, T extends RepositoryBase<U>> implements IBaseBusiness<U>
{
    protected _repository: T;

    constructor(repository: T) {
        this._repository = repository;
    }

    create(item: U, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._repository.retrieve(callback);
    }

    update(_id: string, item: U, callback: (error: any, result: any) => void) {
        this._repository.update(_id, item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._repository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: any) => void) {
        this._repository.findById(_id, callback);
    }

    abstract createBusinessObject<b extends IBaseBusiness<U>>(b:{new():b;}):b;
}
