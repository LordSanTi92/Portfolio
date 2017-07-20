import React from 'react';
import ReactDOM from 'react-dom';
import Rebel from './rebel.jsx';
import Empire from './empire.jsx';

require('../../scss/style.scss');

$(()=>{

class App extends React.Component{
  render(){
    return <section id="entry">
            <Rebel />
            <Empire />
          </section>
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app")
)


})
