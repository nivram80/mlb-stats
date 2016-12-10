import { Injectable } from '@angular/core';
import { PLAYERS } from "./player-data";
import { Player } from "./player.model";

@Injectable()
export class PlayerService {

    getPlayers(): Promise<Player[]> {
       return Promise.resolve(PLAYERS)
    }

    getPlayer(id: string): Promise<Player> {
        return this.getPlayers()
            .then(players => players.find(player => player.playerID === id));
    }

}