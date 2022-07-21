import React from "react";
import { useState } from 'react'

function Toggle() {
const [isOn, setIsOn] = useState(false)

const handleClick = () => {
  setIsOn((isOn) =>!isOn)
}

const color = isOn ? 'red' : 'white';

  return <button onClick={handleClick} style={{ background: color }}>{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
