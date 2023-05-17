import React, {Component} from "react";
import {Players} from "../shared/ListOfPlayers";
import PlayersPresentation from "../PlayersPresentation";
export class Main extends Component{
    constructor(){
        super();
        this.state = {
            players:Players
        };
    }
    render(){
        return(
            <div>
                {/* <PlayersPresentation players={Players}/> */}
            <PlayersPresentation players={this.state.players}/>
            </div>
        )
    }
}
export default Main