import React, { useState } from "react";
import PropTypes from "prop-types";
import PrintValue from "./printvalue.js";

const Board = () => {
    const [value, setValue] = useState(true);
    const [allValues, setAllValues] = useState();
    let arr = new Array(9);
    arr.fill(null);
    console.log(arr);

    //let allValues = ["", "", "", "", "", "", "", "", ""];

    function changeValue(position) {
		/*if (value == true) {setValue(false);}
		if (value == false) {setValue(true);}*/
        setValue(!value);
        //allValues[position] = value;
        //setAllValues((allValues[position] = "polla"));
        console.log(value);
    }
    /**
     * 0 1 2    X   0   
     * 3 4 5        x
     * 6 7 8
      const [0,4,2]
     */
    // funcion ganador 
        function winner(dateW) {
            //array con todas las posibilidades de victoria
            const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
            //bucle for para recorrer todo el array 
            for (let index = 0; index < win.length; index++) {
                for(let j=0;j<index;j++){
                    //meto los valores del win dentro de la constante segun se vayan introduciendo 
                    //const [a, b, c] = win[index];
                    const [a, b, c] = win[index];
                    //condicion de victoria 
                    if (dateW[a] && dateW[a] === dateW[b] && dateW[a] === dateW[c]) {
                        return dateW[a];
                    }
                }
            }
            return dateW;
        }

    return (
        <div className="container">
            <div className="row">
                <div
                    className="col-4 square"
                    onClick={() => {
                        changeValue(0);
                    }}>
                    <PrintValue value={value} />
                </div>
                <div
                    className="col-4 square"
                    onClick={() => {
                        changeValue(1);
                    }}>
                    <PrintValue value={value} />
                </div>
                <div
                    className="col-4 square"
                    onClick={() => {
                        changeValue(2);
                    }}>
                    <PrintValue value={value} />
                </div>
            </div>
            <div className="row">
                <div
                    className="col-4 square"
                    onClick={() => {
                        changeValue(3);
                    }}>
                    <PrintValue value={value} />
                </div>
                <div
                    className="col-4 square"
                    onClick={() => {
                        changeValue(4);
                    }}>
                    <PrintValue value={value} />
                </div>
                <div
                    className="col-4 square"
                    onClick={() => {
                        changeValue(5);
                    }}>
                    <PrintValue value={value} />
                </div>
            </div>
            <div className="row">
                <div
                    className="col-4 square"
                    onClick={() => {
                        changeValue(6);
                    }}>
                    <PrintValue value={value} />
                </div>
                <div
                    className="col-4 square"
                    onClick={() => {
                        changeValue(7);
                    }}>
                    <PrintValue value={value} />
                </div>
                <div
                    className="col-4 square"
                    onClick={() => {
                        changeValue(8);
                    }}>
                    <PrintValue value={value} />
                </div>
            </div>
        </div>
    );
};

export default Board;
