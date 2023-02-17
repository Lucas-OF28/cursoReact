const Events = () => {

  const handleMyEvent = (e) => {
    console.log("Ativou o evento")
  }


  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>
    } else {
      return <h1>Tambem pode ser isso</h1>
    }
  }
  return (
    <div>

      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>

      <div>
        <button onClick={() => console.log("Clicou")}>Clique aqui tbm</button>
        <button onClick={() => {
          if (true) {
            console.log("Isso nao deveria existir")
          }
        }}>Clique aqui 2</button>
      </div>

      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}
export default Events;