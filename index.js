function takeANumber(currentLineOfPeople, newPersonsName) {
  console.log(currentLineOfPeople)
  currentLineOfPeople.push(newPersonsName)
  return(`Welcome, ${newPersonsName}. You are number ${currentLineOfPeople.length} in line.`)
}

function nowServing(currentLineOfPeople) {
    return(`Currently serving ${newPersonsName}.`) 
}