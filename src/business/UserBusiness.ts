import { IUserModel } from '../models/IUserModel';
import { UserModel } from '../models/UserModel';
import { UserRepository } from '../repository/UserRepository';
import * as mongoose from 'mongoose';
import { BaseBusiness } from './BaseBusiness';
import {IBaseBusiness} from './IBaseBusiness';



export class UserBusiness extends BaseBusiness<IUserModel, UserRepository>
{
    constructor() {
        super(new UserRepository());
    }

    createBusinessObject<UserBusiness>(userBusiness:{new():UserBusiness;}):IBaseBusiness<IUserModel>{
        return new UserBusiness();
    }
}