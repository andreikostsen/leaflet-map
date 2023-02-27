import {filterType} from "../App";

export const waste:Array<filterType> = ["пластик", "бумага", "стекло", "крупногабаритные отходы", "опасные отходы", "металл"]


// ["plastic", "paper", "glass", "oversized", "dangerous", "metal"]

export const markers = [
    {id: 1, title: "Пункт 1", address: "г.Минск, ул.Сурганова, 23", latitude: 53.884, longitude: 27.600, info: "Some info about point 1", wasteTypes: [waste[0],waste[1]], display: false },
    {id: 2, title: "Пункт 2", address: "г.Минск, ул.Кальварийская, 7", latitude: 53.9024716, longitude: 27.5618225, info: "Some info about point 2", wasteTypes: [waste[1],waste[2]], display: false},
    {id: 3, title: "Пункт 3", address: "г.Минск, ул.Ольшевского, 10", latitude: 53.916, longitude: 27.480, info: "Some info about point 3", wasteTypes: [waste[0],waste[2]], display: false},
    {id: 13, title: "Пункт 13", address: "г.Минск, пр-т.Звязда, 28", latitude: 53.900, longitude: 27.480, info: "Some info about point 13", wasteTypes: [waste[5]], display: false},
]


export type ButtonObjType = {
    id: number,
    wasteTitle: filterType,
    isActive: boolean
}


export const buttons:Array<ButtonObjType> = [
    {id: 1, wasteTitle: waste[0], isActive: true},
    {id: 2, wasteTitle: waste[1], isActive: false},
    {id: 3, wasteTitle:  waste[2], isActive: true},
    {id: 4, wasteTitle:  waste[3], isActive: true},
    {id: 5, wasteTitle:  waste[4], isActive: true},
    {id: 6, wasteTitle:  waste[5], isActive: false},
]
