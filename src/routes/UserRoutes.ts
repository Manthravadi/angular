import * as express from 'express';
import {UserController} from '../controllers/UserController';

export class UserRoutes
{
    private app:express.Application
    private router: express.Router;
    private _userController:UserController;

    cosntructor(app:express.Application)
    {
        this.app = app;
        this.router = app._router;
        this._userController = new UserController();
    }
    get routes():express.Router
    {
        this.router.get('/users',this._userController.retrieve);

        return this.router;
    }
}