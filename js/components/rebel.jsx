import React from 'react';
window.cancelBubble=true;
class Rebel extends React.Component{
  MouseOn = e =>{
    $(e.target).next().addClass('empireHoverOnRebel',500);
    $(e.target).addClass("rebelHoverOn",500);
    $(e.target).find('i').stop().animate({color:"blue"},500)
    e.stopPropagation()
  }
  MouseOut = e =>{
    $(e.target).next().removeClass('empireHoverOnRebel',500);
    $(e.target).removeClass("rebelHoverOn",500);
    $(e.target).find('i').stop().animate({color:"black"},500);
      e.stopPropagation()
  }
  render(){
    return  <div className="rebel" onMouseEnter={e=>this.MouseOn(e)} onMouseLeave={e=>this.MouseOut(e)}>
                <i className="fa fa-rebel"></i>
                <p>CHOOSE</p>
            </div>
  }
}

export default Rebel
