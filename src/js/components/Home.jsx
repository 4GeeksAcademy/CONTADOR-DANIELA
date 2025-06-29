import React from "react";

/* CADA KARDASHIAN ES UN DIGITO DE MI CONTADOR */
export const Home = ({Kendall, Kylie, Kim, Klhoe, Kourtney, Kriss }) => {
	
	return (
		<div className="container mt-5">
			<h1 className="d-flex justify-content-center">
				Contador de Daniela Padilla THE BEST
			</h1>
		
		<div className="container mt-5">
			<div className=	"bg-fucsia d-flex justify-content-p-3 border rounded-pill">
				
				<div class Name="clock d-flex align-items-center">
					<i className="far fa-clock text-white fs-1 px-4 mx-2 ">
						</i>
					</div>
		             <div className="Kendall text-white fs-1 border border-white rounded px-4 mx-2">{Kendall % 10}</div>	
					 <div className="Kylie text-white fs-1 border border-white rounded px-4 mx-2">{Kylie % 10}</div>
					 <div className="Kim text-white fs-1 border border-white rounded px-4 mx-2">{Kim % 10}</div>
					 <div className="Klhoe text-white fs-1 border border-white rounded px-4 mx-2">{Klhoe % 10}</div>
					 <div className="Kourtney text-white fs-1 border border-white rounded px-4 mx-2">{Kourtney % 10}</div>
					 <div className="Kriss text-white fs-1 border border-white rounded px-4 mx-2">{Kriss % 10}</div>
		
				</div></div>
				<img src="https://barbiepedia.com/img/barbie/800/67385_91_0.jpg" />	</div>
	);
}
