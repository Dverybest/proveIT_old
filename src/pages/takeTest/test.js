import React, { useState } from 'react';
import Navbar from '../nav/navbar';
import styles from './test.module.css';
import Quiz from './quiz';

const Test = (props) => {
    const [quiz, setQuiz] = useState(false)

    // handle Submit 
    const handleSubmitStart = () => {
        // props.history.push({
        //     pathname: `/quiz/:${data.test}`,
        //     state: data
        // })
        setQuiz(true)
    }






    if (!props.location.state) {
        props.history.push('/');
        return <></>
    }
    let { name, test, level } = props.location.state;

    return (
        <div className={styles.test}>
            <Navbar backgroundColor={'rgba(58,121,9,1)'} style={{ paddingTop: 10, paddingBottom: 10, }} />

            <div className={styles.contain}>
                { quiz ?

                    <Quiz test={test} />
                    :
                    <div className={styles.qDiv}>
                        <p className={styles.brandLogo} style={{ color: 'black', textAlign: 'center' }}> &lt;PROVE/&gt;IT</p>
                        <p>{`${level} ${test} Skills Assessment`}</p>
                        <hr />
                        <div style={{ textAlign: 'left' }}>
                            <h4>Hello,{name}</h4>
                            <hr />
                            <b>Before you begin</b>
                            <p>
                                Each quiz must be completed in one session; make sure you have a stable internet connection & you’re finished before exiting.
                        </p>
                            <p>
                                The quiz is in English. If you don’t pass, your can retake the test
                        </p>
                        </div>
                        <hr />
                        <div style={{ textAlign: 'left' }}>
                            <b>Overview</b>
                            <p>Answer 15-20 timed, multiple-choice questions</p>
                            <p>~15 minutes duration</p>
                            <p>Sharable result</p>
                        </div>
                        <hr />
                        <button className={styles.button} onClick={() => handleSubmitStart(true)}>Start</button>

                    </div>
                }


            </div>
        </div>
    );
}

export default Test;