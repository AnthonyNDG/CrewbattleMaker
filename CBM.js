const plus1 = document.querySelector('.plus1');
const plus2 = document.querySelector('.plus2');
const minus1 = document.querySelector('.minus1');
const minus2 = document.querySelector('.minus2');
const roster1 = document.getElementById("Roster1");
const roster2 = document.getElementById("Roster2");
const CrewName1 = document.getElementById("CrewName1");
const CrewName2 = document.getElementById("CrewName2");
const person1 = document.querySelector('.Person1');
const person2 = document.querySelector('.Person2');
const stocks = document.getElementById("quantity");
const backgroundColor = document.getElementById("head");

//FOCUS ON EDITOR MODE WHEN YOU RETURN

const setup = document.querySelector(".setup");
const Crewbattle = document.querySelector(".Crewbattle");

const crew1 = document.querySelector(".Crew1");
const crew2 = document.querySelector(".Crew2");
const crewroster1 = document.getElementById("CrewRoster1");
const crewroster2 = document.getElementById("CrewRoster2");
const player1plus = document.querySelector('.Player1Plus');
const player1minus = document.querySelector('.Player1-');
const player2plus = document.querySelector('.Player2Plus');
const player2minus = document.querySelector('.Player2-');

const crew1plus = document.querySelector('.Crew1Plus');
const crew1minus = document.querySelector('.Crew1-');
const crew2plus = document.querySelector('.Crew2Plus');
const crew2minus = document.querySelector('.Crew2-');

const Player1Stocks = document.getElementById('Player1Stocks');
const Player2Stocks = document.getElementById('Player2Stocks');
const Crew1Stocks = document.getElementById('Crew1Stocks');
const Crew2Stocks = document.getElementById('Crew2Stocks');
const Player1 = document.getElementById('Player1');
const Player2 = document.getElementById('Player2');

const crewcheckbox = document.getElementById('crewcheckbox');

var error = false;

crewlist1 = [];
crewlist2 = [];

