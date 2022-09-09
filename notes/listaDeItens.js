let choice = 0
let position = 0
let list = []
while(choice != 3){
  choice = prompt(`Olá usuário! Digite a opção desejada:
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa`)
  choice = Number(choice)
  switch(choice){
    case 1:
      let itemList = prompt('Digite o item da sua lista')
      list.push(itemList)
    break;
    case 2:
      if(list.length > 0){
      alert(`Estes são os itens em sua lista: ${list}`)
      } else {
        alert('Não existem itens cadastrados')
      }
    break;
    case 3:
      alert('Tchau')
    break;
    default:  
    alert('Opção inválida. Verifique o Menu de opções')
  }
}