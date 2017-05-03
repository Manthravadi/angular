import * as express from 'express';
import {UserRoutes} from './UserRoutes';
import {IndexRoutes} from './IndexRoutes';

export class SetupRoutes{
    private _express:express.Application;
    constructor(express:express.Application){
        this._express = express;
        this.setup();
    }

    private setup():void{
        this._express.use('/api/users', new UserRoutes(this._express).routes);
        //And so on ...
        this._express.use('/', new IndexRoutes(this._express).routes);
    }
}