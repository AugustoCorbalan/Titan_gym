import { useState } from "react";
import {trainings, hours} from './data.js';
import arrow_down from '../../../assets/icons/arrow_down.svg';

export const Filters = ({setDisciplineSelected}) =>{
    
    const [training, setTraining] = useState(trainings.noSelected);
    const [hour, setHour] = useState(hours.noSelected);
    const [menuVisibleTraining, setMenuVisibleTraining] = useState(false);
    const [menuVisibleHour, setMenuVisibleHour] = useState(false);

    const handlerClickVisibleTraining = ()=>{
        setMenuVisibleTraining(!menuVisibleTraining);
    }
    const handlerClickVisibleHour = ()=>{
        setMenuVisibleHour(!menuVisibleHour);
    }
    const handlerClickSelectTraining = (training)=>{
        setTraining(training);
        setDisciplineSelected({name: training.name, hour: "Ninguno seleccionado"});
        setMenuVisibleTraining(!menuVisibleTraining);
    }
    const handlerClickSelectHour = (hour)=>{
        setHour(hour);
        setDisciplineSelected({name: training.name, hour: hour});
        setMenuVisibleHour(!menuVisibleHour);
    }
    return(
        <div className="container_filters">
            <h3>Elgir entrenamiento:</h3>
            <button className="button_selection" onClick={handlerClickVisibleTraining}>
                <div className="image_container">
                    <img src={training.image} alt="Icono de la disciplina"/>
                </div>
                <span>{training? training.name : ""}</span>
                <div className="image_container">
                    <img src={arrow_down} alt="Icono desplegable"/>
                </div>
            </button>
            <div className={ menuVisibleTraining ? "dropdown_menu_training" : "dropdown_menu_notVisible" }>
                {
                    Object.keys(trainings).map((el)=>{   
                        return(
                            <button className="button_selection" onClick={()=> handlerClickSelectTraining(trainings[el])}>
                                <div className="image_container">
                                    <img src={trainings[el].image} alt="Icono de la disciplina"/>
                                </div>
                                <span>{trainings[el].name}</span>
                            </button>
                        )
                    })
                }
            </div>
            <h3>Elgir horario:</h3>
            <button className="button_selection" onClick={handlerClickVisibleHour}>
                <span>{hour? hour : ""}</span>
                <div className="image_container">
                    <img src={arrow_down} alt="Icono desplegable"/>
                </div>
            </button>
            <div className={ menuVisibleHour ? "dropdown_menu_hour" : "dropdown_menu_notVisible" }>
                { 
                    Object.keys(training.hours? training.hours : hours).map((el)=>{   
                        return(
                            <button className="button_selection" onClick={()=> handlerClickSelectHour(training.hours[el])}>
                                <span>{training.hours[el]}</span>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}