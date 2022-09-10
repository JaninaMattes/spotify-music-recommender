import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { v4 as uuid } from 'uuid';
import { NGXLogger } from "ngx-logger";
import { BehaviorSubject, filter, Observable, of, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { ISpotifyResult, SpotifyAuthUser } from "../../models/spotify-auth-user.model";
import { SpotifyUserService } from "./spotify-user.services";

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const EXP_FIELD = 'expires_in';
const EXP_HINT = 'expires_at';

@Injectable({
    providedIn: 'root'
})
export class SpotifyAuthService {

    private authUserSubject: BehaviorSubject<SpotifyAuthUser> = new BehaviorSubject<SpotifyAuthUser>(this.spotifyUser);
    public authUser$: Observable<SpotifyAuthUser> = this.authUserSubject.pipe(filter(item => Boolean(item)));

    private get router(): Router{
        return this.injector.get(Router);
    }
    
    private get spotifyUser(): any {
        const user = localStorage.getItem(ID_TOKEN_KEY);
        if (user) {
            return this.decodeToken<SpotifyAuthUser>(user);
        }
        return null;
    }

    public get access_token(): string {
        return localStorage.getItem(ACCESS_TOKEN_KEY) ?? '';
    }

    constructor(
        private injector: Injector,
        private httpClient: HttpClient,
        private userService: SpotifyUserService
    ){}

    public login(redirectTo: string): void {
        const nonceValue = {
            requestId: uuid().replace('-', ''),
            redirectTo
        };
        const encodedValue = this.encodeToken(nonceValue);
        this.addEncodedTokenToStorage('login_info', encodedValue);

        const url = `${environment.testApiUrl}/spotify-auth/login`;
        const authObs$ = this.httpClient.get(url) as Observable<ISpotifyResult>;
        authObs$.pipe(
            switchMap( res => {
                this.handleLoginCallback(res);
                return of(null);
            })
        ).subscribe();

    }

    public logOff(): void {
        void this.router.navigate(['/home']);
    }

    public isUserAuthenticated(): boolean {
        const now = Date.now() / 1000;
        return this.isValidAccessToken(localStorage.getItem(ACCESS_TOKEN_KEY), now)
    }

    public handleLoginCallback(resp: ISpotifyResult): void {
        const storedNonce = localStorage.getItem('login_info');
        if (storedNonce) {
            this.addEncodedTokenToStorage(ID_TOKEN_KEY, resp.user);
            this.addEncodedTokenToStorage(ACCESS_TOKEN_KEY, resp.authInfo);
        }
        // TODO: Add later
        // if(!storedNonce) {
        //     return this.logOff();
        // } else if (storedNonce !== resp.nonce) {
        //     return this.logOff();
        // } 
        // else {
        //     const decodedNonce = this.decodeToken(storedNonce);
        //     const redirectPath = decodedNonce.redirectTo ?? '/';
        //     this.addEncodedTokenToStorage(resp.expires_at, resp);
        //     void this.router.navigate([redirectPath])
        // }
        const userToken = localStorage.getItem(ID_TOKEN_KEY);
        if (userToken) {
            this.authUserSubject.next(this.decodeToken<SpotifyAuthUser>(userToken));
        }
    }

    public addLoggedInUser(): void {
        this.authUserSubject.next(this.spotifyUser);
        this.userService.loggedInUser.next(this.spotifyUser);
    }

    private decodeToken<T>(encodedValue: string): T {
        const decodedJsonStr = Buffer.from(encodedValue, "base64").toString();
        return JSON.parse(decodedJsonStr);
    }

    private encodeToken(obj: any): string {
        const objJsonStr = JSON.stringify(obj);
        return Buffer.from(objJsonStr).toString("base64");
    }

    private addEncodedTokenToStorage(key: string, token: any): void {
        const encodedValue = this.encodeToken(token);
        localStorage.setItem(key, encodedValue);
    }

    private removeTokenFromStorage(): void {
        localStorage.removeItem(ID_TOKEN_KEY);
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(EXP_HINT);
    }

    private isValidAccessToken(token: string | null, now: number): boolean {
        if(!token) {
            console.log('No access-token found.')
            return false;
        }
        const decodedToken = this.decodeToken<SpotifyAuthUser>(token);
        if (decodedToken[EXP_FIELD] < now) {
            this.removeTokenFromStorage();
        }
        return true;
    }

}
