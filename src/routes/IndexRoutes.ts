import * as express from 'express';
import * as path from 'path';

export class IndexRoutes
{
    private app:express.Application
    private router: express.Router;

    constructor(app:express.Application)
    {
        this.app = app;
        this.router = app._router;
    }
    get routes():express.Router
    {
        this.router.get('/',(req:express.Request, res:express.Response)=>{
            res.sendFile(path.join(__dirname,'../client/index.html'));
        });

        console.log('User Routes have been Setup!');

        return this.router;
    }
}