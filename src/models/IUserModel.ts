import * as mongoose from 'mongoose';
import {SiteRole} from './SiteRole';

export interface IUserModel extends mongoose.Document {
    username: string;
    emailAddress:string;
    firstName: string;
    middleName: string;
    lastName: string;
    password: string;
    joiningDate: Date;
    employeeId: string;
    company: string;
    designation:string;
    department:string;
    division:string;
    siteRole:SiteRole;
}