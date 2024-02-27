import React from 'react'

function Slider({ category, min, max, handleChange, value }) {
  return (
    <div className="rangeSlider">
      <h3>{category}</h3>
      <input
        type="range"
        name="slider"
        min={min}
        max={max}
        value={value}
        onChange={(event) => handleChange(parseInt(event.target.value))}
      />
      <p>{value}</p>
    </div>
  )
}

export default Slider
