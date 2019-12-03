import React, { Component } from 'react';
import AjouterRecette from "./components/AjouterRecette"

export class Admin extends Component {
    
componentDidMount(){
    console.log(this.props)
}

    render() {
        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={this.props.ajouterRecette}></AjouterRecette>
                  <footer>
               <button onClick = {this.props.chargerExample}>Remplir</button>
           </footer>
            </div>
         
        );
    }
}

export default Admin;
