import React from "react";
export default class Square extends React.Component {


  

    render() {
      /** Cuando se llama a setState, se re-invoca al metodo render */
      return (
        <button className="square"   onClick={  ()=> this.setState(  this.props.onClick() )    }>   
          { this.props.value}
        </button>
      );
    }
  }