window.onload = function(){

  plus1.onclick = function add1(){
    console.log(person1.value);
    if (person1.value != "") {
      crewlist1.push(person1.value);
      roster1.innerHTML = "";
      for (var i = 0; i < crewlist1.length; i++) {
        roster1.innerHTML = roster1.innerHTML + crewlist1[i]+"<br>";
      }
    



    }
  }

  plus2.onclick = function add2(){
    console.log(person2.value);
    if (person2.value != "") {
      crewlist2.push(person2.value);

      roster2.innerHTML = "";
      for (var i = 0; i < crewlist2.length; i++) {
        roster2.innerHTML = roster2.innerHTML + crewlist2[i]+"<br>";
      }

    }
  }

  minus1.onclick = function remove1(){
    if (crewlist1.length==0) {return}
    for (var i = 0; i < crewlist1.length; i++) {
      if (crewlist1[i] == person1.value) {
        crewlist1.splice(i,1);
        
        roster1.innerHTML = "";
        for (var i = 0; i < crewlist1.length; i++) {
          roster1.innerHTML = roster1.innerHTML + crewlist1[i]+"<br>";
        }
        
        return;
      }
    }
  }

  minus2.onclick = function remove2(){
    if (crewlist2.length==0) {return}
    for (var i = 0; i < crewlist2.length; i++) {
      if (crewlist2[i] == person2.value) {
        crewlist2.splice(i,1);
        roster2.innerHTML = "";
        for (var i = 0; i < crewlist2.length; i++) {
          roster2.innerHTML = roster2.innerHTML + crewlist2[i]+"<br>";
        }
        return;
      }
    }
  }

  document.querySelector('.start').onclick = function start(){

    error = false;
    errorMessage = "Please fix the following: \n"
    if (crewlist1.length != crewlist2.length) {
      errorMessage = errorMessage + "-Both teams must have an equal number of participants! \n";
      error = true;
    }
    if (crewlist1.length == 0 || crewlist2.length == 0) {
      errorMessage = errorMessage + "-Teams should have at least one person \n";
      error = true;
    }
    if (CrewName1.value == "" || CrewName2.value == "") {
      errorMessage = errorMessage + "-Teams can't be a team without a name";
      error = true;
    }
    if (error) {
      alert(errorMessage);
      return;
    }
    
    document.body.style.background = backgroundColor.value;
    setup.style.display = "none";
    Crewbattle.style.opacity = "1";
    CrewStocks = stocks.value * crewlist1.length;
    crew1.innerHTML = CrewName1.value;
    crew2.innerHTML = CrewName2.value;

    Crew1Stocks.innerHTML = crewlist1.length*stocks.value;
    Crew2Stocks.innerHTML = crewlist2.length*stocks.value;

    
    for (var i = 0; i < crewlist1.length; i++) {
      crewroster1.innerHTML = crewroster1.innerHTML + "<input type='checkbox' class='crewcheckbox "+crewlist1[i]+"' name='"+crewlist1[i]+"' value='"+crewlist1[i]+"' onclick='strikethrough(`"+crewlist1[i]+"`, 1);'> <label class='"+crewlist1[i]+"text' for='"+crewlist1[i]+"'>"+crewlist1[i]+"</label><br>"

      //crewroster1.innerHTML = crewroster1.innerHTML + crewlist1[i]+"<br>";
    }
    for (var i = 0; i < crewlist2.length; i++) {
      crewroster2.innerHTML = crewroster2.innerHTML + "<input type='checkbox' class='crewcheckbox "+crewlist2[i]+"' name='"+crewlist2[i]+"' value='"+crewlist2[i]+"' onclick='strikethrough(`"+crewlist2[i]+"`, 2);'> <label class='"+crewlist2[i]+"text' for='"+crewlist2[i]+"'>"+crewlist2[i]+"</label><br>"

      //crewroster2.innerHTML = crewroster2.innerHTML + crewlist2[i]+"<br>";
    }
  }

  document.querySelector('.reset').onclick = function clear(){
    document.getElementById("CrewName1").value='';
    document.getElementById("CrewName2").value='';

    roster1.innerHTML = "";
    roster2.innerHTML = "";
    crewlist1 = [];
    crewlist2 = [];
  }



  //POST COMMENCING OF THE CREW BATTLE 

  player1plus.onclick = function addPlayerStock1(){
    Player1Stocks.innerHTML = parseInt(Player1Stocks.innerHTML) + 1;
  }
  player1minus.onclick = function removePlayerStock1(){
    if (Player1Stocks.innerHTML != 0) {
      Player1Stocks.innerHTML = parseInt(Player1Stocks.innerHTML) - 1;
    }
  }

  player2plus.onclick = function addPlayerStock2(){
    Player2Stocks.innerHTML = parseInt(Player2Stocks.innerHTML) + 1;
  }
  player2minus.onclick = function removePlayerStock2(){
    if (Player2Stocks.innerHTML != 0) {
      Player2Stocks.innerHTML = parseInt(Player2Stocks.innerHTML) - 1;
    }
  }

  crew1plus.onclick = function addCrewStock1(){
    Crew1Stocks.innerHTML = parseInt(Crew1Stocks.innerHTML) + 1;
  }
  crew1minus.onclick = function removeCrewStock1(){
    if (Crew1Stocks.innerHTML != 0) {
      Crew1Stocks.innerHTML = parseInt(Crew1Stocks.innerHTML) - 1;
      if (Crew1Stocks.innerHTML == 0) {
        console.log(crew2.innerHTML);
        window.alert(crew2.innerHTML+" has won the Crewbattle");
      }
    }
  }

  crew2plus.onclick = function addCrewStock2(){
    Crew2Stocks.innerHTML = parseInt(Crew2Stocks.innerHTML) + 1;
  }
  crew2minus.onclick = function removeCrewStock2(){
    if (Crew2Stocks.innerHTML != 0) {
      Crew2Stocks.innerHTML = parseInt(Crew2Stocks.innerHTML) - 1;
      if (Crew2Stocks.innerHTML == 0) {
        console.log(crew1.innerHTML);
        window.alert(crew1.innerHTML+" has won the Crewbattle");
      }
    }
  }

  

}

function strikethrough(label , x){
  console.log(label);
  console.log(document.querySelector('.'+label).checked);
  if (document.querySelector('.'+label).checked==true) {
    console.log("Amogons");
    if (x==1) {
      Player1.innerHTML = label;
    }
    else Player2.innerHTML = label;
    
    document.querySelector('.'+label+"text").style.textDecoration = 'line-through';
    return;
  }
  else{
    document.querySelector('.'+label+"text").style.textDecoration = 'none';
  }

}
