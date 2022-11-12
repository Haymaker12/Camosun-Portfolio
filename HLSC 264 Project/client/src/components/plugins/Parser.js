import React from 'react'
import ProjectIntro from '../plugins/ProjectIntro'
import ProgramTitle from '../plugins/ProgramTitle'
import { makeStyles } from '@material-ui/core/styles'

const CardStyles = makeStyles(() => ({
    cardDiv: {
        padding: '20px 5px',
        fontFamily: 'Verdana',
    },
    card: {
        backgroundColor: '#E0E0E2',
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
    },
    cardText: {
        border: 'none',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '18pt',
        color: '#569099',
    },
}));

//top level parse component, splits data into categories, based on the program and renders those lists.
const Parser = ({ data }) => {
    const classes = CardStyles();
    //state variable for if the project has been selected
    const [selected, setSelected] = React.useState("");

    //set the data by program 
    let sortedData = Sort(data);

    let getProject = async () => {
        const res = await fetch(`/api/projects?_id=${selected}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin"
        });

        // This is where the data is stored
        const data = await res.json();
        return data;
    };

    React.useEffect(() => {
        (async () => {
            setSelected(await getProject());
        })();
    }, [selected]);

    //conditional rendering based on whether a project has been selected 
    if (sortedData) {
        return (
            <div>
                {sortedData.map(program =>
                    <div key={program.program}>
                        <ProgramTitle program={program}/>
                        {program.projects.map(project => (
                            <div key={project._id}>
                                <ProjectIntro shortDescription={project.shortDescription} name = {project.name} authors = {project.participants} _id={project._id} setSelected={setSelected}/>
                                <br/>
                            </div>
                        ))
                        }
                    </div>
                )}
            </div>
        )}
    else {
        return (
            <div>
                <div>
                    <p>No projects have been uploaded for this program yet!</p>
                </div>
            </div>
        )
    }

};
//sort function, made this a function because the idea made my c# monke brain hurt less. can easily convert to being part of sort function later.
const Sort = (data) => {
    let programList = [];

    if (data.length === 0) {
        return null;
    }
    
    data.forEach(item => {
        if (programList.length > 0) {
            let addCourse = true;
            programList.forEach(course => {
                if (item.program === course.program) {
                    addCourse = false;
                    course.projects.push(item);
                    course.programName = item.programName;
                }
            })
            if (addCourse) {
                programList.push({ program: item.program, projects: [item] });
            }
        } else {
            programList.push({ program: item.program, projects: [item] });
        }
    })
    return programList;
}

export default Parser;
