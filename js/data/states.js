async function getUSStates() {
  const respones = await fetch('/api/states')
  const states = await respones.json()
  console.log('states', states)
  return states
  // setUSStates(states)
}

// function setUSStates(states) {
//   return states
//   states.forEach((state) => {
//     console.log('state', state)
//     // const optionElement = document.createElement('option')
//     // optionElement.setAttribute('value', state.name)
//     // optionElement.textContent = state.name
//     // statesElement.appendChild(optionElement)

//     // optionElement.addEventListener('click', () => {
//     //   console.log('state', state.name)
//     //   infoElement.innerHTML = `<pre>${JSON.stringify(state, null, 2)}</pre>`
//     // })
//   })
// }

getUSStates()
