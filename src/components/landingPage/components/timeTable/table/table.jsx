import { useEffect, useState } from 'react';
import {defaultIcons, matchDiscipline} from './table.js' ;

export const Table = ({disciplineSelected})=>{

    const disciplineSelectedName = disciplineSelected? disciplineSelected.name : "Ninguno seleccionado"; 
    const disciplineSelectedHour= disciplineSelected? disciplineSelected.hour : "Ninguno seleccionado";
    
    const [diccionaryIcons, setDiccionaryIcons] = useState(defaultIcons);
    useEffect(()=>{
        setDiccionaryIcons( matchDiscipline(disciplineSelectedName, disciplineSelectedHour));
    },[disciplineSelected])

    return(
        <div className = "table">
            <div className="container">
                <div className="days">
                    <span></span>
                    <span>LUNES</span>
                    <span>MARTES</span>
                    <span>MIERCOLES</span>
                    <span>JUEVES</span>
                    <span>VIERNES</span>
                </div>
                <div className="row">
                    <span>8:30hs</span>
                    <span className="Lunes">
                        <img src={diccionaryIcons.Lunes_8_30} alt='icono de "total body"'/>
                    </span>
                    <span className="Martes"></span>
                    <span className="Miercoles">
                        <img src={diccionaryIcons.Miercoles_8_30} alt='icono de "total body"'/>
                    </span>
                    <span className="Jueves"></span>
                    <span className="Viernes">
                        <img src={diccionaryIcons.Viernes_8_30} alt='icono de "total body"'/>
                    </span>
                </div>
                <div className="row">
                    <span>9:30hs</span>
                    <span className="Lunes"></span>
                    <span className="Martes"></span>
                    <span className="Miercoles">
                        <img src={diccionaryIcons.Miercoles_9_30} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                    <span className="Jueves"></span>
                    <span className="Viernes">
                        <img src={diccionaryIcons.Viernes_9_30} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                </div>
                <div className="separator"/>
                <div className="row">
                    <span>15:30hs</span>
                    <span className="Lunes">
                        <img src={diccionaryIcons.Lunes_15_30} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                    <span className="Martes"></span>
                    <span className="Miercoles">
                        <img src={diccionaryIcons.Miercoles_15_30} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                    <span className="Jueves"></span>
                    <span className="Viernes">
                        <img src={diccionaryIcons.Viernes_15_30} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                </div>
                <div className="row">
                    <span>16:30hs</span>
                    <span className="Lunes">
                        <img src={diccionaryIcons.Lunes_16_30} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                    <span className="Martes"></span>
                    <span className="Miercoles">
                        <img src={diccionaryIcons.Miercoles_16_30} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                    <span className="Jueves"></span>
                    <span className="Viernes">
                        <img src={diccionaryIcons.Viernes_16_30} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                </div>
                <div className="row">
                    <span>18:00hs</span>
                    <span className="Lunes">
                        <img src={diccionaryIcons.Lunes_18_00} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                    <span className="Martes"></span>
                    <span className="Miercoles">
                        <img src={diccionaryIcons.Miercoles_18_00} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                    <span className="Jueves"></span>
                    <span className="Viernes">
                        <img src={diccionaryIcons.Viernes_18_00} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                </div>
                <div className="separator"/>
                <div className="row">
                    <span>19:30hs</span>
                    <span className="Lunes">
                        <img src={diccionaryIcons.Lunes_19_30} alt='icono de "total body"'/>
                    </span>
                    <span className="Martes">
                        <img src={diccionaryIcons.Martes_19_30} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                    <span className="Miercoles">
                        <img src={diccionaryIcons.Miercoles_19_30} alt='icono de "total body"'/>
                    </span>
                    <span className="Jueves">
                        <img src={diccionaryIcons.Jueves_19_30} alt='icono de "Entrenamiento personalizado"'/>
                    </span>
                    <span className="Viernes">
                        <img src={diccionaryIcons.Viernes_19_30} alt='icono de "total body"'/>
                    </span>
                </div>
                <div className="row">
                    <span>20:30hs</span>
                    <span className="Lunes">
                        <img src={diccionaryIcons.Lunes_20_30} alt='icono de "total body"'/>
                    </span>
                    <span className="Martes"></span>
                    <span className="Miercoles">
                        <img src={diccionaryIcons.Miercoles_20_30} alt='icono de "total body"'/>
                    </span>
                    <span className="Jueves"></span>
                    <span className="Viernes">
                        <img src={diccionaryIcons.Viernes_20_30} alt='icono de "total body"'/>
                    </span>
                </div>
                <div className="row">
                    <span>21:30hs</span>
                    <span className="Lunes">
                        <img src={diccionaryIcons.Lunes_21_30} alt='icono de "total body"'/>
                    </span>
                    <span className="Martes">
                        <img src={diccionaryIcons.Martes_21_30} alt='icono de "Boxeo"'/>
                    </span>
                    <span className="Miercoles">
                        <img src={diccionaryIcons.Miercoles_21_30} alt='icono de "total body"'/>
                    </span>
                    <span className="Jueves">
                        <img src={diccionaryIcons.Jueves_21_30} alt='icono de "Boxeo"'/>
                    </span>
                    <span className="Viernes">
                        <img src={diccionaryIcons.Viernes_21_30} alt='icono de "total body"'/>
                    </span>
                </div>
            </div>
            <span className='foot_description'>
                *Cada nu´´mero corresponde a un grupo y horario de la disciplina.
            </span>
        </div>
    )
}