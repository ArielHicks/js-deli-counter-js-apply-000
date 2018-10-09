function takeANumber(currentLineOfPeople, newPersonsName) {
  console.log(currentLineOfPeople)
  currentLineOfPeople.push(newPersonsName)
  return(`Welcome, ${newPersonsName}. You are number ${currentLineOfPeople.length} in line.`)
}

function nowServing(currentLineOfPeople) {
  const firstPerson = currentLineOfPeople[0]
  if(firstPerson !== undefined) {
    return firstPerson
  }
    return(`Currently serving ${newPersonsName}.`) 
}