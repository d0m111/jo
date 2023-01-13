import React from "react";

export default function Events(){

    const dates2023 = [
        {date:'08.02', proyect: 'SOLO', place:'Cité internationale des arts, Paris (FR)'},
        {date:'23.01 - 28.01', proyect: 'Résidence MARELLE', place:'La fabrique, Saint-Étienne (FR)'},
    ]

    const dates2022 = [
    { date: '16.12', proyect: 'SOLO', place:'L\'Atelier des Canulars, Lyon (FR)'},
    { date:'03.12', proyect:'SOLO', place:'Le Figuier Pourpre, Avignon (FR)'},
    { date:'01.12', proyect:'duo w/Marion Jo', place:'s.l, Toulouse (FR)'},
    { date:'25.11', proyect:'SOLO', place:'La Tortuga, Madrid (ES)'},
    { date:'24.11', proyect:'SOLO', place:'Cruce, Madrid (ES)'}, 
    { date:'20.11', proyect:'Latere performance w/Elvira Madrigal', place:'Migrats Dansa CCCC, Valencia (ES)'}, 
    { date:'19.11', proyect:'Latere, performance w/Elvira Madrigal', place:'Migrats Dansa CCCC, Valencia (ES)'},
    { date:'16.11', proyect:'SOLO', place:'Le Taquin, Toulouse (FR)'},
    { date:'06.11', proyect:'duo w/Marion Jo', place:'Le Poinçonneur, Toulouse (FR)'},
    { date:'01.11 - 06.11', proyect:'solo recording', place:'studio éole, Toulouse (FR)'},
    { date:'26.10', proyect:'SOLO', place:'Cité internationale des arts, Paris (FR)'} 
    ]

    return (
        <article>
            <div className="component-title-wrapper">
                <h3>2023</h3>
            </div>
                {dates2023.map((e,i)=>(
                <div className="events-container" key={i}>
                    <p>{e.date}</p> 
                    <p>{e.proyect}</p>
                    <p>{e.place}</p>
                </div>
                ))}
            <div className="component-title-wrapper">
                <h3>2022</h3>
            </div>
                {dates2022.map((e,i)=>(
                <div className="events-container" key={i}>
                    <p>{e.date}</p> 
                    <p>{e.proyect}</p>
                    <p>{e.place}</p>
                </div>
                ))}
        </article>

    )
}