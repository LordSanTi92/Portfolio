import React from 'react';
import EventListener, {withOptions} from 'react-event-listener';
require('../../scss/components/empire.scss');

class Empire extends React.Component{



  render(){
    return  <div className="empire">
                <p>SIDE</p>
                <i className="fa fa-empire"/>
            </div>
  }
}

export default Empire
