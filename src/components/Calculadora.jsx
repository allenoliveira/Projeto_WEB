export function Calculadora({op, x, y}){

    function sum(){
      return x + y;
    }
  
    function sub(){
      return x - y;
    }
  
    if(op === 'SOMA') {
      return (
        <div>
          <strong>A soma é {sum()} </strong>
        </div>
      )
    }
  
    return (
      <div>
        A diferença é {sub()}
      </div>
    )
  }