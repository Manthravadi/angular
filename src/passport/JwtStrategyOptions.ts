import * as passport from 'passport';
import * as passportJwt from 'passport-jwt';

export class JwtStrategyOptions implements passportJwt.StrategyOptions
{
    secretOrKey: string;
    jwtFromRequest: passportJwt.JwtFromRequestFunction;
    issuer: string;
    audience: string;
    algorithms: string[];
    ignoreExpiration: boolean;
    passReqToCallback: boolean;
}