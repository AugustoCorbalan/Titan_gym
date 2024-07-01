import totalBody_icon_1 from '../../../assets/icons/time-table/pesaRusa_vector1.svg';
import totalBody_icon_2 from '../../../assets/icons/time-table/pesaRusa_vector2.svg';
import totalBody_icon_3 from '../../../assets/icons/time-table/pesaRusa_vector3.svg';
import totalBody_icon_4 from '../../../assets/icons/time-table/pesaRusa_vector4.svg';
import totalBody_icon_1_none from '../../../assets/icons/time-table/pesaRusa_vector1_none.svg';
import totalBody_icon_2_none from '../../../assets/icons/time-table/pesaRusa_vector2_none.svg';
import totalBody_icon_3_none from '../../../assets/icons/time-table/pesaRusa_vector3_none.svg';
import totalBody_icon_4_none from '../../../assets/icons/time-table/pesaRusa_vector4_none.svg';
import personalizado_icon_1 from '../../../assets/icons/time-table/mancuerna_vector1.svg';
import personalizado_icon_2 from '../../../assets/icons/time-table/mancuerna_vector2.svg';
import personalizado_icon_3 from '../../../assets/icons/time-table/mancuerna_vector3.svg';
import personalizado_icon_4 from '../../../assets/icons/time-table/mancuerna_vector4.svg';
import personalizado_icon_5 from '../../../assets/icons/time-table/mancuerna_vector5.svg';
import personalizado_icon_1_none from '../../../assets/icons/time-table/mancuerna_vector1_none.svg';
import personalizado_icon_2_none from '../../../assets/icons/time-table/mancuerna_vector2_none.svg';
import personalizado_icon_3_none from '../../../assets/icons/time-table/mancuerna_vector3_none.svg';
import personalizado_icon_4_none from '../../../assets/icons/time-table/mancuerna_vector4_none.svg';
import personalizado_icon_5_none from '../../../assets/icons/time-table/mancuerna_vector5_none.svg';
import boxeo_icon from '../../../assets/icons/time-table/boxeo_vector.svg';
import boxeo_icon_none from '../../../assets/icons/time-table/boxeo_vector_none.svg';

export const defaultIcons = {
    Lunes_8_30 : totalBody_icon_1,
    Lunes_15_30 : personalizado_icon_2,
    Lunes_16_30 : personalizado_icon_3,
    Lunes_18_00 : personalizado_icon_4,
    Lunes_19_30 : totalBody_icon_2,
    Lunes_20_30 : totalBody_icon_3,
    Lunes_21_30 : totalBody_icon_4,
    Martes_19_30 : personalizado_icon_5,
    Martes_21_30 : boxeo_icon,
    Miercoles_8_30 : totalBody_icon_1,
    Miercoles_9_30 : personalizado_icon_1,
    Miercoles_15_30 : personalizado_icon_2,
    Miercoles_16_30 : personalizado_icon_3,
    Miercoles_18_00 : personalizado_icon_4,
    Miercoles_19_30 : totalBody_icon_2,
    Miercoles_20_30 : totalBody_icon_3,
    Miercoles_21_30 : totalBody_icon_4,
    Jueves_19_30 : personalizado_icon_5,
    Jueves_21_30 : boxeo_icon,
    Viernes_8_30 : totalBody_icon_1,
    Viernes_9_30 : personalizado_icon_1,
    Viernes_15_30 : personalizado_icon_2,
    Viernes_16_30 : personalizado_icon_3,
    Viernes_18_00 : personalizado_icon_4,
    Viernes_19_30 : totalBody_icon_2,
    Viernes_20_30 : totalBody_icon_3,
    Viernes_21_30 : totalBody_icon_4,
}
//Verifica si una disciplina y horario hacen match con los seleccionados
const match = (disciplineSelected, nameDiscipline, hourDiscipline)=>{
    const {disciplineSelectedName, disciplineSelectedHour} = disciplineSelected;
    if (disciplineSelectedName == 'Ninguno seleccionado'){
        return (disciplineSelectedHour == hourDiscipline || disciplineSelectedHour == 'Ninguno seleccionado');
    }else if (disciplineSelectedName == nameDiscipline){
        return (disciplineSelectedHour == hourDiscipline || disciplineSelectedHour == 'Ninguno seleccionado');
    }
}

