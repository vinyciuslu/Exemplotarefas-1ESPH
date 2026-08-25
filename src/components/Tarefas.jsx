import {useState, useEffect} from 'react'

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

  return (
    <>
      
    </>
  )
}

export default Tarefas
