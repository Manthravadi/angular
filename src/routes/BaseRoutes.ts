import * as express from 'express';
import {UserRoutes} from './UserRoutes';

export class BaseRoutes
{
    private app:express.Application;
    constructor(app:express.Application)
    {
        this.app = app;
    }
    get routes():express.Application
    {
        this.app.use("/", new UserRoutes().routes);

        return this.app;
    }
}