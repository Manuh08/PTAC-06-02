import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState();
    const [listaContatos, setContatos] = useState( [ ] );
    const [idade, setIdade] = useState ();

    const registrar = (event) => {
        event.preventDefault(); {/*previne o envio do formulario*/}
        alert("Deu certo!");
        setContatos([...listaContatos,
             {
                nomeSalvo: nome,
                telefoneSalvo: telefone,
                idadeSalvo: idade
             }
            ]);

    }
 console.table(listaContatos);

    return(
        <main>
        <form onSubmit={registrar}>
            <label htmlFor="nome">Nome : </label>
            <input type="text" name="" id="" onChange={(event)=> setNome(event.target.value)}/>
            {nome}
            <br></br>
            <br></br>

            <label htmlFor="telefone">Telefone : </label>
            <input type="tel" id="telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)}/>
            {telefone}
            <br></br>
            <br></br>

            <label htmlFor="idade">Idade : </label>
            <input type="number" id="idade" value={idade} onChange={(event) => setIdade(event.target.value)}/>
            {idade}
            <br></br>
            <br></br>


                <button type="submit">Salvar</button>


        </form>
        {  listaContatos.map((contato, index)=>
        <div key={index}>
        <p >{contato.nomeSalvo}</p>   
        <p>{contato.telefoneSalvo}</p>
        </div>
        )}
        </main>
    );
    }