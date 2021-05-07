import React, { useState } from "react";
import PropTypes from "prop-types";
// para poder escribir 
//que no pueda escribir si el valor no es null
const PrintValue = props => {
	const [value, setValue] = useState("polla");
    let print = "";
    let dontwrite = null
	//let check = 0;
	if (value == true && dontwrite== null) {
        print = "X";
        dontwrite=!null;
		//check = check + 1;
	}
	if (value == false && dontwrite== null) {
        dontwrite=!null;
		print = "O";
		//check = check + 1;
	}
	return (
		<div className="value" onClick={() => setValue(props.value)}>
			{print}
		</div>
	);
};


export default PrintValue;


PrintValue.propTypes = {
    value: PropTypes.bool,
    //winner:PropTypes.func
};
