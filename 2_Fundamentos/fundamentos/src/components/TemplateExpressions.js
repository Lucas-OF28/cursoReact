const TemplateExpressions = () => {

    const name = 'Lucas'
    const date = {
        agr: 31,
        job: "Programmer",
    }
    return (
        <div>
            <h1> Olá {name}, tudo bem?</h1>
            <p>Voce atua como {date.job}</p>
            <p>{4 + 4}</p>
        </div>
    )
}
export default TemplateExpressions