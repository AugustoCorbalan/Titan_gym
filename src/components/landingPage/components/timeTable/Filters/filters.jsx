import { useEffect, useState } from "react";
import {trainings, hours} from './data.js';
import arrow_down from '../../../../../assets/icons/arrow_down.svg';

export const Filters = ({setDisciplineSelected, id}) =>{
    
    const [training, setTraining] = useState(trainings.noSelected);
    const [hour, setHour] = useState(hours.noSelected);
    const [menuVisibleTraining, setMenuVisibleTraining] = useState(false);
    const [menuVisibleHour, setMenuVisibleHour] = useState(false);

    useEffect(()=>{
        const body = document.querySelector("body");
        const handlerClick = (event)=>{
            const container_filters = document.querySelector(`#${id}`);
            if((!container_filters.contains(event.target))){
                setMenuVisibleTraining(false);
                setMenuVisibleHour(false);
            }
        }
        body.addEventListener("click", handlerClick); 
        if(id == 'container_filters_mobile'){
            body.addEventListener("touchstart", handlerClick);
        }
        return ()=>{
            body.removeEventListener("click", handlerClick)
            body.removeEventListener("touchstart", handlerClick);

        }
    },[])

    const handlerClickVisibleTraining = ()=>{
        setMenuVisibleTraining(!menuVisibleTraining);
        setMenuVisibleHour(false);
    }
    const handlerClickVisibleHour = ()=>{
        setMenuVisibleHour(!menuVisibleHour);
        setMenuVisibleTraining(false);
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
        <div id={id} className="container_filters">
            <div>
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
            </div>
            <div>
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
        </div>
    )
}