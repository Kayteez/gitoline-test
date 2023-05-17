// import React, { Component }from 'react'
// export default class player extends Component {
//     render(){
//         return(
//             <div className='container'>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/cr.jpg' />
//                         <h3>Cristiano Ronaldo</h3>
//                         <p className='title'>Manchester United</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/kante.jpg'></img>
//                         <h3>Kante</h3>
//                         <p className='title'>Chelsea</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>

//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/messi.jpg'></img>
//                         <h3>Messi</h3>
//                         <p className='title'>PSG</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/neymar.jpg'></img>
//                         <h3>Neymar</h3>
//                         <p className='title'>PSG</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>

//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/kane.jpg'></img>
//                         <h3>Kane</h3>
//                         <p className='title'>Tottemham</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/haaland.jpg'></img>
//                         <h3>Haaland</h3>
//                         <p className='title'>Manchester City</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//             </div>
//         )
//                 }
// }
import React from "react";
import { Players } from "./shared/ListOfPlayers";
export default function Player() {
        return(
            <div className="container">
                {Players.map((player)=>(
                    <div className="column">
                    <div className="card">
                        <img src={process.env.PUBLIC_URL+player.img}/>
                        <h3>{player.name}</h3>
                        <p className="title">{player.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                ))}
            </div>
        )
}