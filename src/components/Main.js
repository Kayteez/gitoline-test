import React, { Component } from 'react';
import PlayersPresentation from '../PlayersPresentation';
import { Players } from '../shared/ListOfPlayers';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: Players
        };
    }
    render() {
        return <PlayersPresentation players={this.state.players} />
    }

}
export default Main