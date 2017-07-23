import React from 'react';
import EventListener, {withOptions} from 'react-event-listener';
require('../../scss/components/rebel.scss');

class Rebel extends React.Component{
  componentDidMount() {

}
  MouseOn = e =>{
    e.stopPropagation();

    if($(window).outerWidth()>499){
      $(e.target).next().stop().animate({width:"40vw"},500);
      $(e.target).stop().animate({width:"60vw"},500);
      $(e.target).find('i').stop().animate({color:"blue"},500)
    }
    else{
    $(e.target).next().stop().animate({height:"40vh"},500);
    $(e.target).stop().animate({height:"60vh"},500);
    $(e.target).find('i').stop().animate({color:"blue"},500)
    }

  }
  MouseOut = e =>{
    e.stopPropagation();

    if($(window).outerWidth()>499){
      $(e.target).next().stop().animate({width:"50vw"},500);
      $(e.target).stop().animate({width:"50vw"},500);
      $(e.target).find('i').stop().animate({color:"black"},500);
    }
    else{
    $(e.target).next().stop().animate({height:"50vh"},500);
    $(e.target).stop().animate({height:"50vh"},500);
    $(e.target).find('i').stop().animate({color:"black"},500);
    }

  }
  render(){
    return  <div className="rebel" onMouseEnter={this.MouseOn} onMouseLeave={this.MouseOut}>
                <i className="fa fa-rebel"/>
                <p>CHOOSE</p>
            </div>
  }
}

export default Rebel
