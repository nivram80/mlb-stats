import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PlayersComponent } from "./players/players.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";

@NgModule({
    imports:      [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    declarations: [
        AppComponent,
        PlayersComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {

}
