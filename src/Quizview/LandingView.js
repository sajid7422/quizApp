import React, { useEffect, useState } from "react";
import { QuizData } from "./QuizDummyData";

function LandingView() {
  const [queNo ,setQuesNo] = useState(1)
  const [score ,setscore] = useState(0);
  const [selectedAns, setSelectedAns] = useState("")
  const [correctAnswer,setCorrectanswer] = useState("")
 useEffect(()=>{

 },[score])

  const handleNext = () => {
    setQuesNo(queNo+1)
    if(correctAnswer == selectedAns) {
      setscore(score+1)
    }
    
  

  }
  const handleOption =(option,quiz) =>{
    setCorrectanswer(quiz.Answer)
    console.log("quiz",quiz)
    console.log("quiz.Answer",quiz.Answer)
    console.log("option",option)
    setSelectedAns(option)


  }
  console.log("score",score)
  return (
    <div style={{ padding: "20px 10px" }}>
      <center style={{ fontSize: "30px" }}>{`Question ${queNo}/${QuizData.length}`}</center>
      <section style={{ marginTop: "30px", padding: "0px 80px" }}>
        {QuizData.map((quiz, index) => {
          return (
          <div>
           { (index+1) == queNo &&
               <div key={index}>
               <div style={{ fontSize: "30px" }}>
               {quiz.Question}
               </div>
               <div
                 style={{
                   display: "grid",
                   gridTemplateColumns: "auto auto",
                   margin: "30px 0px",
                   gap: "50px",
                 }}
               >
                {
                 quiz.Options.map((option,index)=>{
                   return(
                     <div key={index}>
                     <button 
                     style={{
                      background: "pink",
                      padding: "5px 50px",
                      fontSize: "25px",
                      borderRadius: "30px",
                      border:"none",
                      cursor:"pointer"
                    }} > 
                    <span onClick={()=>{handleOption(option,quiz)}}>
                        {option}
                      </span> 
                      </button>
                   </div>
                   )
                 })
                }
             
               </div>
             </div>
           }
          </div>
          );
        })}
      </section>
      <div style={{ display: "flex", float: "right", padding: "20px 60px", cursor:"pointer" }}>
     {queNo < 10 ?
         <button
         style={{ background: "blue", color: "white", padding: "10px 40px", cursor:"pointer", fontSize:"20px" }}
       onClick={handleNext} >
         Next
       </button>
       :
       <button
       style={{ background: "blue", color: "white", padding: "10px 40px", cursor:"pointer", fontSize:"20px" }} >
        Summit

       </button>
       
     }
      </div>
    </div>
  );
}

export default LandingView;
