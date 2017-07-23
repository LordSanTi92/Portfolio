import React from 'react';
import EventListener, {withOptions} from 'react-event-listener';

class Rebel extends React.Component{
  componentDidMount() {

}
  MouseOn = e =>{
    e.stopPropagation();
    console.log(e.isPropagationStopped());
    $(e.target).next().stop().animate({height:"40vh"},500);
    $(e.target).stop().animate({height:"60vh"},500);
    $(e.target).find('i').stop().animate({color:"blue"},500)
  }
  MouseOut = e =>{
    e.stopPropagation();
    console.log(e.isPropagationStopped());
    $(e.target).next().stop().animate({height:"50vh"},500);
    $(e.target).stop().animate({height:"50vh"},500);
    $(e.target).find('i').stop().animate({color:"black"},500);

  }
  render(){
    return  <div className="rebel" onMouseEnter={this.MouseOn} onMouseLeave={this.MouseOut}>
                <i className="fa fa-rebel"/>
                <p>CHOOSE</p>
            </div>
  }
}

export default Rebel
