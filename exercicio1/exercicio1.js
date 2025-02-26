let av1 = 9.0;
let av2 = 7.0;
let recup1 = 7.0;
let recup2 = 3.0;
let media;
let soma;
let nota1;
let nota2;

if (recup1 > av1){
    nota1 = recup1;
} else{
    nota1 = av1;
}
if (recup2 > av2){
    nota2 = recup2;
} else {
    nota2 = av2;
}

soma = nota1 + nota2;
media = soma / 2;

if (media >= 6.0){
    console.log ("Aluno Passou!! Sua média é: " + media) ;
} else {
    console.log ("Aluno reprovado :( Sua média é: " + media);
}