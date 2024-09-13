const hungerDIV=document.getElementById("statusHunger");
const energyDIV=document.getElementById("statusEnergy");
const happinessDIV=document.getElementById("statusHappiness");
const daysDIV=document.getElementById("dayCount");
const announcementDIV=document.getElementById("announcement");

var feedSound = document.getElementById('audioFeed');
var sleepSound = document.getElementById('audioSleep');
var showerSound = document.getElementById('audioShower');
var playSound = document.getElementById('audioPlay');
var deathSound = document.getElementById('audioDeath');

let timesFed;
let timesShowered;
let timesPlayed;
let timesSlept=1;

let hunger=20;
let energy=20;
let happiness=20;


function feedPet(){
    
    if(timesFed>=3){

        announcementDIV.innerHTML = `
        <li> ${"Your pet has already eaten enough food."} </li>
        `

    }else{
        
        
        timesFed++;
        hunger+=5;
        happiness+=3;
        if(hunger>20){
            hunger=20;
        }

        feedSound.play();

        updateStatus();
        
    }
    
}

function playWithPet(){
    
    if(timesPlayed>=3||energy<=2){

        announcementDIV.innerHTML = `
        <li> ${"Your pet is too tired to play."} </li>
        `

    }else{
        
        timesPlayed++;
        happiness+=3;
        energy-=2;
        hunger-=2;

        playSound.play();

        updateStatus();
        

    }
    
}

function showerPet(){
    
    if(timesShowered>=1){

        announcementDIV.innerHTML = `
        <li> ${"Your pet is already clean."} </li>
        `

    }else{
        
        timesShowered++;
        happiness-=5;
        energy-=5;

        showerSound.play();

        updateStatus();

    }
    
}

function sleepPet(){
    
    announcementDIV.innerHTML = `
        <li> ${"It's a new day!."} </li>
        `

    timesSlept++;
    
    timesFed=0;
    timesPlayed=0;
    timesShowered=0;
    
    energy=20;
    happiness+=3;
    hunger-=3;
   
    sleepSound.play();
    
    updateStatus();
    
}

function death(){

    announcementDIV.innerHTML = `
        <li> ${"Your pet died from hunger! :(."} </li>
        `

    timesSlept=0;
    timesFed=0;
    timesPlayed=0;
    timesShowered=0;
    
    energy=20;
    happiness=20;
    hunger=20;

    deathSound.play();

}

function updateStatus(){
    
    if(hunger<=0){
        death();
    }
    hungerDIV.innerHTML=hunger;
    if(energy<0){
        energy=0;
    }
    energyDIV.innerHTML=energy;
    if(happiness>100){
        happiness = 100;
    }else if(happiness<-100){
        happiness = -100;
    }
    happinessDIV.innerHTML=happiness;
    daysDIV.innerHTML=timesSlept;
         
} 

function decreaseStatus(){
    
    hunger-=2;
    happiness--;
    energy--;
    updateStatus();

}
updateStatus();
setInterval(decreaseStatus,10000);