import {filterType} from "../App";

export const waste = ["пластик", "бумага", "стекло", "крупногабаритные отходы", "опасные отходы", "металл"]


// ["plastic", "paper", "glass", "oversized", "dangerous", "metal"]

export const markers = [
    {id: 1, title: "Пункт 1", address: "г.Минск, ул.Сурганова, 23", latitude: 53.884, longitude: 27.600, info: "Some info about point 1", wasteType: waste[0], display: false },
    {id: 2, title: "Пункт 2", address: "г.Минск, ул.Кальварийская, 7", latitude: 53.9024716, longitude: 27.5618225, info: "Some info about point 2", wasteType: waste[1], display: false},
    {id: 3, title: "Пункт 3", address: "г.Минск, ул.Ольшевского, 10", latitude: 53.916, longitude: 27.480, info: "Some info about point 3", wasteType: waste[2], display: false},
]


type ButtonObjType = {
    id: number,
    wasteTitle: filterType,
    isActive: boolean
}


export const buttons:Array<ButtonObjType> = [
    {id: 1, wasteTitle: "пластик", isActive: true},
    {id: 2, wasteTitle: "бумага", isActive: false},
    {id: 3, wasteTitle: "стекло", isActive: true},

]

//
// 1. в зависимости от нажатой кнопки формируется массив активных фильтров
// по умолчанию в массиве []
//
// 2. если нажата кнопка "пластик" в массиве активных фильтров "пластик",
//     а в массиве точек у всех объектов со свойством wasteType: "пластик", св-во display: true, у остальных false
//
//
//
// Вариант 2
//
// есть массив объектов с кнопками, в нем у кнопок есть статус isActive
// взависимости от статуса isActive  выбираем стиль CSS кнопки
//при нажатии на кнопку меняется статус isActive
//
// фильтруя массив точек по статусу кнопок isActive=true, мы вытаскиваем в новый массив нужные нам точки и отрисовываем их
