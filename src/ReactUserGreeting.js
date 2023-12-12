import React from 'react'

const ReactUserGreeting = ({name}) => {
  const hour = new Date().getHours()
  
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