//Genera un nuevo diccionario de iconos, con los iconos correspondientes segun si cada uno hace match o no con los parametros seleccionados
export const matchDiscipline = (disciplineSelectedName, disciplineSelectedHour)=>{
    const disciplineSelected = {disciplineSelectedName, disciplineSelectedHour}
    return {  
       Lunes_8_30 : match(disciplineSelected, 'Total Body', "8:30hs a 9:30hs") ? totalBody_icon_1 : totalBody_icon_1_none,
       Lunes_15_30 : match(disciplineSelected, 'Entrenamiento personalizado', "15:30hs a 16:30hs")? personalizado_icon_2 : personalizado_icon_2_none,
       Lunes_16_30 : match(disciplineSelected, 'Entrenamiento personalizado', "16:30hs a 17:30hs")? personalizado_icon_3 : personalizado_icon_3_none,
       Lunes_18_00 : match(disciplineSelected, 'Entrenamiento personalizado', "18:00hs a 19:00hs")? personalizado_icon_4 : personalizado_icon_4_none,
       Lunes_19_30 : match(disciplineSelected, 'Total Body', "19:30hs a 20:30hs")? totalBody_icon_2 : totalBody_icon_2_none,
       Lunes_20_30 : match(disciplineSelected, 'Total Body', "20:30hs a 21:30hs")? totalBody_icon_3 : totalBody_icon_3_none,
       Lunes_21_30 : match(disciplineSelected, 'Total Body', "21:30hs a 22:30hs")? totalBody_icon_4 : totalBody_icon_4_none,
       Martes_19_30 : match(disciplineSelected, 'Entrenamiento personalizado', "19:30hs a 20:30hs")? personalizado_icon_5 : personalizado_icon_5_none,
       Martes_21_30 : match(disciplineSelected, 'Boxeo', "19:30hs a 20:30hs")? boxeo_icon : boxeo_icon_none,
       Miercoles_8_30 : match(disciplineSelected, 'Total Body', "8:30hs a 9:30hs")? totalBody_icon_1 : totalBody_icon_1_none ,
       Miercoles_9_30 : match(disciplineSelected, 'Entrenamiento personalizado', "9:30hs a 10:30hs")? personalizado_icon_1 : personalizado_icon_1_none,
       Miercoles_15_30 : match(disciplineSelected, 'Entrenamiento personalizado', "15:30hs a 16:30hs")? personalizado_icon_2 : personalizado_icon_2_none,
       Miercoles_16_30 : match(disciplineSelected, 'Entrenamiento personalizado', "16:30hs a 17:30hs")? personalizado_icon_3 : personalizado_icon_3_none,
       Miercoles_18_00 : match(disciplineSelected, 'Entrenamiento personalizado', "18:00hs a 19:00hs")? personalizado_icon_4 : personalizado_icon_4_none,
       Miercoles_19_30 : match(disciplineSelected, 'Total Body', "19:30hs a 20:30hs")? totalBody_icon_2 : totalBody_icon_2_none,
       Miercoles_20_30 : match(disciplineSelected, 'Total Body', "20:30hs a 21:30hs")? totalBody_icon_3 : totalBody_icon_3_none,
       Miercoles_21_30 : match(disciplineSelected, 'Total Body', "21:30hs a 22:30hs")? totalBody_icon_4 : totalBody_icon_4_none,
       Jueves_19_30 : match(disciplineSelected, 'Entrenamiento personalizado', "19:30hs a 20:30hs")? personalizado_icon_5 : personalizado_icon_5_none,
       Jueves_21_30 : match(disciplineSelected, 'Boxeo', "21:30hs a 22:30hs")? boxeo_icon : boxeo_icon_none,
       Viernes_8_30 : match(disciplineSelected, 'Total Body', "8:30hs a 9:30hs")? totalBody_icon_1 : totalBody_icon_1_none,
       Viernes_9_30 : match(disciplineSelected, 'Entrenamiento personalizado', "9:30hs a 10:30hs")? personalizado_icon_1 : personalizado_icon_1_none,
       Viernes_15_30 : match(disciplineSelected, 'Entrenamiento personalizado', "15:30hs a 16:30hs")? personalizado_icon_2 : personalizado_icon_2_none,
       Viernes_16_30 : match(disciplineSelected, 'Entrenamiento personalizado', "16:30hs a 17:30hs")? personalizado_icon_3 : personalizado_icon_3_none,
       Viernes_18_00 : match(disciplineSelected, 'Entrenamiento personalizado', "18:00hs a 19:00hs")? personalizado_icon_4 : personalizado_icon_4_none,
       Viernes_19_30 : match(disciplineSelected, 'Total Body', "19:30hs a 20:30hs")? totalBody_icon_2 : totalBody_icon_2_none,
       Viernes_20_30 : match(disciplineSelected, 'Total Body', "20:30hs a 21:30hs")? totalBody_icon_3 : totalBody_icon_3_none,
       Viernes_21_30 : match(disciplineSelected, 'Total Body', "21:30hs a 22:30hs")? totalBody_icon_4 : totalBody_icon_4_none,
    }

}