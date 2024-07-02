import { useState } from 'react';
import {Table} from './table/table.jsx'; 
import { Filters } from './Filters/filters.jsx';
import totalBody_icon from '../../assets/icons/time-table/pesaRusa_vector.svg';
import personalizado_icon from '../../assets/icons/time-table/mancuerna_vector.svg';
import boxeo_icon from '../../assets/icons/time-table/boxeo_vector.svg';

export const TimeTable = ()=>{
    const [disciplineSelected, setDisciplineSelected] = useState({name:'Ninguno seleccionado', hour:'Ninguno seleccionado'})
    return(
        <div className="timeTable_container">
            <h2>HORARIOS</h2>
            <div className='container_table_references_desktop'>
                <div className='container1'>
                    <Filters setDisciplineSelected={setDisciplineSelected}/>
                    <a className= "callToAction" href='https://wa.me/543547579422' target='_blanck'>
                        CONSULTAR
                    </a>
                </div>
                <Table disciplineSelected={disciplineSelected}/>
                <div className='container_references'>
                    <h3>Referencias:</h3>
                    <div className='reference'>
                        <div className='image_container'>
                            <img src={boxeo_icon} alt='Icono de "Boxeo"'/>
                        </div>
                        <span>Boxeo</span>
                    </div>
                    <div className='reference'>
                        <div className='image_container'>
                            <img src={personalizado_icon} alt='Icono de "Entrenamiento Personalizado"'/>
                        </div>
                        <span>Entrenamiento <br/> Personalizado</span>
                    </div>
                    <div className='reference'>
                        <div className='image_container'>
                            <img src={totalBody_icon} alt='Icono de "Total Body"'/>
                        </div>
                        <span>Total Body</span>
                    </div>
                </div>
            </div>
            <div className='container_table_references_mobile'>
                <Table/>
                <div className='container_references'>
                    <div className='reference'>
                        <img src={boxeo_icon} alt='Icono de "Boxeo"'  />
                        <span>Boxeo</span>
                    </div>
                    <div className='reference'>
                        <img src={totalBody_icon} alt='Icono de "Total Body"'  />
                        <span>Total Body</span>
                    </div>
                    <div className='reference'>
                        <img src={personalizado_icon} alt='Icono de "Entrenamiento Personalizado"'  />
                        <span>Entrenamiento <br/> Personalizado</span>
                    </div>
                </div>
            </div>
        </div>
    )
}