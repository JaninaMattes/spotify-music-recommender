import { Injectable } from "@angular/core";
import cssVars from "css-vars-ponyfill";
import { darkTheme, lightTheme } from "src/assets/styles/themes";
import { ITheme } from "../interfaces/ITheme";

@Injectable({
    providedIn: 'root'
})
export class ColorThemeService {
    public setTheme(mode: 'light' | 'dark'): void {
        const themeVar = this.getThemeVariables(mode);
        this.setColorVariables(themeVar);
    }

    private getThemeVariables(mode: 'light' | 'dark'): ITheme {
        if (mode === 'dark'){
            return darkTheme;
        } else  {
            return lightTheme;
        }
    }

    private setColorVariables(colorPalette: ITheme): void {
        cssVars({
            variables: {
                ...colorPalette
            }
        })
    }
}