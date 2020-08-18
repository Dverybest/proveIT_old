import React,{useState} from 'react';
import logo from '../../assets/intro.png';
import NavBar from '../nav/navbar';
import styles from './home.module.css';

const Home = (props)=> {

    const [openModal,setOpenModal] = useState(false);
   
    const handleNavigate=(data)=>{
        setOpenModal(false);
        props.history.push({
            pathname: `/take-test/${data.test}`,
            state: data
        });
    }
    return (
        <div className={styles.home} >
            {
                openModal&&
                <Modal 
                    close={()=>setOpenModal(false)} 
                    history={props.history} 
                    navigate={handleNavigate}
                />
            }
            {/* {
                QuizModal&&<
            } */}
            <NavBar getStarted={() => setOpenModal(true)}/>
            <header className={`${styles.header} container px-0`}>
                <div className='row px-0'>
                    <img src={logo} className={styles.intro} alt="logo" />
                    <div className={styles.headerTextContainer}>
                        <p className={styles.headerText}>Test your programming knowledge and skills</p>
                        <button className={styles.navButton} onClick={()=>setOpenModal(true)}>Get Started</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

const Modal = ({close,navigate})=>{
   
    const [data,setData] = useState({name:'',test:'',level:''});
    // const [quiz, setQuiz] = useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log(data)
        if (data.name && data.test && data.level){
           
            return navigate(data)
        }
        alert('please fill all fileds')
    }
    const handleSelect = (e)=>{
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleTextChange = (e)=>{
        setData({ ...data, [e.target.name]: e.target.value})
    }

    return(
        <div className={styles.modal}>
            <div >
                <form className={styles.modalForm} onSubmit={handleSubmit}>
                <button className={styles.close} onClick={()=>close()}>&times;</button>
                <h3>Please fill the following fileds to continue</h3>
                    <div className={styles.modalDiv}>
                        <label htmlFor="name">Name:</label>
                        <input type="name" id="name" name="name" value={data.name} onChange={handleTextChange} required/>
                    </div>
                    <div className={styles.modalDiv}>
                        <label htmlFor="test">Select Test:</label>
                        <select id='test' name='test'  required onChange={handleSelect}>
                            <option></option>
                            <option value='JavaScript'>JavaScript</option>
                            <option value='HTML'>HTML</option>
                            <option value='CSS'>CSS</option>
                        </select>
                    </div>
                    <div className={styles.modalDiv}>
                        <label htmlFor="level">Difficult Level:</label>
                        <select name='level' id='level' onChange={handleSelect} required>
                            <option></option>
                            <option value='Basic'>Basic</option>
                            <option value='Intermidate'>Intermidate</option>
                            <option value='Advance'>Advance</option>
                        </select>
                    </div>
                    <button className={styles.modalButton}>Ok</button>
                </form>
            </div>
        </div>
    )
}
export default Home;