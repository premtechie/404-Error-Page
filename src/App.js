import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './Component/Layout';

class App extends Component{
    render(){
      return (
        <div className="App">
          <p>404 NOT FOUND</p>
          <Layout />
          <h4 className='footer'>Premtechie@DevChallenges.io</h4>
        </div>
      );
    }
}

export default App;