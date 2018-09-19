import React from "react";
import Square from "./square";


export default class Board extends React.Component{


  constructor( props){
    super( props);
    //Se inicializan las celdas
    this.state= { 
       squares: Array(9).fill( null)  ,
      xIsNext: true } ;
    


  }

  handleClick(i){

     if( this.calculateWinner( this.state.squares)  ||  this.state.squares[i]){  return;  }
      const cuadrados= this.state.squares.slice();//copia el array squares
      cuadrados[i]=  this.state.xIsNext ? 'X' : 'O';
      //CAMBIAR ESTADO PARA EL SGTE TURNO
      this.setState( {squares: cuadrados,  xIsNext: !this.state.xIsNext});
    
   
  }


    renderSquare(  i  ){
        return <Square value={   this.state.squares[i]  }  onClick={ ()=> this.handleClick(i) } />;
    }

 

    

    calculateWinner(squares) {
         //posiciones de ganador
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  

      //recorrer posiciones y comparar
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; //retornar el ganador x , o
    }
  }
  return null;
}


    render() {
      const winner= this.calculateWinner(this.state.squares);
      let status ;
      if( winner)
      status= "Winner "+winner;
      else{
        status= 'Next player: '+ (this.state.xIsNext ? 'X' :'O' );
      }
        
    
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }
}