import * as passport from 'passport'
import * as passportJwt from 'passport-jwt';
import * as express from 'express';
import * as mongoose from 'mongoose';
import { UserSchema } from '../dataAccess/Schemas/UserSchema';
import { IUserModel } from '../models/IUserModel';
import {DataAccess} from '../dataAccess/DataAccess';
import {JwtStrategyOptions} from './JwtStrategyOptions';

export class Passport {

    private _user: mongoose.Model<IUserModel>;
    constructor() {
        this._user = new UserSchema().schema;
    }

    public configPassport(passport: passport.PassportStatic): void {
        var opts: passportJwt.StrategyOptions = new JwtStrategyOptions();
        opts.jwtFromRequest = passportJwt.ExtractJwt.fromAuthHeader();
        opts.secretOrKey = "MySecretKey";

        passport.use(new passportJwt.Strategy(opts, (jwt_payload, done) => {
            this._user.findOne({ id: jwt_payload.id }, (err, user) => {
                if (err) {
                    return done(err);
                }
                if (user) {
                    done(null, user);
                }
                else {
                    done(null, false);
                }
            });
        }));
    }
}

