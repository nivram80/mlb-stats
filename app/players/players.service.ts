import { Injectable } from '@angular/core';
import { PLAYERS } from "./player-data";
import { Player } from "./player";

@Injectable()
export class PlayerService {

    getPlayers(): Promise<Player[]> {
       return Promise.resolve(PLAYERS)
    }

}