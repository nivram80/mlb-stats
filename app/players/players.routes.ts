import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from "./players.component";
import { PlayerDetailsComponent } from "./details/player-details.component";

const playersRoutes: Routes = [
    { path: 'players',  component: PlayersComponent },
    { path: 'players/:playerID', component: PlayerDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(playersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PlayerRoutingModule { }