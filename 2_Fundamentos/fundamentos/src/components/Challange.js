const Challenge = () => {

    const x = 10
    const y = 5
    const sum = () =>{        
      const soma = x + y
      console.log({soma})
    }

    return (        
        <div>
            <p>O valor de x é {x}</p>
            <p>O valor de y é {y}</p>
            <button onClick = {sum} >Clique aqui para realizar a soma de X e Y</button>
        </div>
    )
}
export default Challenge;