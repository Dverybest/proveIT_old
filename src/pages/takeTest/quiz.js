import React, { useState, useEffect } from 'react';
import logo from '../../assets/intro.png';
import Navbar from '../nav/navbar';
import { quiz } from './quizData/quizData';
import styles from './quiz.module.css';


const Quiz = ({ test }) => {
    let rad={};
    const [input, setInput] = useState('');
    const [questionNumber, setquestionNumber] = useState(0);
    const [seletedAnswers, setSeletedAnswers] = useState([]);
    const [question, setQuestion] = useState([]);
    const [progressBarStyle, setProgressBarStyle] = useState(0);
    const [progressBarInterval, setProgressBarInterval] = useState(0);
    const [timer, setTimer] = useState(120);
    const [radButtons,setRadButtons]=useState({});
    useEffect(() => {

        rad = quiz[test.toLowerCase()].reduce((prevValue,currentValue,index)=>{
            return {...prevValue,[`option${index}`]:false};
        },{});
        console.log({rad});
        setRadButtons(rad);
        setQuestion(quiz[test.toLowerCase()]);
    }, []);

    const handleSelect = (e) => {
    
        setRadButtons({...rad,[e.target.id]:true})
        setInput(e.target.value);
    }


    const handleSubmit = (e) => {
        setSeletedAnswers([...seletedAnswers,input]);
        setInput("");
        questionNumber<question.length-1&&setquestionNumber(questionNumber+1);  
        questionNumber<question.length-1&&setProgressBarInterval(progressBarInterval+1);
        questionNumber<question.length-1&&setProgressBarStyle(progressBarStyle+10);
        setRadButtons(rad);
        // if(timer===120 ) {
        //     timer--
        //     console.log(timer)
        // }
        // e.preventDefault();

    }
    console.log({radButtons});
    return (
        <div className={styles.qDiv}>
            <p className={styles.brandLogo} style={{ color: 'black', textAlign: 'center' }}> &lt;PROVE/&gt;IT</p>
            <p>{`${test} Skills Assessment`}</p>
            {
               question.length!=0?
                    <div >
                        <h3 className={styles.cardHeader} >{question[questionNumber].question}</h3>
                        <div className="" style={{ textAlign: 'left' }} >
                            {
                                question[questionNumber].option.map((option, index) => {
                                    return (
                                        <div id={styles.background} className="form-check" key={`option${index}`}>
                                            <input checked={radButtons[`option${index}`]} className={styles.formCheckInput} id={`option${index}`} type="radio" 
                                            name="seletedOption" value={option} onChange={handleSelect} />
                                            <label className="form-check-label" htmlFor={`option${index}`}>{option}</label>
                                        </div>
                                    );
                                })

                            }

                        </div>

                        <h3 className={styles.cardHeader} ></h3>
                        {/* Progress bar  */}
                        <div id={styles.myProgress} >
                            <div id={styles.myBar} style={{width:`${progressBarStyle}%`}} ></div>
                        </div>
                        {/* progress bar counter */}
                        <p>{`${progressBarStyle}%`}</p>

                        <div className={styles.footer}>
                           <div style={{display:'flex'}}>
                                <h5>{progressBarInterval}/10</h5>
                                <h5>{timer}</h5>
                           </div>
                            <button href="#" onClick={handleSubmit} className={styles.button } style={{backgroundColor: input==""? "#808080" : "rgba(58,121,9,1)"}} disabled={input==""} >{question.length-1!=questionNumber?'Next':'Finish'}</button>
                        </div>

                    </div>
                :
                    <div>Loading...</div>
            }
        </div>

    )
}
export default Quiz;
