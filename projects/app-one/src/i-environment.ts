import { IGlobalEnvironment } from '@library-one/lib/i-global-environment';

export interface IEnvironment extends IGlobalEnvironment {
    production: boolean;
}