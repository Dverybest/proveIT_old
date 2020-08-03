import React,{useState} from 'react';
import logo from '../../assets/intro.png';
import Navbar from '../../pages/nav/navbar';
import styles from '../../pages/takeTest/test.module.css';


const QuizModal = (props) => {
    const [input, setInput] = useState({})

     // Array of questions starts
     const quiz = [
        {
            question1: 'Which html tag is used to display a table?',
            choice: ['table', 'tbody', 'td', 'thead']
        },
        {
            question2: 'one of these is not a form element type in html 5',
            choice: ['email', 'number', 'date', 'web']
        },
        {
            question3: 'Which one is not a list element in html?',
            choice: ['ul', 'em', 'ol', 'dl']
        },
 ]
    // Array of questions ends

    const handleSelect = (e) => {
        e.preventDefault()
        setInput({...input, [e.target.name] : e.target.value})
    }
    const handleSubmit = () => {
        setInput()
    }
    console.log('checking for props', props.history)

    
    let { name, test } = props

    return(

        <div className={styles.test}>
            <Navbar backgroundColor={'rgba(58,121,9,1)'} style={{ paddingTop: 10, paddingBottom: 10, }} />

                <div className={styles.contain}>
                    <div className={styles.qDiv}>
                        <p className={styles.brandLogo} style={{ color: 'black', textAlign: 'center' }}> &lt;PROVE/&gt;IT</p>
                        <p>{`${test} Skills Assessment`}</p>
                         <div className="card" style={{width: '30rem', height: '17rem'}}>
                            <h3 className="card-header bg-dark text-white">Which html tag is used to display a table?</h3>
                                <div style={{textAlign:'left'}} onChange={handleSelect}>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name=""  value="table" checked />
                                        <label className="form-check-label" for="exampleRadios1">table</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name=""  value="thead" />
                                        <label className="form-check-label" for="exampleRadios2">thead</label>
                                    </div>   
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name=""  value="tbody" />
                                        <label className="form-check-label" for="exampleRadios2">tbody</label>
                                    </div>           
                                
                                </div>
                                
                                 <a href="#" className="btn btn-success mt-4">Next</a>
                        </div> 
                       
                    </div>
               </div>
                
        </div>

    )
}
export default QuizModal;
