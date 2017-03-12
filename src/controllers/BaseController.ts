import {IReadController} from './IReadController';
import {IWriteController} from './IWriteController';
import {IBaseBusiness} from '../business/IBaseBusiness';

export interface IBaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController
{

}