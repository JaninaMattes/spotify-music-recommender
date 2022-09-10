import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SpotifyAuthService } from "./spotify-auth.service";

@Injectable()
export class AccessTokenInjector implements HttpInterceptor {
    
    constructor(private authService: SpotifyAuthService) {}

    private readonly tokenUrls = [
        environment.testApiUrl,
        environment.apiUrl
    ]

    /**
     * Set the acces_token for simple 
     * Bearer authentication.
     * @param req 
     * @param next 
     * @returns 
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.authService.access_token;
        if(this.isValidApiUrl(req)){
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        }
        return next.handle(req);
    }

    /**
     * Check if network request is 
     * sent to a valid API URL.
     * @param request 
     * @returns 
     */
    private isValidApiUrl(request: HttpRequest<any>){
        for (const url of this.tokenUrls){
            if(request.url.startsWith(url)) {
                return true;
            }
        }
        return false;
    }

}