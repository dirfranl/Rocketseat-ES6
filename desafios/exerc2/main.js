const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const idades = usuarios.map(item => item.idade);

 console.log(idades);
 
 const filter = usuarios.filter(item => item.idade >= 18 && item.empresa === 'Rocketseat');
 
 console.log(filter);
 
 const find = usuarios.find(item => item.empresa === 'Google');
 
 console.log(find);
 
//  const mult_idade = usuarios.filter(item => {
//    item.idade *= 2;
//    return item.idade < 50;
//   });
 
/**
 * Não precisa usar item, conforme exercício abaixo
 */
  const calculo = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50);
  
  console.log(calculo);