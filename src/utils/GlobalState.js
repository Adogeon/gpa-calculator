import React, { createContext, useReducer, useContext } from "react";

const studentScoreContext = createContext({
    scores: [{
        name: "",
        grades: [
            { math: "" },
            { history: "" },
            { science: "" },
            { english: "" },
        ],
        gpa: "",
    }],
})

const { Provider} = studentScoreContext;

const reducer = (state,action) => {
    let temp = []
    switch(action.type) {
        case "add":
            temp = state.scores || []
            return {
                ...state,
                scores: [
                    ...temp,
                    {
                        name: action.name,
                        grades: action.grades,
                        gpa: action.gpa,
                    }
                ]
            }
        case "remove":
            console.log(action.payload);
            temp = state.scores.filter((_,index) => {
                return index !== action.payload;
            })
            return {
                ...state,
                scores: temp
            }
        default:
            return state;
    }
}

const StudentScoreProvider = ({ value = [], ...props})=> {
    const [state,dispatch] = useReducer(reducer,[]);

    return <Provider value={[state, dispatch]} {...props} />;
}

const useStudentScoreContext = ()=>{
    return useContext(studentScoreContext);
}

export {StudentScoreProvider, useStudentScoreContext}

