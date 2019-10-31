alert('bienvenue au jeu Fizz Buzz');
document.write('Voici le jeu Fizz Buzz' +"<br/> <br/>");


for(i=1; i<=100; i++){
    if ((i%5===0) && (i%3===0)) {
       console.log('FizzBuzz')
       document.write('FizzBuzz' +"<br/><br/>")
    }else if (i%5===0){
       console.log('Buzz')
       document.write('Buzz' +"<br/><br/>")
    }else if (i%3===0)   {
        console.log('Fizz')
        document.write('Fizz'+"<br/><br/>")
    }else {
        console.log(i)
        document.write(i+"<br/><br/>")
    }

     
}