import React from 'react'

const ReactUserGreeting = ({name}) => {
  const date = new Date().toLocaleTimeString()
  const hour = date.split(":")[0]
  let greeting = ""
  
  switch (true) {
    case hour < 12:
      greeting = "Bonjour"
      break;
    case hour < 18:
      greeting = "Bon après-midi"
      break;
    default:
      greeting = "Bonsoir"
      break;
  }
  return (
    <div>
      {greeting}, {name} !
    </div>
  )
}

export default ReactUserGreeting