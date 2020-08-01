import React,{useState} from 'react';
import logo from '../../assets/intro.png';
import Navbar from '../../pages/nav/navbar';
import styles from '../../pages/home/home.module.css';

const QuizModal = (props) => {
    console.log('checking for props', props.history)
    // if (!props.location.state){
    //     props.history.push('/');
    //     return <></>
    // }
    // let { name, test, level } = props.location.state;
    
    let { name, test, level } = props

    return(
        <>
            <div className={styles.test}>
            <Navbar backgroundColor={'rgba(58,121,9,1)'} style={{ paddingTop: 10, paddingBottom: 10, }} />

                <div className={styles.contain}>
                    <div className={styles.qDiv}>
                        <p className={styles.brandLogo} style={{ color: 'black', textAlign: 'center' }}> &lt;PROVE/&gt;IT</p>
                        <div className="card-header"> 
                        {props.name} 
                        Assessment</div>
                         <div className="card" style={{width: '18rem'}}>
                            <h3 className="card-header">Which html tag is used to display a table?</h3>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                    <label class="form-check-label" for="exampleRadios1">table</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label class="form-check-label" for="exampleRadios2">thead</label>
                                </div>   
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label class="form-check-label" for="exampleRadios2">tbody</label>
                                </div>           
                            
                            <a href="#" class="btn btn-success">Next</a>
                        </div> 
                    </div>
               </div>
                
        </div>

        </>
    )
}
export default QuizModal;
