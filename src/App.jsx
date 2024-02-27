import { useMemo, useState } from 'react'
import Slider from './assets/Slider'

import './App.css'

function App() {
  const [height, setHeight] = useState(130)
  const [weight, setWeight] = useState(30)
  const [BMI, setBMI] = useState(0)
  function handleHeight(height) {
    setHeight(height)
  }
  function handleWeight(weight) {
    setWeight(weight)
  }
  const calculateBMI = useMemo(() => {
    const answer = weight / (height * 0.01 * (height * 0.01))
    setBMI(answer.toFixed(2))
  }, [weight, height])

  return (
    <>
      <h1>BMI Calculator</h1>
      <Slider
        category={'Weight (in Kg)'}
        min={30}
        max={200}
        handleChange={handleWeight}
        value={weight}
      />
      <Slider
        category={'Height (in cm)'}
        min={130}
        max={260}
        handleChange={handleHeight}
        value={height}
      />
      <button onClick={calculateBMI}>Calculate</button>
      <h3>BMI : {BMI}</h3>
    </>
  )
}

export default App
