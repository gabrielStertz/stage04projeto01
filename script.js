const patients = [
  {
    name: 'Gabriel',
    age: 40,
    weight: 100,
    height: 1.80
  },
  {
    name: 'Maria',
    age: 64,
    weight: 74,
    height: 1.63
  },
  {
    name: 'Lilian',
    age: 43,
    weight: 64,
    height: 1.76
  }
]
function imc(weight, height){
  let value = weight / (height * height)
  return value.toFixed(2)
}
function printImc(patient){
  let result = `O IMC do paciente ${patient.name}, é ${imc(patient.weight, patient.height)}
  
  IMC: Classificação
  Entre 25,0 e 29,9: Sobrepeso
  Entre 18,5 e 24,9: Normal
  Menor que 18,5: Magreza`
  
  return result

}
for(let patient of patients){
  let patientImc = printImc(patient)
  alert(patientImc)
}
