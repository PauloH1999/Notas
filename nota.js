function somar(){



    let txtn1 = document.getElementById("txtn1")
    let txtn2 = document.getElementById("txtn2")
    let txtn3 = document.getElementById("txtn3")
    let txtn4 = document.getElementById("txtn4")
    
    let res = document.getElementById("res")
    
    let n1 = Number(txtn1.value)
    let n2 = Number(txtn2.value)
    let n3 = Number(txtn3.value)
    let n4 = Number(txtn4.value)
    let n = (n1 + n2 + n3 + n4)
    let m = n/ 4
    
        if ((n1 + n2 + n3 + n4) / 4 > 6){
    
            let item = document.createElement("option")
    
            item.text= `Sua nota:${n}. Parabéns sua média foi de ${m*10}%, você foi aprovado`
    
            res.appendChild(item)     
    
        } else {
    
            let item = document.createElement("option")
    
            item.text= `Sua nota:${n}. Infelizmente sua média foi de ${m*10}%, você não conseguiu o suficiente para se aprovado`
    
            res.appendChild(item)    
    
        }
    }