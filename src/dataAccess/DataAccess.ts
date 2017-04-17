import * as mongoose from 'mongoose';
import { Constants } from '../constants/Constants';

export class DataAccess {
    static mongooseInstance: mongoose.MongooseThenable;
    static mongooseConnection: mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): mongoose.MongooseThenable {
        if (DataAccess.mongooseInstance) {
            return DataAccess.mongooseInstance;
        }
        DataAccess.mongooseConnection = mongoose.connection;
        DataAccess.mongooseConnection.once("open", () => {
            console.log('Connected to MongoDB');
        });
        DataAccess.mongooseInstance = mongoose.connect(Constants.DB_CONNECTION_STRING);
        return DataAccess.mongooseInstance;

    }
}