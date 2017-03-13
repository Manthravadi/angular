import * as mongoose from 'mongoose';
import { Constants } from '../constants/Constants';

export class DataAccess {
    static mongooseInstance: mongoose.MongooseThenable;
    static mongooseConnection: mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): mongoose.MongooseThenable {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log('Connected to MongoDB');
        });
        this.mongooseInstance = mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;

    }
}