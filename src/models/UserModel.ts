import { IUserModel } from './IUserModel';

export class UserModel {
    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }

    get username(): string {
        return this._userModel.username;
    }

    get firstName(): string {
        return this._userModel.firstName;
    }

    get middleName(): string {
        return this._userModel.middleName;
    }

    get lastName(): string {
        return this._userModel.lastName
    }

    get password(): string {
        return this._userModel.password;
    }

    get joiningDate(): Date {
        return this._userModel.joiningDate;
    }
    get employeeId(): string {
        return this._userModel.employeeId;
    }

    get company(): string {
        return this._userModel.company;
    }
}