import { NgModule }       from '@angular/core';
import { CommonModule } from "@angular/common";
import { PlayerRoutingModule } from "./players.routes";
import { PlayerService } from "./players.service";
import { PlayersComponent } from "./players.component";
import { FormsModule } from "@angular/forms";
import { Ng2FilterPipeModule } from "ng2-filter-pipe";
import { PlayerDetailsComponent } from "./details/player-details.component";

@NgModule({
    imports: [
        CommonModule,
        PlayerRoutingModule,
        FormsModule,
        Ng2FilterPipeModule
    ],
    declarations: [
        PlayersComponent,
        PlayerDetailsComponent
    ],
    providers: [
        PlayerService
    ]
})
export class PlayersModule {}