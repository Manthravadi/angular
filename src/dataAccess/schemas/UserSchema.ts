import * as mongoose from 'mongoose';
import { DataAccess } from '../DataAccess';
import { IUserModel } from '../../models/IUserModel';
import * as bcrypt from 'bcrypt';
import {UserModel} from '../../models/UserModel';

let SALT_WORK_FACTOR:number = 10;


export class UserSchema {

    // private _dataAccess:DataAccess;
    // constructor(dataAccess:DataAccess){
    //     this._dataAccess = dataAccess;
    // }
    private _schema:mongoose.Schema = null;
    private _model:mongoose.Model<IUserModel> = null;

    

    private createSchema():void{
        this._schema = new DataAccess.mongooseInstance.Schema({
                username: {
                type: String,
                required: true,
                index:{unique:true}
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
                required:true,
                index:{unique:true}
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
            },
            emailAddress:{
                type:String,
                lowercase:true,
                index:{unique:true}
            }
        });

        //Can't use arrow function here as the scope of arrow function is different and we don't get the isModified anymore

        this._schema.pre('save', function(next){
            var user = this;

            //Only hash the password if it has been modified or is new
            if(!user.isModified('password')){
                return next();
            }
            //generate a salt
            bcrypt.genSalt(SALT_WORK_FACTOR, (err,salt)=>{
                if(err){
                    return next(err);
                }
                //hash the password using our new salt
                bcrypt.hash(user.password,salt, (err,hash)=>{
                    if(err){
                        return next(err);
                    }
                    //override the cleartext password with the hashed one
                    user.passwod = hash;
                    next();
                });
            });
        });

        this._schema.methods.comparePasswords = function(candidatePassword:any, callback:Function){
            bcrypt.compare(candidatePassword, this.password,(err,isMatch)=>{
                if(err){
                    return callback(err);
                }
                callback(null, isMatch);
            });
        }
        this._model = DataAccess.mongooseConnection.model<IUserModel>('Users', this._schema);
    }

    

    public get schema():mongoose.Model<IUserModel>{        
        return this._model;
    }
}