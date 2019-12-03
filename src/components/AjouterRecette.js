import React, { Component } from 'react';

export class AjouterRecette extends Component {
    state = {nom : '',
image : '',
ingredients : '',
instructions : ''}


handleChange = (event)=>{
    const {name, value} = event.target
    console.log(name)
    this.setState({[name]: value})
}

handleSubmit=(event)=>{
    event.preventDefault();
    const recettes = {...this.state}
    this.props.ajouterRecette(recettes)


}

    render() {
        return (
            <div className="card">
                <form action="" className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
                    <input value={this.state.nom} onChange={this.handleChange}   type='text'name="nom"  placeholder="Nom de la recettte"/> 
                    <input value={this.state.image} onChange={this.handleChange} type='text' name="image" placeholder="image"/>
                    <textarea value={this.state.ingredients} onChange={this.handleChange} name ="ingredients" rows='3' placeholder = " liste des ingredients"></textarea>
                    <textarea  value={this.state.instructions} onChange={this.handleChange} name ="instructions" rows='15' placeholder = " liste des instructions"></textarea>
                <button type="submit">ajouter recette</button>
                </form>
            </div>
        );
    }
}

export default AjouterRecette;
