import { useEffect } from "react";
import { useState } from "react"

const VotaCidades = () => {

    const [quixada, setQuixada] = useState(0);
    const [limoeiro, setLimoeiro] = useState(0);
    const [crateus, setCrateus] = useState(0);
    const [vencedor, setVencedor] = useState("Aguardando votos");
    

    useEffect(
        ()=>{
            if(quixada > limoeiro && quixada > crateus) setVencedor("Quixadá")
            else if(limoeiro > crateus && limoeiro > quixada) setVencedor("Limoeiro do Norte")
            else if(crateus > limoeiro && crateus > quixada) setVencedor("Crateús")
            else setVencedor("Aguardando votos")
        }
    )

    return (
        <div>
            <div>
                <h2>Quixadá: {quixada}</h2>
                <h2>Limoeiro do Norte: {limoeiro}</h2>
                <h2>Crateús: {crateus}</h2>
            </div>
            <div>

                <button onClick={() => setQuixada(quixada + 1)}>
                    Votar Quixadá
                </button>
                <button onClick={() => setLimoeiro(limoeiro +1)}>
                    Votar Limoeiro do Norte
                </button>
                <button onClick={() => setCrateus(crateus +1)}>
                    Votar Crateús
                </button>
            </div>
            <br/>

            
            <div>
                <h3>Vencedor: {vencedor}</h3>
            </div>
            <div>
                <button onClick={() => setQuixada(0)}>Limpar votos Quixada</button>
                <button onClick={() => setLimoeiro(0)}>Limpar votos Limoeiro</button>
                <button onClick={() => setCrateus(0)}>Limpar votos Crateus</button>
                
            </div>
        </div>

    )

}

export default VotaCidades