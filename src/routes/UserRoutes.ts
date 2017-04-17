import * as express from 'express';
import {UserController} from '../controllers/UserController';

export class UserRoutes
{
    private app:express.Application
    private router: express.Router;
    private _userController:UserController;

    constructor(app:express.Application)
    {
        this.app = app;
        this.router = app._router;
        this._userController = new UserController();
    }
    get routes():express.Router
    {
        this.router.get('/allUsers',this._userController.retrieve);

        console.log('User Routes have been Setup!');

        return this.router;
    }
}