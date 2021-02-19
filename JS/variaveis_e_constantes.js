// Existem três formas de determinar variáveis e constantes no Javascript!
// São: var, let e const.

// var -> É o padrão utilizado basicamente desde o início da linguagem, e é utilizado no escopo global do código. Ou seja, pode ser requisitado e se tornar funcional, a partir de qualquer local do código. Idenpendente se foi declarada no escopo de uma função ou não!

// let -> É o padrão utilizado desde o ECMAScript 2015 e é o mais recomenado a se utilizar, ao invés do var. Ele somente é utilizado no escopo onde é declarado. O que isto quer dizer ? Que a variável que foi declarada utilizando o let, somente poderá ser requisitada e acessada, dentro do escopo onde foi declarada. 
// Se o desenvolvedor declarou uma variável utilizando o let no escopo de uma função, fora desde escopo ela não poderá ser acessada e requisitada. Sendo assim, é mais "seguro" declarar uma variável utilizando o let, pois em um momento posterior do código, em outro escopo, caso algum desenvolvedor queira acessar aquela variável, isto não será permitido. 

// const -> A const, é um padrão de declaração de variável, onde deve-se declarar um valor que nunca irá se alterar. Como assim ? Deve-se utilizar o const, por exemplo, quando queira-se declarar uma variável, que não irá variar seu valor, que durante todo o código, todo o sistema, onde quer que ela seja utilizada, seu valor não será e não poderá ser alterado!