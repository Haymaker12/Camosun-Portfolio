import React from 'react'
import ProjectHeader from '../plugins/ProjectHeader'
import ProjectContent from '../plugins/ProjectContent'
import NewComment from './NewComment';
import CommentList from './CommentList';


const fixDates = (item, index) =>{
    var arrayDates = item.date.split("T");
    var newCommentDate = arrayDates[0];
    item.date = newCommentDate;
}

const SelectedProject = ({ match: { params: { _id } } }) => {
    const [project, setProject] = React.useState(null);
    const [program, setProgram] = React.useState(null);

    let getIndividualProject = async () => {

        const res = await fetch(`/api/projects/${_id}`, {
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
        //rchange date formatting
        var dateArray = data.date.split("T")
        var newDate = dateArray[0];
        data.date = newDate;

        //change date formatting for comments
        data.comments.forEach(fixDates);
        return data;
        
    };

    React.useEffect(() => {
        (async () => {
            setProject(await getIndividualProject());
        })();
    }, []);

    let getProgram = async () => {

        if(!project) {
            return "Loading...";
        }

        const res = await fetch(`/api/programs/${project.program}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin"
        });
        
        const data = await res.json();

        return data.program;
    };

    React.useEffect(() => {
        (async () => {
            setProgram(await getProgram());
        })();
    }, [project]);

    if (project != null) {
        return (
            <div>
                <ProjectHeader name={project.name} authors={project.participants} date={project.date} program={program} />
                <ProjectContent content={project.content} />
                <CommentList comments={project.comments} />
                <NewComment projID={project._id} />
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <p>No projects have been uploaded for this program yet!</p>
                </div>
            </div>
        )
    }

}


export default SelectedProject;