import { NgModule }       from '@angular/core';
import { CommonModule } from "@angular/common";
import { PlayerRoutingModule } from "./players.routes";
import { PlayerService } from "./players.service";
import { PlayersComponent } from "./players.component";

@NgModule({
    imports: [
        CommonModule,
        PlayerRoutingModule
    ],
    declarations: [
        PlayersComponent
    ],
    providers: [
        PlayerService
    ]
})
export class PlayersModule {}