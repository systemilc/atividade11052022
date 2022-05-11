class Pilha{
    lista = []

    empilha(){
        this.lista.push(elemento)
    }

    desempilha(){
        try{
            if(this.lista > 0){
                return this.lista.pop()
            }else{
                throw new error('Não da para desempilhar de uma lista vazia')
            }
            
        }catch(erro){
            console.log(erro)
        }
       
    }
}