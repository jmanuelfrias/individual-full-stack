
import React, {useContext, useState} from 'react';
import {CategoryData} from "../resources/data/CategoryData";
import {LibraryContext} from "../context/LibraryContext";
import '../styles/Filter.css'

const Filter = () => {
    // Para guardar el filtro seleccionado
    const { selectedFilter, updateSelectedFilter } = useContext(LibraryContext)
    const {  updateSearchBox } = useContext(LibraryContext)

    return (
        <div className="container filter-div">
            <div className="div-selector">
                <p className="filter-text">Filtro por género</p>
                {/*Caja del filtro donde tenemos un on Change que llama a la función de actualizar lo guardado*/}
                <select className="filter-select"
                        value={selectedFilter}
                        onChange={(e) => updateSelectedFilter(e.target.value)}
                >
                    <option value="">Filtro por género</option>
                    {/*mapa con todos los posibles categorías*/}
                    {CategoryData.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="div-searchBox">
                <p className="filter-text">Buscar nombre</p>

                <input className="filter-searchBox"
                       placeholder="Buscador por nombre"
                       type="text" onChange={(e) => updateSearchBox(e.target.value)}  />
            </div>

            </div>
    );
};

export default Filter;
