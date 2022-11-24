import React, { useState } from "react";


const TrafficLight = () => {

	const [color, setColor] = useState("")

	return (
		<div className="container text-center">

		<div className="top"></div>

		<div className="TrafficLight">
			
			<div
				className={color === "red" ? "red on" : "red"}
				onClick={() => setColor("red")}>
			</div>
			<div
				className={color === "yellow" ? "yellow on" : "yellow"}
				onClick={() => setColor("yellow")}>
			</div>
			<div
				className={color === "green" ? "green on" : "green"}
				onClick={() => setColor("green")}>
			</div>
		</div> 
		<div className="text-center">
                <div className="ColorChange">
                    <button
                        type="button"
                        className="btn btn-primary text-center m-3"
                        onClick={() =>
                            setColor("red")
								? setColor("red")
								: color  === "red"
                                ? setColor("yellow")
                                : color === "yellow"
                                ? setColor("green")
								: color === "green"
                                ? setColor("red")
                                : hidden === "yes"
                        }>
                        <b>Color Change</b>                        
                    </button>
                </div>
			</div>  
		</div>     
	);
};

export default TrafficLight;