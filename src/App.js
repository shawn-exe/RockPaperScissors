import React,{useState} from "react";
import Header from "./Header";
import Content from "./content";
import Restart from "./restart";
import Computer from "./computer";
import User from "./user";
import Result from "./result";
import Options from "./options";
import Score from "./score";
import Foot from "./footer";
import Paper from './paper.svg'
import Scissor from './scissors.svg'
import Question from './question-mark.svg'
import Stone from './stone.svg'

function App() {
  const [userEntry, setUserEntry] = useState(Question);
  const [computerEntry, setComputerEntry]= useState(Question);
  const [wins, setWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gresult,setGresult] = useState("choose your move!!");

  let cguess=()=>{
    let computerNumber=Math.floor(Math.random()*10);   
    let result;
    if(computerNumber >= 0 && computerNumber <=3)
    {
        result=Stone;
    }
    else if(computerNumber > 3 && computerNumber <=6)
    {
        result=Paper;
    }
    else if(computerNumber > 6 && computerNumber <= 10)
    {
        result=Scissor;
    }
    console.log(computerNumber);
    return result;   
  }
  const Cstone = () => {
    setUserEntry(Stone);
    let cc = cguess();
    setComputerEntry(cc);
    let gr = gameResult(Stone, cc);
    setGresult(gr);
    updateScore(gr);
  };

  const Cpaper = () => {
    setUserEntry(Paper);
    let cc = cguess();
    setComputerEntry(cc);
    let gr = gameResult(Paper, cc);
    setGresult(gr);
    updateScore(gr);
  };

  const Cscissor = () => {
    setUserEntry(Scissor);
    let cc = cguess();
    setComputerEntry(cc);
    let gr = gameResult(Scissor, cc);
    setGresult(gr);
    updateScore(gr);
  };

  const gameResult = (userChoice, computerChoice) => {
    if(userChoice===computerChoice){
            return "Draw!!";
        }
        else if (userChoice===Stone && computerChoice===Paper){
            return "Lost!!";
        }
        else if (userChoice===Stone && computerChoice===Scissor){
            return "Won!!";
        }
    
        else if (userChoice===Paper && computerChoice===Scissor){
            return "Lost!!";
        }
        else if (userChoice===Paper && computerChoice===Stone){
            return "Won!!";
        }
        else if (userChoice===Scissor && computerChoice===Stone){
            return "Lost!!";
        }
        else if (userChoice===Scissor && computerChoice===Paper){
            return "Won!!";
        }
  };
const updateScore=(gr)=>{
  if (gr==='Draw!!')
  {
    setDraws(draws+1);
  }
  else if (gr==='Won!!')
  {
    setWins(wins+1);
  }
  else if (gr==='Lost!!')
  {
    setLosses(losses+1);
  }
  localStorage.setItem('key1',wins);
  localStorage.setItem('key2',losses);
  localStorage.setItem('key3',draws);
}

const resetScore=()=>{
  setDraws(0);
  setWins(0);
  setLosses(0);
  setUserEntry(Question);
  setComputerEntry(Question);
  setGresult("choose your move!!")
  localStorage.removeItem('key1');
  localStorage.removeItem('key2');
  localStorage.removeItem('key3');
}
  return (
    <div className=" h-screen">
      <div className="w-full h-1/6 flex items-center justify-center mb-7">
        <Header />
      </div>
      <div className="flex flex-wrap w-fit mb-3">
          <div className="ml-6">
              <Content />
              <div className="w-[460px] flex justify-center items-center cursor-pointer ">
              <Restart u={resetScore} />
              </div>
          </div>  
        <div className="block ml-32 mt-2">
          <div className="flex justify-center"> 
              <div className="mr-10">
                <User u={userEntry} />
              </div>
              <div className="ml-10">
                <Computer c={computerEntry} />
              </div>
          </div>
          <div>
            <Result r={gresult} />
          </div>
           <Options Cstone={Cstone}
                    Cpaper={Cpaper}
                    Cscissor={Cscissor}              
                    />
           <Score w={wins} 
                  l={losses} 
                  d={draws} />
        </div>
      </div>
      <Foot />
    </div>
  );
}
export default App;
