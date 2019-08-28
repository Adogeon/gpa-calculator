import React, { useState, useEffect} from "react";
import { useStudentScoreContext} from "../utils/GlobalState";

import Table from "react-bootstrap/Table";
import ScoreRow from "./ScoreRow";

const ScoreArea = (props) => {

    const [state, dispatch] = useStudentScoreContext();
    const [highestScore, setHighestScore] = useState(0);
    const [lowestScore, setLowestScore] = useState(0);
    
    const findHighestandLowestGPA = scores => {
        const gpaScores = scores.map( score => Number(score.gpa));
        setHighestScore(Math.max(...gpaScores))
        setLowestScore(Math.min(...gpaScores))
    }

    useEffect(()=> {
        if(state.scores) {
            console.log(state.scores)
            if(state.scores.length > 1) {
                findHighestandLowestGPA(state.scores);
            }
        }
    })

    return (
        <div style={{padding: "1rem 0.5rem"}}>
            <Table>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Math </th>
                        <th>History </th>
                        <th>Science </th>
                        <th>English </th>
                        <th>GPA </th>
                        <th></th> 
                    </tr>
                </thead>
                <tbody>
                   {
                       state.scores 
                       && state.scores.map((score,index) => {
                           return Number(score.gpa) === highestScore
                                  ? <ScoreRow 
                                        data={score} 
                                        key={index}
                                        handleOnClick = {()=> dispatch( {type: "remove", payload: index})} 
                                        highest/>
                                  : Number(score.gpa) === lowestScore
                                    ? <ScoreRow 
                                            data={score} 
                                            key={index}
                                            handleOnClick={() => dispatch({ type: "remove", payload:index})}  
                                            lowest/>
                                    : <ScoreRow 
                                            data={score} 
                                            key={index}
                                            handleOnClick={() => dispatch({ type: "remove", payload:index})}/>
                       })
                   }
                </tbody>
            </Table>
        </div>
    )
}

export default ScoreArea