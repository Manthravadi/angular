import { IUserModel } from '../models/IUserModel';
import { RepositoryBase } from './RepositoryBase';
import { UserSchema } from '../dataAccess/schemas/UserSchema';

export class UserRepository extends RepositoryBase<IUserModel>
{
    constructor() {
        super(UserSchema);
    }
}