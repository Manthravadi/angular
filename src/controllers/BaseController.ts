import { IBaseController } from './IBaseController';
import { IBaseBusiness } from '../business/IBaseBusiness';
import * as express from 'express';
import * as mongoose from 'mongoose';

//Need to think and do this in a generic way to reduce the code for each individual controller!

export abstract class BaseController<U extends mongoose.Document, T extends IBaseBusiness<U>> implements IBaseController<T>
{
    protected abstract createBusinessObject(): T;
    create(req: express.Request, res: express.Response):void {
        try {
            var model: U = <U>req.body;
            var business: T = this.createBusinessObject();
            business.create(model, (error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.send({ "success": "success" });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    update(req: express.Request, res: express.Response):void {
        try {
            var model: U = <U>req.body;
            var _id: string = req.params._id;
            var business = this.createBusinessObject();
            business.update(_id, model, (error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.send({ "success": "success" });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in request" });
        }
    }

    delete(req: express.Request, res: express.Response) :void{
        try {
            var _id: string = req.params._id;
            var business = this.createBusinessObject();
            business.delete(_id, (error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.send({ "success": "success" });
                }
            });
        }
        catch (e) {
            res.send({ "error": "error in your request" });
        }
    }

    retrieve(req: express.Request, res: express.Response):void {
        try {

            var business = this.createBusinessObject();
            business.retrieve((error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.send(result);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }

    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var business = this.createBusinessObject();
            business.findById(_id, (error, result) => {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.send(result);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
}