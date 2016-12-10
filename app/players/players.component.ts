import { Component, OnInit } from '@angular/core';
import { PlayerService } from "./players.service";
import {Player} from "./player";

@Component({
    selector: 'players',
    templateUrl: 'app/players/players.html'
})

export class PlayersComponent implements OnInit {

    public players: Player[];
    public lastNameFilter = { nameLast: '' };

    constructor(private playerService: PlayerService) { }

    ngOnInit() {
        this.getPlayers();
    }

    public getPlayers() {
        this.playerService.getPlayers()
            .then(players => this.players = players);
    }

}