import React from 'react';
import EventListener, {withOptions} from 'react-event-listener';

class Empire extends React.Component{
  componentDidMount() {

}
  MouseOn = e =>{
    e.stopPropagation();
    $(e.target).prev().stop().animate({height:"40vh"},500);;
    $(e.target).stop().animate({height:"60vh"},500);
    $(e.target).find('i').stop().animate({color:"red"},500);
  }
  MouseOut = e =>{
    e.stopPropagation();
    $(e.target).find('i').stop().animate({color:"white"},500);
    $(e.target).prev().stop().animate({height:"50vh"},500);
    $(e.target).stop().animate({height:"50vh"},500);
  }
  render(){
    return  <div className="empire" onMouseEnter={this.MouseOn} onMouseLeave={this.MouseOut}>
                <p>SIDE</p>
                <i className="fa fa-empire"/>
            </div>
  }
}

export default Empire
