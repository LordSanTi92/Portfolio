import React from 'react';
import EventListener, {withOptions} from 'react-event-listener';
require('../../scss/components/rebel.scss');

class Rebel extends React.Component{

  render(){
    return  <div className="rebel">
                <i className="fa fa-rebel"/>
                <p>CHOOSE</p>
            </div>
  }
}

export default Rebel
