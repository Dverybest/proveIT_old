import React, { useState } from 'react';
import Navbar from '../nav/navbar';
import styles from './test.module.css';
import QuizModal from '../../components/quiz/quizModal';

const Test = (props) => {
    const [quizModal, setQuizModal] = useState(false)


    // Array of questions starts
    const quiz = [
        {
            question: 'Which html tag is used to display a table?',
            choice: ['table', 'tbody', 'td', 'thead']
        },
        {
            question: 'one of these is not a form element type in html 5',
            choice: ['email', 'number', 'date', 'web']
        },
        {
            question: 'Which one is not a list element in html?',
            choice: ['ul', 'em', 'ol', 'dl']
        }
    ]
    // Array of questions ends

    // handle Submit 
    const handleSubmit = () => {
        props.history.push('/:id')
    }

   
    if (!props.location.state){
        props.history.push('/');
        return <></>
    }
    let { name, test, level } = props.location.state;
    return (
        <div className={styles.test}>
            {
                quizModal&&<QuizModal  />
            }
            <Navbar backgroundColor={'rgba(58,121,9,1)'} style={{ paddingTop: 10, paddingBottom: 10, }} />

                <div className={styles.contain}>
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
                            <button 
                            onClick={()=> {
                                setQuizModal(true)
                            }}>Start</button>
                        {/* <div>
                        </div> */}
                    </div>
               </div>
                
         
        </div>
    )
}

// const QuizModal = (props) => {
//     if (!props.location.state){
//         props.history.push('/');
//         return <></>
//     }
//     let { name, test, level } = props.location.state;

//     return(
//         <>
//             <div className={styles.test}>
//             <Navbar backgroundColor={'rgba(58,121,9,1)'} style={{ paddingTop: 10, paddingBottom: 10, }} />

//                 <div className={styles.contain}>
//                     <div className={styles.qDiv}>
//                         <p className={styles.brandLogo} style={{ color: 'black', textAlign: 'center' }}> &lt;PROVE/&gt;IT</p>
//                         <div className="card-header"> 
//                         {name} 
//                         Assessment</div>
//                          <div className="card" style={{width: '18rem'}}>
//                             <h3 className="card-header">Which html tag is used to display a table?</h3>
//                                 <div class="form-check">
//                                     <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
//                                     <label class="form-check-label" for="exampleRadios1">table</label>
//                                 </div>
//                                 <div class="form-check">
//                                     <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
//                                     <label class="form-check-label" for="exampleRadios2">thead</label>
//                                 </div>   
//                                 <div class="form-check">
//                                     <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
//                                     <label class="form-check-label" for="exampleRadios2">tbody</label>
//                                 </div>           
//                             {/* <ul className="list-group list-group-flush">
//                                 <li className="list-group-item">Cras justo odio</li>
//                                 <li className="list-group-item">Dapibus ac facilisis in</li>
//                                 <li className="list-group-item">Vestibulum at eros</li>
//                             </ul> */}
//                             <a href="#" class="btn btn-success">Next</a>
//                         </div> 
//                     </div>
//                </div>
                
//         </div>

//         </>
//     )
// }

export default Test;
{/* <div className={styles.toolBar}>
    <div className={styles.roundName}><p>{name.split(" ")[0][0] + name.split(" ")[1][0]}</p></div>
</div> */} 