import * as express from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { IUserModel } from '../models/IUserModel';
import { BaseController } from './BaseController';

export class UserController extends BaseController<IUserModel, UserBusiness>
{
    createBusinessObject():UserBusiness
    {
        return new UserBusiness();
    }
}
