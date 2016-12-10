import { Component, OnInit } from "@angular/core";
import { Player } from "../player.model";
import { PlayerService } from "../players.service";
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'player-details',
    templateUrl: 'app/players/details/player-details.html'
})

export class PlayerDetailsComponent implements OnInit {

    public player: Player;
    public lastNameFilter = { nameLast: '' };

    constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.playerService.getPlayer(params['playerID']))
            .subscribe(player => this.player = player);
    }

}