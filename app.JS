class Fundo {
    constructor(){
        this.id = 1
       this.arreyFundos = []
    }

    salvar(){
        let dados = this.lerDados()
       
        if(this.validarDados(dados)){
        this.adicionar(dados)
       }

       this.listaTabela()

       console.log(this.arreyFundos.length,)

       this.apagar()
    }

    lerDados(){
        let dados = {
            id: this.id,
            tipo: document.getElementById('tipo').value,
            dia: document.getElementById('dia').value,
            mes: document.getElementById('mes').value,
            ano: document.getElementById('ano').value,
            valor: document.getElementById('valor').value,
        }

        return dados

    }
    listaTabela(){
        let tbody = document.getElementById('tbody')
        let res = document.getElementById('res')
        tbody.innerText = ''
        let soma = 0

        for(let i = 0 ; i < this.arreyFundos.length ; i++){

           let tr = tbody.insertRow()
           
           let td_id = tr.insertCell()
           let td_data = tr.insertCell()
           let td_tipo = tr.insertCell()
           let td_valor = tr.insertCell()

           
           td_id.innerText = this.arreyFundos[i].id

           td_tipo.innerText = this.arreyFundos[i].tipo
           td_data.innerText = this.arreyFundos[i].dia
           td_data.innerText += ` /${this.arreyFundos[i].mes}`
           td_data.innerText += ` /${this.arreyFundos[i].ano}`
           td_valor.innerText = `${this.arreyFundos[i].valor},00` 
           td_id.classList.add('center')
           td_data.classList.add('center')
           td_tipo.classList.add('center')
           td_tipo.classList.add('tipo')
           td_valor.classList.add('center')
           td_valor.classList.add('saldo')
           res.classList.add('pad')
           res.classList.add('total')
        
           soma += parseFloat(this.arreyFundos[i].valor)
           res.innerHTML = `TOTAL DEPOSITADO : R$${soma},00`

        }

           
    }
    adicionar(dados){
        this.arreyFundos.push(dados)
        this.id++
    }
    validarDados(dados){
       let msg = ''
        if(dados.tipo == ''){
            msg += 'Descrição não foi escrita \n'
        }
        if(dados.dia == ''){
            msg += 'Data Não foi escrita \n'
        }
        if(dados.valor == ''){
            msg += 'Valor não foi escrito \n'
        }
        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    }


    apagar(){
        document.getElementById('dia').value =''
        document.getElementById('mes').value =''
        document.getElementById('ano').value =''
        document.getElementById('tipo').value =''
        document.getElementById('valor').value =''
    }
}

let fundo = new Fundo()