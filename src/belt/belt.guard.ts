import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest(); // get the request object maybe to check the headers, body, etc. like cookies, tokens, etc.

    // validate the request
    const hasBlackBelt = request.headers.belt === 'black'; // true or false (if the belt is black or not

    return hasBlackBelt; // return true to allow access, false to deny
  }
}
