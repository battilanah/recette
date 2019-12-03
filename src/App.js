import React, { Component } from 'react'
// CSS
import './App.css'
import recettes from './recettes'
import Header from './components/Header'
import Admin from './admin'
import Card from './components/Card'
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes : {}
  }

  componentDidMount(){
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
      context : this,
      state : 'recettes'
    })
  }


  componentWillUnmount(){
    base.removeBinding(this.ref)
  }
  chargerExample = () =>{
    this.setState({ recettes  })
  }


  ajouterRecette = recette =>{
const recettes = {...this.state.recettes}
recettes[`recette-${Date.now()}`] = recette
this.setState({recettes})

  }
  

  render () {

    const cards = Object.keys(this.state.recettes).map(key => (

      <Card key={key} details={this.state.recettes[key]}/>
    ))
    return (
      <div className='box'>
        <Header pseudo = {this.state.pseudo}/>
        <h1>Bonjour {this.state.pseudo}</h1>
        <div className='cards'>
        {cards}
          </div>
      
        <Admin 
        ajouterRecette={this.ajouterRecette}
        chargerExample={this.chargerExample} />
      </div>
    )
  }
}

export default App
