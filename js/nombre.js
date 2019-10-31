console.log('hello')
let Nentr=prompt("Dévinez le nombre");
var Nrand= Math.floor((Math.random() * 20) + 1);
let nomb= Math.random();


      
    if(Nentr==Nrand){
        console.log("c'est gagné !")
        alert("c'est gagné !")
    }else if(Nentr>Nrand){
        console.log("Dommage mais vous pouvez retenter votre chance")
        alert("Dommage mais vous pouvez retenter votre chance")
    }else if (Nentr<Nrand){
        console.log('vous pouvez toujour tenter votre chance')
        alert("vous pouvez toujour tenter votre chance")
    }else{
        for (let i = 10; i <=0; i--) {
            prompt("Dévinez le nombre")
            
        }
    }


