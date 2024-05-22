import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// path of request in nestjs
// HTTP GET --> controller --> service --> response

// modules are used to organize the code in a better way and represent the features of the application
// for example: user module, product module, order module, etc.

// some modules can depend on other modules for example order module can depend on product module
// to create a module we use the nest g module <module-name> command

// to create a controller we use the nest g controller <controller-name> command

// to create a service we use the nest g service <service-name> command

// to create a module, controller, and service at the same time we use the nest g resource <resource-name> command