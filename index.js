// Code your solutions in this file
function writeCards(people,event){
    const watu =[];
    for(let i=0; i<people.length; i++){
        watu.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }
    return watu
}

function countDown (num){

    while(num >= 0 ){
        console.log (num);
       num--;
    }
}