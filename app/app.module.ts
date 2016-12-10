import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from "./app.routes";
import { PlayersModule } from "./players/players.module";
import { MainHeaderComponent } from "./main-header/main-header.component";

@NgModule({
    imports:      [
        BrowserModule,
        PlayersModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        MainHeaderComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}
