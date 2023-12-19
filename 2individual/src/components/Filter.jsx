
import React, {useContext} from 'react';
import {CategoryData} from "../resources/data/CategoryData";
import {LibraryContext} from "../context/LibraryContext";
import '../styles/Filter.css'

const Filter = () => {
    // Para guardar el filtro seleccionado
    const { selectedFilter, updateSelectedFilter } = useContext(LibraryContext)
    const {  updateSearchBox } = useContext(LibraryContext)
    const { isDarkMode } = useContext(LibraryContext);


    return (
        <div className={`container filter  ${isDarkMode ? "boxes--dark" : "boxes--light"}`}>
            <div className="filter__selector">
                <p className={`filter__text ${isDarkMode ? "mainText--dark" : "mainText--light"}`}>Filtro por género</p>
                {/*Caja del filtro donde tenemos un on Change que llama a la función de actualizar el estado del filtro*/}
                <select className="selector__select"
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
            <div className="filter__searchBox">
                <p className={`filter__text ${isDarkMode ? "mainText--dark" : "mainText--light"}`}>Buscar nombre</p>
                {/*Al igual que el otro filtro, cuando haya cambios en este input, cambiar el estado del searchbox*/}
                <input className="searchBox__input"
                       placeholder="Buscador por nombre"
                       type="text" onChange={(e) => updateSearchBox(e.target.value)}  />
            </div>

            </div>
    );
};

export default Filter;
