import { useState } from "react";

const ContactForm = () => {
    const [fData,setfData]=useState({fName:"",lName:"",city:"",gender:"Male"});
    const handleChange = (data_key,value) =>{
        setfData((prevObj)=>({
            ...prevObj,
            [data_key]:value
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(fData);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>handleChange("fName",e.target.value)} value={fData.fName} type="text" name="" id="" />
                <input onChange={(e)=>handleChange("lName",e.target.value)} value={fData.lName} type="text" name="" id="" />
                <select onChange={(e)=>handleChange("city",e.target.value)} value={fData.city}>
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Natore">Natore</option>
                </select>
                <input onChange={()=>handleChange("gender",'Male')}  checked={fData.gender=="Male"} type="radio" name="gender" />Male
                <input onChange={()=>handleChange("gender",'Female')}  checked={fData.gender=="Female"} type="radio" name="gender" />Female
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default ContactForm;