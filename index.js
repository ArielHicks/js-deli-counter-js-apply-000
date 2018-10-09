function takeANumber(currentLineOfPeople, newPersonsName) {
  console.log(currentLineOfPeople)
  currentLineOfPeople.push(newPersonsName)
  return(`Welcome, ${newPersonsName}. You are number ${currentLineOfPeople.length} in line.`)
}

function nowServing(currentLineOfPeople) {
  const firstPerson = currentLineOfPeople.shift()
  if(firstPerson !== undefined) {
    return(`Currently serving ${firstPerson}.`)
  }
  return "There is nobody waiting to be served!"
}