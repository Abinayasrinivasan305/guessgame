import React from "react";

function Result(props){
    const {secretnumber,inputvalue}=props;
    let result;
    const inputval=Number(inputvalue);
    if(inputval){
        if(inputval>secretnumber){
            result="Higher"

        }
        else if(inputval<secretnumber)
        {
            result="Lower"

        }
        else if(inputval==secretnumber){
            result="Yeah !!! u Guessed"
        }
        else{
            result="invalid input"
        }
    }
    return(
        <h3><i>You Guessed:{result}</i></h3>
    )
}
export default Result;