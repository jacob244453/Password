const characterAmountNumber = document.getElementById
  ('characterAmuountNumber')
const includeUppercaseElement = document.getElementById
  ('includeUppercase')
const includeNumbersElement = document.getElementById
  ('includeNumbers')
const includeSymbolsElement = document.getElementById
  ('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')

form.addEventListener('submit', e => {
e.preventDefault()
const characterAmountNumber = characterAmountNumber.value
const includeUppercase = includeUppercaseElement.checked
const includeNumbers = includeNumbersElement.checked
const includeSymbols = includeSymbolsElement.checked
const password = generatePassword(characterAmountNumber, includeUppercase, includeNumbers, includeSymbols )
})

function generatePassword(characterAmountNumber, includeUppercase, includeNumbers, includeSymbols){
  String.fromCharCode()
}