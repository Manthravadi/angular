import { Document } from 'mongoose';

export interface IUserModel extends Document {
    username: string;
    firstName: string;
    middleName: string;
    lastName: string;
    password: string;
    joiningDate: Date;
    employeeId: string;
    company: string;
}