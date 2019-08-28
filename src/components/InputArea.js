import React, {useRef } from "react";
import useForm from "react-hook-form";

import { useStudentScoreContext} from "../utils/GlobalState";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


const InputArea = (props) => {
    
    const { handleSubmit, register, errors}= useForm();

    const [_,dispatch] = useStudentScoreContext();

    const scoreLetterToNumber = {
        "F": 0.00,
        "D": 1.00,
        "C": 2.00,
        "B": 3.00,
        "A": 4.00,
    }

    const floatToString= (num)=>{
        return num.toFixed(Math.max(1, num.toString().substr(num.toString().indexOf(".") + 1).length));
    }
    
    const calculateGPA = (score1,score2,score3,score4)=> {
        let GPA = (
            scoreLetterToNumber[score1] + 
            scoreLetterToNumber[score2] + 
            scoreLetterToNumber[score3] + 
            scoreLetterToNumber[score4]
            )/4.00
        return GPA
    }

    const onSubmit = values => {
        console.log(values)
        dispatch({
            type: "add",
            name: values.name,
            grades: {
                math: values.mathScore,
                history: values.historyScore,
                science: values.scienceScore,
                english: values.englishScore,
            },
            gpa: floatToString(calculateGPA(values.mathScore, values.historyScore, values.englishScore, values.scienceScore)),
        })
    }

    return(
        <Card style={{marginBottom:"2rem", padding:"2rem 0.5rem"}}>
            <div style={{margin:"auto"}}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as="Col" controlId="nameInput">
                            <Form.Label> Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Name" 
                                name="name" 
                                ref={register({ 
                                        required: "Please add name", 
                                        minLength: {
                                            value: 3,
                                            message: "Please input at least 3 letters"
                                        }
                                })} 
                            />
                            {errors.name && errors.name.message}
                        </Form.Group>
                        
                        <Form.Group as="Col" controlId="mathScoreInput">
                            <Form.Label>Math</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder=""
                                name="mathScore"
                                ref={register({
                                    required: "Please add a grade",
                                    pattern: {
                                        value: /[A-C]|D|F/,
                                        message: "Please input a valid grade"
                                    }
                                })} />
                            {errors.mathScore && errors.mathScore.message}
                        </Form.Group>

                        <Form.Group as="Col" controlId="historyScoreInput">
                            <Form.Label>History</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder=""
                                name="historyScore"
                                ref={register({
                                    required: "Please add a grade",
                                    pattern: {
                                        value: /[A-C]|D|F/,
                                        message: "Please input a valid grade"
                                    }
                                })} />
                            {errors.historyScore && errors.historyScore.message}
                        </Form.Group>

                        <Form.Group as="Col" controlId="scienceScoreInput">
                            <Form.Label>Science</Form.Label>
                            <Form.Control type="text"
                                placeholder=""
                                name="scienceScore"
                                ref={register({
                                    required: "Please add a grade",
                                    pattern: {
                                        value: /[A-C]|D|F/,
                                        message: "Please input a valid grade"
                                    }
                                })}/>
                            {errors.scienceScore && errors.scienceScore.message}
                        </Form.Group>

                        <Form.Group as="Col" controlId="englishScoreInput">
                            <Form.Label>English</Form.Label>
                            <Form.Control type="text"
                                placeholder=""
                                name="englishScore"
                                ref={register({
                                    required: "Please add a grade",
                                    pattern: {
                                        value: /[A-C]|D|F/,
                                        message: "Please input a valid grade"
                                    }
                                })}/>
                            {errors.englishScore && errors.englishScore.message}
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form.Row>
                </Form>
            </div>
        </Card>
    )
}

export default InputArea
