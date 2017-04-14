import {IReadController} from './IReadController';
import {IWriteController} from './IWriteController';
import {IBaseBusiness} from '../business/IBaseBusiness';
import * as express from 'express';

export interface IBaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController
{
   
}