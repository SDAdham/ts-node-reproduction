import '@angular/localize/init';
import { IEnvironment } from "./src/i-environment";

const environment: IEnvironment = {
    production: false,
    version: '1.0.0'
}

console.log(environment);