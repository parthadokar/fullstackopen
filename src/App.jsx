import { useState } from 'react'

const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text,value}) => {
  return (
    <p>{text} {value}</p>
  )
}
const Statistics  = ({good,neutral,bad}) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100
  if (total === 0) {
    return (
      <>
      <p>Statistics</p>
      <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <p>Statistics</p>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + ' %'} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodOne = () => setGood(good + 1)
  const neutralOne = () => setNeutral(neutral+1)
  const badOne = () => setBad(bad+1)
  return (
    <div>
      <Button onClick={goodOne} text={good}/>
      <Button onClick={neutralOne} text={neutral}/>
      <Button onClick={badOne} text={bad}/>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
      />
    </div>
  )
}

export default App