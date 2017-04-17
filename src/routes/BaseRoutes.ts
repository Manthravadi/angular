import * as express from 'express';
import {UserRoutes} from './UserRoutes';

export class BaseRoutes
{
    private app:express.Application;
    constructor(app:express.Application)
    {
        this.app = app;
    }
    routes():void
    {
        this.app.use("/api/user", new UserRoutes(this.app).routes);
    }
}