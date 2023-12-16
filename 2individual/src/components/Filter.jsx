
import React, {useContext, useState} from 'react';
import {CategoryData} from "../resources/data/CategoryData";
import {LibraryContext} from "../context/LibraryContext";


const Filter = () => {
    // Para guardar el filtro seleccionado
    const { selectedFilter, updateSelectedFilter } = useContext(LibraryContext)

    return (
        <div className="container filter-div">
            <p className="filter-text">Filtro por género</p>

            {/*Caja del filtro donde tenemos un on Change que llama a la función de actualizar lo guardado*/}
            <select className="filter-select"
                value={selectedFilter}
                onChange={(e) => updateSelectedFilter(e.target.value)}
            >
                <option value="">Elija un Género</option>
                {/*mapa con todos los posibles categorías*/}
                {CategoryData.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
