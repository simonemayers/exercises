import { useState } from "react"

function StatisticsLine({text, value}){
  return(
    <>
    <td>{text}</td>
    <td>{value}</td>
    </>
  )
}

function Statistics({good, neutral, bad}) {
  if(good + neutral + bad === 0) {
    return(
      <div>No feedback given</div>
    )
  } else{

    return(
      <table>
        <tr>
        <StatisticsLine text="good" value={good}/>
        </tr>
        <tr>
        <StatisticsLine text="neutral" value={neutral}/>
        </tr>
        <tr>
        <StatisticsLine text="bad" value={bad}/>
        </tr>
        <tr>
        <StatisticsLine text="all" value={good + neutral + bad}/>
        </tr>
        <tr>
        <StatisticsLine text="average" value={(good - bad)/(good+bad+neutral)}/>
        </tr>
        <tr>
        <StatisticsLine text="positive" value={`${(good / (good+bad+neutral)) * 100}%`}/>
        </tr>
      </table>
    )
  }
}

function Buttons({good, setGood, neutral, setNeutral, bad, setBad}){
  return(
    <div>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className="App">
      <h1>give feedback</h1>
      <Buttons good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  );
}

export default App;
