import React, { useState, useEffect, useRef } from 'react';
import { quiz } from './quizData/quizData';
import styles from './quiz.module.css';
import { useHistory } from 'react-router-dom'

let score; 
let countDown; 
let interval;
const Quiz = ({test}) => {
    
    let history = useHistory();
    const [input, setInput] = useState('');
    const [questionNumber, setquestionNumber] = useState(0);
    const [disable, setDisable] = useState(false);
    const [question, setQuestion] = useState([]);
    let [timer, setTimer] = useState(0);
    const radioButtons = useRef([]);

    useEffect(() => {
        setQuestion(quiz[test.toLowerCase()]);
        score =0;
        countDown = 0;
        countDownTimer();
    }, []);

    const countDownTimer = () => {
        countDown = 60;
        let calculate = ()=>{
            let m = Math.floor(countDown / 60)
            let s = countDown % 60;
            m = m < 10 ? `0${m}` : m;
            s = s < 10 ? `0${s}` : s;
            setTimer(`${m}:${s}`)
            countDown = countDown - 1;
        }
        calculate();
        interval = setInterval(() => {
            calculate();
            if (countDown === 0) {
                clearInterval(interval)
                setDisable(true);
            };
        }, 1000)
    }

    const handleSubmit = (e) => {
        clearInterval(interval)
        if (input === question[questionNumber].answer) {
            ++score
        }
        if (question.length - 1 === questionNumber) {
            history.push({
                pathname: `/take-test/test-result`,
                state: { score: Math.floor((score / (question.length)) * 100) }
            });
            return;
        }
        setInput("");
        radioButtons.current.forEach((radioButton, index) => radioButton.checked = false);
        countDownTimer();
        setquestionNumber(questionNumber + 1)
        setDisable(false)

    }
    return (
        <div className={styles.qDiv}>
            <p className={styles.brandLogo} style={{ color: 'black', textAlign: 'center' }}> &lt;PROVE/&gt;IT</p>
            <p>{`${test} Skills Assessment`}</p>
            {
                question.length !== 0 ?
                    <div >
                        <h3 className={styles.cardHeader} >{question[questionNumber].question}</h3>
                        <div className="" style={disable ? { textAlign: 'left', pointerEvents: 'none', opacity: 0.4 } : { textAlign: 'left' }}>
                            {
                                question[questionNumber].option.map((option, index) => {
                                    return (
                                        <div id={styles.background} className="form-check" key={`option${index}`}>
                                            <input className={styles.formCheckInput} id={`option${index}`} type="radio" ref={element => radioButtons.current[index] = element}
                                                name="seletedOption" value={option} onChange={element => setInput(element.target.value)} />
                                            <label className="form-check-label" htmlFor={`option${index}`}>{option}</label>
                                        </div>
                                    );
                                })

                            }

                        </div>

                        <h3 className={styles.cardHeader} ></h3>
                        {/* Progress bar  */}
                        <div id={styles.myProgress} >
                            <div id={styles.myBar} style={{ width:`${Math.floor(((questionNumber + 1) / question.length) * 100)}%`}} ></div>
                        </div>
                        <div className={styles.footer}>
                            <div style={{ display: 'flex' }}>
                                <h5>{questionNumber + 1}/{question.length}</h5>
                                <h5>{timer}</h5>
                            </div>
                            <button href="#" onClick={handleSubmit} className={styles.button} style={{ backgroundColor: input === "" && !disable ? "#808080" : "rgba(58,121,9,1)" }} disabled={input === "" && !disable} >{question.length - 1 !== questionNumber ? 'Next' : 'Finish'}</button>
                        </div>

                    </div>
                    :
                    <div>Loading...</div>
            }
        </div>

    )
}
export default Quiz;
