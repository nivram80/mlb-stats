import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from "./app.routes";
import { PlayersModule } from "./players/players.module";
import { Ng2FilterPipeModule } from "ng2-filter-pipe";

@NgModule({
    imports:      [
        BrowserModule,
        PlayersModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}
