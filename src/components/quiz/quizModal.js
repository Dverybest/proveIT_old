import React,{useState} from 'react';
import logo from '../../assets/intro.png';
import Navbar from '../../pages/nav/navbar';
// import styles from '../../pages/takeTest/test.module.css';
import styles from './quiz.module.css';


const QuizModal = (props) => {
    const [input, setInput] = useState({})

   // Array of questions starts
var quiz = [ 
    {
        html: {
            question: 'Which html tag is used to display a table?',
            option: ['<table>', '<tbody>', '<td>', '<thead>']
        },
        html: {
            question: 'one of these is not a form element type in html5',
            option: ['email', 'number', 'date', 'web']
        },
        html: {
            question: 'Which statement is false about the <!Doctype html> declaration',
            option: ['Its used to instruct the browser about the type of html', 'Its a html tag', 'Its used to declare the document type', 'All of the above']
        },
        html: {
            question: 'Which one is not a list element in html?',
            option: ['ul', 'em', 'ol', 'dl']
        },
        html: {
            question: 'Which of these tags is not used to define the layouts of a page',
            option: [ '<header>', '<footer>', '<stron>', '<aside>']
        },
        html: {
            question: 'one of these is not a html entity characters',
            option: ['$', '&nbsp', '&lt', '&gt']
        }
        
    }, 
    {
        javascript: {
            question: 'One of these is not a data type in javascript',
            option: ['null', 'undefined', 'object', 'int']
        },
        javascript: {
            question: 'Which of these is an array method in javascript',
            option: ['unshift()', 'toUpper()', 'NaN()', 'sum()']
        },
        javascript: {
            question: 'Which of these is a js method for accessing html element',
            option: ['getElementById', 'querySelector', 'getElementsByClassname', 'getElementByTag']
        },
        javascript: {
            question: 'One of these is not used to declare data types in javascript',
            option: ['var', 'const', 'def', 'let']
        },
        javascript: {
            question: 'One of these is not used to declare data types in javascript',
            option: ['var', 'const', 'def', 'let']
        },
        javascript: {
            question: '== and ===',
            option: ['=== operators compares data type which == compares the value', 'They both return a boolean value', 'They are used to check type correction', 'They are both comparison operators']
        },

    }, 
    {
        css: {
            question: 'one of these is a way to link css to a file',
            option: ['inline', 'external', 'internal', 'outer']
        },
        css: {
            question: '',
            option: ['inline', 'external', 'internal', 'outer']
        }
    }
    
]

    // Array of questions ends

    const handleSelect = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
       
    }
    const handleSubmit = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
        // let selectValue = e.tartget.value
        // return selectValue
    }

    
    let { name, test } = props
    console.log('checking input', input)

    return(
        <div className={styles.test}>
            <Navbar backgroundColor={'rgba(58,121,9,1)'} style={{ paddingTop: 10, paddingBottom: 10, }} />

                <div className={styles.contain}>
                    <div className={styles.qDiv}>
                        <p className={styles.brandLogo} style={{ color: 'black', textAlign: 'center' }}> &lt;PROVE/&gt;IT</p>
                        <p>{`${test} Skills Assessment`}</p>
                         <div >
                            <h3 className="card-header header">Which html tag is used to display a table?</h3>
                                <div className="mt-3 p-4" style={{textAlign:'left'}} >
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="table"  value="table" onChange={handleSelect}  />
                                        <label className="form-check-label" htmlFor="exampleRadios1">table</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="table"  value="thead" onChange={handleSelect} />
                                        <label className="form-check-label" htmlFor="exampleRadios2">thead</label>
                                    </div>   
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="table"  value="tbody" onChange={handleSelect} />
                                        <label className="form-check-label" htmlFor="exampleRadios2">tbody</label>
                                    </div>      
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="table"  value="td" onChange={handleSelect}/>
                                        <label className="form-check-label" htmlFor="exampleRadios2">td</label>
                                    </div>           
                                
                                </div>
                                
                                <button href="#" onClick={handleSubmit} className="next mt-4">Next</button>
                        </div> 
                       
                    </div>
               </div>
                
        </div>

    )
}
export default QuizModal;
