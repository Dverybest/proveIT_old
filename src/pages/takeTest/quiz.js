import React, { useState, useEffect } from 'react';
import logo from '../../assets/intro.png';
import Navbar from '../nav/navbar';
import { quiz } from './quizData/quizData';
import styles from './quiz.module.css';


const Quiz = ({ test }) => {
    const [input, setInput] = useState('');
    const [questionNumber, setquestionNumber] = useState(0);
    const [seletedAnswers, setSeletedAnswers] = useState([]);
    const [question, setQuestion] = useState([]);
    const [progressBarStyle, setProgressBarStyle] = useState(1)
    const [progressBarInterval, setProgressBarInterval] = useState(1);
    const [timer, setTimer] = useState(2000)

    useEffect(() => {
        setQuestion(quiz[test.toLowerCase()]);
    }, []);


    const handleSelect = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        setSeletedAnswers([...seletedAnswers,input]);
        questionNumber<question.length-1&&setquestionNumber(questionNumber+1);  
        questionNumber<question.length-1&&setProgressBarInterval(progressBarInterval+1);
        setTimer(2000-1)
        if(progressBarStyle == 1) {
            setProgressBarStyle(progressBarStyle+1)

        }

    }
    console.log(question[questionNumber]);
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
                                            <input className={styles.formCheckInput} id={`option${index}`} type="radio" 
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
                            <div id={styles.myBar} ></div>
                        </div>

                        <div className={styles.footer}>
                            <h5>{progressBarInterval}/10</h5>
                            <h5>{timer}</h5>
                            <button href="#" onClick={handleSubmit} className={styles.button} >{question.length-1!=questionNumber?'Next':'Finish'}</button>
                        </div>

                    </div>
                :
                <div>Loading...</div>
            }
        </div>

    )
}
export default Quiz;
