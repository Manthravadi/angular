import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import {BaseRoutes} from './routes/BaseRoutes';

/**
 * Creates and Configures and ExpressJS Web Server
 */
class App
{
    /**Reference to Express Instance */
    public express:express.Application;

    constructor()
    {
        this.express = express();
        this.middleware();
        this.routes();
    }

    /**
     * Configure Express Middleware
     */
    private middleware():void
    {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    /**
     * Configure API Endpoints
     */
    private routes():void
    {
        /**
         * This is just to get up and running and to make sure that what we've got is working so far.
         * This function will change when we start to add more endpoints.
         */
        // let router = express.Router();
        // //placeholder route handler
        // router.get('/', (req:express.Request, res: express.Response, next:express.NextFunction)=> {
        //     res.json({message:'Hello World!'});
        // });
        // this.express.use('/', router);
        app.use(new BaseRoutes().routes());
    }
}

export default new App().express;