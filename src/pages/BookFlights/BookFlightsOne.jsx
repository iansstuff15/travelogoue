import React, {useState} from 'react';
import Title from '../../components/title/title';
import buildPic from '../../assets/Building.png';
import TextF from '../../components/booking/TextFieldCus';
import CustomButton from '../../components/customButton/customButton';
import '../BookDestination/BookDestination.css';



const BookFlightsOne = () => {

    const [step, setStep] = useState(1);
    const [tolocation, setTolocation] = useState("");
    const [fromlocation, setFromlocation] = useState("");
    const [oneway, setOneway] = useState("");
    const [whengo, setWhengo] = useState("");
    const [who, setWho] = useState("");
    const [yesspecial, setYesspecial] = useState("");
    const [howmany, setHowmany] = useState(0);
    const [whatas, setWhatas] = useState("");



    const gonextStep = (e) => {
        e.preventDefault();
        setStep(2);
 
    }
    

    const handleSubmit = e => {
        e.preventDefault();
        setStep(1);

    }


    switch(step){
        case 1:
            return(
            <>
                <div className = "travelForm">
                    <Title title="BOOK" subtitle="FLIGHT"/>  
                    <div className = "subtravelForm">
            
                        <div>
                            <p style={{fontSize: "24px",}}>Where exactly do you</p>
                            <p style={{fontSize: '72px', marginBottom: "20px"}}>Wanna go?</p>
                            <TextF dvalue = {tolocation}  dvaluef = {setTolocation} style = {{marginRight: "10px"}} name = "Where are you going?"/>
                            <TextF dvalue = {fromlocation} dvaluef = {setFromlocation} name = "Where are you gonna come from?"/>
                            <p style={{fontSize: "24px",marginTop: "25px"}}>What schedule do you</p>
                            <p style={{fontSize: "72px" , marginBottom: "20px"}}>Wanna prefer?</p>
                            <TextF dvalue = {oneway} dvaluef = {setOneway} style = {{marginRight: "10px"}}  name = "Is it a one way trip?"/>
                            <TextF dvalue = {whengo} dvaluef = {setWhengo} name = "When are you going?"/>
                            <div style={{marginTop: "20px", marginLeft: "450px"}}>
                                <CustomButton Type = "button" Text = "Continue" gonextStep = {gonextStep}/>
                            </div>
                        </div>        
                        
                    </div>
                </div>
        
                <img className="pic" src={buildPic} alt ="buildPic" />
           
            </>
            );

        case 2: 
            return(
            <>
                <div className = "travelForm">
                    <Title title="GO OUT" subtitle="ON HOLIDAY"/>  
                    <div className = "subtravelForm">
            
                        <form onSubmit = {handleSubmit}>
                            <p style={{fontSize: "24px",}}>ARE YOU SOLO OR</p>
                            <p style={{fontSize: '72px', marginBottom: "20px"}}>WITH COMPANY?</p>
                            <TextF dvalue = {who} dvaluef = {setWho} style = {{marginRight: "10px"}} name = "Who's coming?"/>
                            <TextF dvalue = {yesspecial} dvaluef = {setYesspecial} name = "Are you with someone who requires personal assistance?"/>
                            <br/>
                            <br/>
                            <br/>
                            <TextF dvalue = {howmany} dvaluef = {setHowmany} style = {{marginRight: "10px"}}  name = "How many is coming?"/>
                            <TextF dvalue = {whatas} dvaluef = {setWhatas} name = "What assistance do they require?"/>
                        
                            <div style={{marginTop: "20px", marginLeft: "450px"}}>
                                
                                <CustomButton Type = "submit" Text = "Continue"/>
                                
                            </div>
                        </form>        
                        
                    </div>
                </div>

                <img className="pic" src={buildPic} alt ="buildPic" />
    
            </>
            );
        default:
            return(
            <>
            </>
            );
    }

}
export default BookFlightsOne