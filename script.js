const booleano1 = true 
const booleano2 = false
const booleano3 = true 
//if(condição){
    if(booleano1){
        alert("booleano1 é true")

    } else {
        alert("booleano1 é false")
    }

// if/else if 
if (booleano1 === booleano2){
    alert("booleano1 é IGUAL a booleano2")
} else if (booleano2 === booleano3){
    alert("booleano2 é IGUAL a booleano3")
      }  else if (booleano1 === booleano3){
      alert ("booleano1 é IGUAL a booleano3")
      } else {
        alert("nenhum valor é igual a outro")
      }
     
      let idade = 79 
      let autorizacao = true

    //   if (idade >=18){
    //     alert("Pode votar")
    //   } else {
    //     if(idade === 16 || idade === 17 && autorizacao === true){
    //         alert("pode votar com a autorização dos pais")
    //     } else {
        
    //     alert("Não pode votar")
    //     }
    //   }
    
    if(idade >= 18 && idade <70){
        alert("pode votar")
    } else if (idade === 16 || idade === 17){
        alert("Pode votar com a autorização dos pais ")
    } else if (idade >= 70){
        alert("Pode votar, mas não é obrigatório")
    } else {
        alert("Não pode votar")
    }



const media =11

if(media >=5 && media <= 10){
    alert("Aprovado")
}else if(media >=3 && media <= 10){
 alert("Recuperação")
} else if(media <3 && media > 0){ 
    alert("Reprovado")
} else{
    alert("Dado invalido")
}