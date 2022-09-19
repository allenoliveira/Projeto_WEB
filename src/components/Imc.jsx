const NUMBER_OF_DECIMALS = 1;

export function Imc({ peso, altura }){
  
  function calcImc(){
    return peso / (altura * altura).toFixed(NUMBER_OF_DECIMALS);
  }

  function GenerateHtmlImc(){
    if(calcImc() < 17){
      return <h3>Muito abaixo do peso</h3>
      
    }else if(calcImc() >= 17 && calcImc() < 18.5){
      return <h2>Abaixo do peso</h2>
    } else if(calcImc() >= 18.5 && calcImc() <= 24.9){
      return <h2>Peso normal</h2> 
    }else if(calcImc() >= 25 && calcImc() <= 29.9){
      return <h2>Acima do peso</h2>
    }else if(calcImc() >= 30 && calcImc() <= 34.9){
      return <h2>Obesidade I</h2>
    }else if(calcImc() >= 35 && calcImc() <= 39.9){
      return <h2>Obesidade II (Severa)</h2>
    }else {
      return <h2>Obesidade III (Mórbida)</h2>
    }
  }

  return (
    <div>
      <h2>Seu IMC é {calcImc().toFixed(NUMBER_OF_DECIMALS)}</h2>
      <GenerateHtmlImc />
    </div>
  )
}
