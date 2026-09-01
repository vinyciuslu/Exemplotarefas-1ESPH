import {useState, useEffect} from 'react'
import '../css/style.css'

const Tarefas = () => {
// Hook - usaState - Manipula o estado da variável
const [tarefas,setTarefas]=useState(()=>{
    const salvarTarefas = localStorage.getItem("item-tarefa");
    return salvarTarefas ? JSON.parse(salvarTarefas) : [];
});


const [campo,setCampo]=useState("");
// Hook - useEffect - Realiza o efeito colateralm nesse exemplo vai mostrar a tarefa adicionada em tempo real
useEffect(()=>{
    localStorage.setItem("item-tarefa", JSON.stringify(tarefas))
},[tarefas])


// FUNÇÃO ADICIONAR TAREFA 
const AdicionarTarefa = (e) => {
  e.preventDefault();     // preventDefault - previne que a pagina se recarregue automaticamente 
  if(!campo.trim()) return;     // validação de Campo se estiver vazio

  // novo objeto
  const novaTarefa = { 
    id: Date.now(),     // gera Id automático
    texto: campo,
  }
  setTarefas([...tarefas,novaTarefa]);      // "..." (spread) = Adiciona nova tarefa, mantendo as tarefas anteriores 
  setCampo('');     // Limpa o campo 
}

// FUNÇÃO REMOVER TAREFA 
const RemoverTarefa = (id) => {
  // VERIFICA SE O ID DA TAREFA ATUAL É DIFERENTE DO ID QUE DESEJA APAGAR, SE O ID FOR IGUAL(TAREFA QUE DESEJA APAGAR) A CONDIÇÃO RETORNA FALSO E O ITEM É EXCLUIDO
  const apagarTarefa = tarefas.filter((tarefa)=> tarefa.id !== id)     // filter = copia e organiza
  setTarefas(apagarTarefa);
}

  return (
    <div className='todo-container'> 
      <h1> Minha Lista de Tarefas</h1>
      <form onSubmit={AdicionarTarefa}> 
        <input
          type='text'
          value={campo}
          onChange={(e)=>setCampo(e.target.value)}
          placeholder='Digite sua Tarefa'
          className='todo-input'
        />
        <button type='submit'>Adicionar</button>
      </form>
      
      <ul>
        {tarefas.map((tarefa)=> (     //
          <li key={tarefa.id}>
            <span>{tarefa.texto}</span>
            <button onClick={()=>RemoverTarefa(tarefa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
        {tarefas.length === 0 && <p>Nenhuma Tarefa Salva</p>}
    </div>
  )
}

export default Tarefas