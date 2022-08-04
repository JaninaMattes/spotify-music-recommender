import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const httpRequest = context.switchToHttp().getRequest();
        Logger.log(`START - ${httpRequest.routerMethod} ${httpRequest.url}`);
        Logger.debug(`Body="${JSON.stringify(httpRequest.body)}", pathParams="${JSON.stringify(httpRequest.params)}", queryParams="${JSON.stringify(httpRequest.query)}".`);

        return next.handle().pipe(tap(() => Logger.log(`DONE - ${httpRequest.routerMethod} ${httpRequest.url}`)));
    }
}