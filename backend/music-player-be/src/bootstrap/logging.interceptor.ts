import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const httpRequest = context.switchToHttp().getRequest();
        Logger.log(`START - ${httpRequest.routerMethod} ${httpRequest.url}`);
        Logger.debug(`Body: ${JSON.stringify(httpRequest.body)}, pathParams: ${httpRequest.params}, queryParams: ${httpRequest.queryParams}.`);
        return next.handle().pipe(tap(() => Logger.log(`DONE - ${httpRequest.routerMethod} ${httpRequest.url}`)));
    }

}