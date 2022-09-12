import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SpotifyAuthUser } from "src/app/models/spotify-auth-user.model";

@Injectable({
    providedIn: 'root'
})
export class SpotifyUserService {
    public loggedInUser: BehaviorSubject<SpotifyAuthUser> = new BehaviorSubject<any>({});
}