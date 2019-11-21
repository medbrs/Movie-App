import React from 'react';
import './App.css';
import Input from './Input'
import MovieList from './MovieList'
import Rating from './Rating'

const movies = [{
  image : 'https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg',
  title : 'Mr Robot',
  year : '2015',
  rating : 5
},
{
image : 'https://m.media-amazon.com/images/M/MV5BNDg4NjU3MTYzNl5BMl5BanBnXkFtZTgwNzE2MDU2MjE@._V1_.jpg',
title : 'Who im i ',
year :  '2014',
rating : 4
},
{
image : 'http://fr.web.img5.acsta.net/c_215_290/pictures/19/06/13/16/39/3685647.jpg',
title : 'Fast & Furious',
year : '2013',
rating : 2
},
]

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Listmovies : movies,
      newRating: 1,
      input : '',
      loading : true
    }
    setTimeout(()=>{
      this.setState({
        loading : false
      })
    }, 5000)
  }
  add = () =>{
      let name = prompt('Enter your movie name')
      let star = prompt('Enter your movie rating')
      let image = prompt('Enter your movie image')
      let year = prompt('Enter your movie year')
      this.setState({
        Listmovies : this.state.Listmovies.concat({title:name,image:image,year:year,rating:star})
      })
  }

 

  render(){
    return (
      <div className='App'>
        <Input handleChange={text => this.setState({input: text})} item={movies} />
        <Rating rating={this.state.newRating} setRate={x => this.setState({newRating: x})}/>
        <MovieList isLoading={this.state.loading} movies={this.state.Listmovies.filter(movie => movie.rating >= this.state.newRating && movie.title.toLowerCase().includes(this.state.input.toLowerCase().trim()))} />
        <button onClick={this.add}>+</button>
      </div>
  );
}

  }
  
export default App;
