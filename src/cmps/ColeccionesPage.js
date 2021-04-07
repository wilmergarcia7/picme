import React from 'react';
import TopBar from '../cmps/TopBar';

import '../css/ColeccionesPage.scss';

class ColeccionesPage extends React.Component{

	constructor(){
		super();

		this.state = {
		}
	}

	render(){
		return (
			<div className="ColeccionesPage">
				<TopBar />
				ColeccionesPage
			</div>
		);
	}

}

export default ColeccionesPage;