import React, { useState, useEffect } from 'react';
import logo from '../../assets/intro.png';
import Navbar from '../../pages/nav/navbar';
import { quiz } from './quiz';
import styles from './quiz.module.css';


const QuizModal = ({ test }) => {
    const [input, setInput] = useState('');
    const [questionNumber, setquestionNumber] = useState(0);
    const [seletedAnswers, setSeletedAnswers] = useState([]);
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        setQuestion(quiz[test.toLowerCase()]);
    }, []);
    // Array of questions starts


    // Array of questions ends

    const handleSelect = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        setSeletedAnswers([...seletedAnswers,input]);
        questionNumber<question.length-1&&setquestionNumber(questionNumber+1);  
    }
    console.log(question[questionNumber]);
    return (
        <div className={styles.qDiv}>
            <p className={styles.brandLogo} style={{ color: 'black', textAlign: 'center' }}> &lt;PROVE/&gt;IT</p>
            <p>{`${test} Skills Assessment`}</p>
            {
               question.length!=0?
                    <div >
                        <h3 className="card-header header">{question[questionNumber].question}</h3>
                        <div className="mt-3 p-4" style={{ textAlign: 'left' }} >
                            {
                                question[questionNumber].option.map((option, index) => {
                                    return (
                                        <div className="form-check" key={`option${index}`}>
                                            <input className="form-check-input" id={`option${index}`} type="radio" name="seletedOption" value={option} onChange={handleSelect} />
                                            <label className="form-check-label" htmlFor={`option${index}`}>{option}</label>
                                        </div>
                                    );
                                })

                            }

                        </div>

                        <button href="#" onClick={null} className="next mt-4">Prev</button> {''}
                        <button href="#" onClick={handleSubmit} className="next mt-4">{question.length-1!=questionNumber?'Next':'Finish'}</button>

                    </div>
                :
                <div>Loading...</div>
            }
        </div>

    )
}
export default QuizModal;
