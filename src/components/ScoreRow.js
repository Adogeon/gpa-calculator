import React from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"

const ScoreRow = (props) => {
    const studentName = props.data.name;
    const mathScore = props.data.grades.math;
    const historyScore = props.data.grades.history;
    const scienceScore = props.data.grades.science;
    const englishScore = props.data.grades.english;
    const GPAScore = props.data.gpa;

    const handleOnClick = e => {
        e.preventDefault();
        props.handleOnClick();
    }

    return(
            <tr style={props.highest ? { backgroundColor: "#22f300" } : props.lowest ? { backgroundColor: "#e93935", color: "#f8f8f8" } : { backgroundColor: "white" }}>
                <td> {studentName}</td>
                <td> {mathScore}</td>
                <td> {historyScore}</td>
                <td> {scienceScore}</td>
                <td> {englishScore}</td>
                <td> {GPAScore}</td>
                <td> <Button variant="secondary" onClick={handleOnClick}> X </Button></td>
            </tr>
    )
}

export default ScoreRow
