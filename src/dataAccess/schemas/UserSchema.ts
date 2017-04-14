import * as mongoose from 'mongoose';
import { DataAccess } from '../DataAccess';
import { IUserModel } from '../../models/IUserModel';


export class UserSchema {

    static createSchema():mongoose.Schema {
        var schema = new DataAccess.mongooseInstance.Schema({
            username: {
                type: String,
                required: true
            },
            firstName:{
                type:String,
                required: true
            },
            middleName:{
                type:String,
                required:false
            },
            lastName:{
                type:String,
                required:true
            },
            password:{
                type:String,
                required:true
            },
            joiningDate:{
                type:Date,
                required:true
            },
            employeeId:{
                type:Number,
                required:true
            },
            company:{
                type:String,
                required:true,
                default: "Hexagon Capability Center India Pvt Ltd."
            },
            division:{
                type:String,
                required: true,
                default: "PP&M"
            },
            department:{
                type:String,
                required: true,
                default: "User Experience"
            },
            designation: {
                type:String,
                required:true,
                default:""
            },
            siteRole:{
                type:String,
                required:true,
                enum:['RootAdmin', 'Admin', 'Moderator', 'User', 'Guest'],
                default:'User'
            }
        });
        return schema;
    }

    static get schema():mongoose.Model<IUserModel>{
        return DataAccess.mongooseConnection.model<IUserModel>("Users", UserSchema.createSchema());
    }
}