import React, {Component} from 'react';
import Posts from './Pages/Posts'
import Header from './components/Header'
import './App.css';


export default class App extends Component {
  render() {
    return (
        <div>
            <Header title={"Header"}/>
            <Posts />
            <Header title={"Footer"}/>
        </div>
    )
  }
}

