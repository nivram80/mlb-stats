import { Component, OnInit } from '@angular/core';
import { PlayerService } from "./players.service";
import { Player } from "./player";

@Component({
    selector: 'players',
    templateUrl: 'app/players/players.html'
})

export class PlayersComponent implements OnInit {

    players: Player[];

    constructor(private playerService: PlayerService) { }

    ngOnInit(): void {
        this.getPlayers();
    }

    getPlayers() {
        this.playerService.getPlayers()
            .then(players => this.players = players);
    }
}