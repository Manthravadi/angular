import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import {BaseRoutes} from './routes/BaseRoutes';
import * as methodOverride from 'method-override';
import * as passport from 'passport';
import {IUserModel} from './models/IUserModel';
import {UserSchema} from './dataAccess/Schemas/UserSchema';
import {DataAccess} from './dataAccess/DataAccess';
import {Passport} from './passport/Passport';
import {SetupRoutes} from './routes/SetupRoutes'


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
        this.express.use(methodOverride());
        this.express.use((req:express.Request, res:express.Response, next:express.NextFunction)=>{
            res.header('Access-Control-Allow-Origin','*');
            res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
            res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Content-Length, Authorization');
            next();
        });

        //Connect to Database - Constructor of DataAccess invokes Connect
        var dataAccess:DataAccess = new DataAccess();

        //Initialize Passport
        this.express.use(passport.initialize());

        

        //Bring in Passport Strategy
        new Passport().configPassport(passport);


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
        var setupRoutes:SetupRoutes = new SetupRoutes(this.express);
        console.log('All routes have been Setup!');
    }
}

export default new App().express;