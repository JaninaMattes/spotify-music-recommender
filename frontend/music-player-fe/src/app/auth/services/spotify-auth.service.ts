import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { v4 as uuid } from 'uuid';
import { NGXLogger } from "ngx-logger";
import { BehaviorSubject, filter, Observable } from "rxjs";
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
            return this.decodeToken(user) as SpotifyAuthUser;
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

    public login(redirectTo: string): Observable<ISpotifyResult> {
        const nonceValue = {
            requestId: uuid().replace('-', ''),
            redirectTo
        };
        const encodedValue = this.encodeToken(nonceValue);
        this.addEncodedTokenToStorage('login_info', encodedValue);

        const url = `${environment.testApiUrl}/spotify-auth/login`;
        return this.httpClient.get(url) as Observable<ISpotifyResult>;
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
        // TODO: Add later
        // if(!storedNonce) {
        //     return this.logOff();
        // } else if (storedNonce !== resp.nonce) {
        //     return this.logOff();
        // } 
        const decodedNonce = this.decodeToken(storedNonce);
        const redirectPath = decodedNonce.redirectTo ?? '/';
        this.addEncodedTokenToStorage(resp.expires_at, resp);
        void this.router.navigate([redirectPath])
    }

    public addLoggedInUser(): void {
        this.authUserSubject.next(this.spotifyUser);
        this.userService.loggedInUser.next(this.spotifyUser);
    }

    private decodeToken(encodedValue: string | null): any {
        if (encodedValue) {
            const decodedJsonStr = Buffer.from(encodedValue, "base64").toString();
            return JSON.parse(decodedJsonStr);
        } 
        return null;
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
        const decodedToken = this.decodeToken(token) as SpotifyAuthUser;
        if (decodedToken[EXP_FIELD] < now) {
            this.removeTokenFromStorage();
        }
        return true;
    }

}
