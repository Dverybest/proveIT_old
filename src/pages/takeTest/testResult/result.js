import React from 'react';
import Navbar from '../../nav/navbar';
import styles from './result.module.css';

const TestResult = (props)=>{
    
    if (!props.location.state) {
        props.history.push('/');
        return <></>
    }
    return (
        <div className={styles.result}>
            <Navbar backgroundColor={'rgba(58,121,9,1)'} style={{ paddingTop: 10, paddingBottom: 10, }} />
            <div className={styles.container}>
               <div className={styles.background}>
                    <p className={styles.brandLogo} style={{ color: 'black', textAlign: 'center' }}> &lt;PROVE/&gt;IT</p>
               </div>
                <div className={styles.main_result}>
                    <div className={styles.main_result_title_div}>
                        <p>Skill Assesment Result</p>
                    </div>
                    <div className={styles.circle}>
                        <span>{`${props.location.state.score}%`}</span>
                    </div>
                    <p className={styles.level}>Basic JavaScript</p>
                    <div className={styles.main_result_button_div}>
                        <button className={styles.button}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestResult;