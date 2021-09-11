import { ITareas } from "../models/itareas.interface";

export const TareasMock: ITareas[] = [
    {
        id: 1,
        titulo: "Plataforma",
        descripcion: " Debes descargar la plataforma",
        urgencia: 1,
        responsable: "Developer Team",
        fechaInicio: new Date('01,01,2021'),
        fechaFin: new Date('10,01,2021'),
    },
    {
        id: 2,
        titulo: "Plataforma",
        descripcion: "Debes importar la plataforma",
        urgencia: 2,
        responsable: "Developer Team",
        fechaInicio: new Date('01,02,2021'),
        fechaFin: new Date('10,02,2021'),
    },
    {
        id: 3,
        titulo: "Plataforma",
        descripcion: "Debes introducir el codigo HTML/CSS a la plataforma",
        urgencia: 3,
        responsable: "Developer Team",
        fechaInicio: new Date('01,03,2021'),
        fechaFin: new Date('10,03,2021'),
    },
    {
        id: 4,
        titulo: "Plataforma",
        descripcion: "Debes introducir codigo Typescript con Angular la plataforma",
        urgencia: 4,
        responsable: "Developer Team",
        fechaInicio: new Date('01,04,2021'),
        fechaFin: new Date('10,04,2021'),
    },
    {
        id: 5,
        titulo: "Plataforma",
        descripcion: "Tienes que tener terminada la plataforma",
        urgencia: 5,
        responsable: "Developer Team",
        fechaInicio: new Date('01,05,2021'),
        fechaFin: new Date('10,05,2021'),
    }
]