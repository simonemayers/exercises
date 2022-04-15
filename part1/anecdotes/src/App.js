import { useState } from "react"

function Anecdote({anecdotes, votes, selected}){
  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
    </>
  )
}

function Buttons({anecdotes, changeVotes, setSelected}) {
  return(
    <>
      <button onClick={changeVotes}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
    </>
  )
}

function HighestAnecdote({anecdotes, changeMostVotes, votes}){
  return(
    <>
      <div>{anecdotes[changeMostVotes()]}</div>
      <div>has {votes[changeMostVotes()]} votes</div>
    </>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))


  function changeVotes(){
    let votesCopy = [...votes]
    votesCopy[selected] +=1
    setVotes(votesCopy)
  }

  let changeMostVotes = () => {
    // if(!votes.reduce((a, b) => a+b)){
      let sortedVotes = [...votes]
      sortedVotes.sort((a, b) => b-a)
      votes.find(v => v === sortedVotes[0])
      let index = votes.indexOf(sortedVotes[[0]])
      return index
    // }
  }


  if(!votes.reduce((a, b) => a+b)){
    console.log("no votes")
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote anecdotes={anecdotes} votes={votes} selected={selected}/>
  
        <Buttons changeVotes={changeVotes} anecdotes={anecdotes} setSelected={setSelected}/>

        <h2>Anecdote with the most votes</h2>
        <p>No votes yet</p>
      </div>
    );
  } else{
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote anecdotes={anecdotes} votes={votes} selected={selected}/>
  
        <Buttons changeVotes={changeVotes} anecdotes={anecdotes} setSelected={setSelected}/>
        <h2>Anecdote with the most votes</h2>
        
  
        <HighestAnecdote anecdotes={anecdotes} changeMostVotes={changeMostVotes} votes={votes}/>
  
      </div>
    );
  }
}

export default App;
