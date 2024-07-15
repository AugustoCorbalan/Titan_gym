import mancuerna_vector from '../../../../../assets/icons/time-table/mancuerna_vector.svg';
import pesaRusa_vector from '../../../../../assets/icons/time-table/pesaRusa_vector.svg';
import boxeo_vector from '../../../../../assets/icons/time-table/boxeo_vector.svg';
import none_selection from '../../../../../assets/icons/none.svg';

export const hours = {
    hour8_30: "8:30hs a 9:30hs",
    hour9_30: "9:30hs a 10:30hs",
    hour15_30: "15:30hs a 16:30hs",
    hour16_30: "16:30hs a 17:30hs",
    hour18_00: "18:00hs a 19:00hs",
    hour19_30: "19:30hs a 20:30hs",
    hour20_30: "20:30hs a 21:30hs",
    hour21_30: "21:30hs a 22:30hs",
    noSelected: "Ninguno seleccionado"
}


export const trainings = {
    totalBody: {
        name: 'Total Body',
        image: pesaRusa_vector,
        hours: {
            hour1: hours.hour8_30,
            hour2: hours.hour19_30,
            hour3: hours.hour20_30,
            hour4: hours.hour21_30,
        }
    },
    personalized: {
        name: 'Entrenamiento personalizado',
        image: mancuerna_vector,
        hours: {
            hour1: hours.hour9_30,
            hour2: hours.hour15_30,
            hour3: hours.hour16_30,
            hour4: hours.hour18_00,
            hour5: hours.hour19_30,
        }
    },
    boxing:{
        name: 'Boxeo',
        image: boxeo_vector,
        hours: {
            hour1: hours.hour21_30
        }
    },
    noSelected: {
        name: 'Ninguno seleccionado',
        image: none_selection,
        hours
    }
}