import React from 'react'
import { styled, makeStyles } from '@material-ui/core/styles'
import logo from '../../assets/images/footerAsset.png'
const FormStyles = makeStyles(() => ({
    fRow: {
        content: '',
        display: 'flex',
        clear: 'both',
        width: '100%'
    },
    fCol:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    lCol:{
        width: '40%'
    },
    styledProject: {
        borderStyle: 'solid',
        borderRadius: '5px',
        margin: '10px',
        backgroundColor: 'white'
    },
    styledProjectForm: {
        backgroundColor: '#E0E0E2',
        minHeight: '100vw',
        borderRadius: '5px',
        padding: '2vw',
    },
    textInput:{
        padding: '.5vw',
        border: 'none',
        borderRadius: '5px',
        fontFamily: 'Verdana', 
        fontStyle: 'italic',
        textAlign: 'center',
        width: '100%',
        margin: '.5vw 0 0 0'
    },
    nameTextInput:{
        padding: '.5vw',
        border: 'none',
        borderRadius: '5px',
        fontFamily: 'Verdana', 
        fontStyle: 'italic',
        textAlign: 'center',
        width: '20vw',
        margin: '.5vw .5vw 0 0'
    },
    textArea:{
        border: 'none',
        borderRadius: '5px',
        fontFamily: 'Verdana', 
        fontStyle: 'italic',
        resize: "none",
        padding: '.5vw',
        margin: '.5vw .5vw 0 0'
    },
    sButton:{
        width: 'min-content',
        margin: '5px',
        padding: '1vw',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#E0E0E2',
        fontFamily: 'Helvetica', 
        cursor: 'pointer',
    },
    styledDropDown: {
        display: 'flex',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'white',
        fontFamily: 'Verdana',
        fontStyle: 'italic',
        borderColor: 'white',
        width: '100%',
        cursor: 'pointer',
        padding: '.5vw',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '.5vw .5vw 0 0'
    },
    styledWrittenDropDown:{
        display: 'flex',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'white',
        fontFamily: 'Verdana',
        fontStyle: 'italic',
        borderColor: 'white',
        width: '100%',
        cursor: 'pointer',
        padding: '.5vw',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '.5vw .5vw 0 0'
    },
    styledProgramDropDown:{
        display: 'flex',
        width: '100%',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'white',
        fontFamily: 'Verdana',
        fontStyle: 'italic',
        borderColor: 'white',
        cursor: 'pointer',
        padding: '.5vw',
        alignItems: 'center',
        justifyContent: 'center',
        marginBlock: '.5vw 0'
    },
    styledComponentDropDown:{
        display: 'flex',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'white',
        fontFamily: 'Verdana',
        fontStyle: 'italic',
        borderColor: 'white',
        width: '100%',
        cursor: 'pointer',
        padding: '.5vw',
        alignItems: 'center',
        justifyContent: 'center'
    },
    styledDropDownMenu: {
        display: 'flex',
        position: 'absolute',
        backgroundColor: 'white',
        border: '0.5px',
        borderStyle: 'solid',
        borderColor: 'black',
        width: (props) => props.width,
        padding: '.5vw',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dropDownButton:{
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'white',
        fontFamily: 'Verdana',
        fontStyle: 'italic',
        borderColor: 'white',
        width: (props) => props.width
    },
    styledDropDownItem: {
        paddingInline: '5px'
    },
    styledButton:{
        width: 'min-content',
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '.5vw',
        fontFamily: 'Helvetica',
        cursor: 'pointer',
    },
    submitButton: {
        width: '10vw',
        padding: '.5vw',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#FBB425',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', 
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginBlock: '1vw'
    },
    styledHeaderOne: {
        borderRadius: '5px',
        margin: '5px',
        minWidth: '50vw',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: '26pt',
    },
    styledHeaderTwo: {
        borderRadius: '5px',
        margin: '5px',
        minWidth: '50vw',
        fontFamily: 'Times New Roman', 
        fontWeight: 'italic',
        fontSize: '18pt',
    },
    styledParagraph:{
        borderRadius: '5px',
        margin: '5px',
        fontFamily: 'Verdana',
        fontWeight: 'normal',
        fontSize: '13pt',
    },
    styledImageInput: {
        paddingLeft: '2px',
        borderColor: 'black',
        borderRadius: '5px',
        marginLeft: '5px',
        fontFamily: 'Verdana', 
        fontStyle: 'italic',
    },
    sURLInput: {
        padding: '.5vw',
        borderColor: 'black',
        borderRadius: '5px',
        marginLeft: '5px',
        fontFamily: 'Verdana', 
        fontStyle: 'italic',
    },
    sBulletPointInput: {
        padding: '.5vw',
        borderColor: 'black',
        borderRadius: '5px',
        marginLeft: '5px',
        marginBottom: '5px',
        fontFamily: 'Verdana', 
        fontStyle: 'italic',
    },
    sPowerPointSlideInput:{
        padding: '.5vw',
        borderColor: 'black',
        borderRadius: '5px',
        marginLeft: '5px',
        marginBottom: '5px',
        fontFamily: 'Verdana', 
        fontStyle: 'italic',
    },
    sVideoInput:{
        float: 'left',
        padding: '.5vw',
        borderColor: 'black',
        borderRadius: '5px',
        marginLeft: '5px',
        marginBottom: '5px',
        fontFamily: 'Verdana', 
        fontStyle: 'italic',
    },
    logo: {
        margin: '.5vw 0 .5vw .5vw'
    },
    pageTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30pt',
        fontFamily: 'Helvetica',
        justifySelf: 'end'
    },
    disclaimer: {
        fontSize: '9pt',
        margin: '.5vw 0 .5vw .5vw'
    },
}))
const FullForm = () => {
    const classes = FormStyles();
    const [showForm, setShowForm] = React.useState(true);
    const projectTypes = [
        {
            id: 1,
            value: 'Written/Essay'
        },
        {
            id: 2,
            value: 'Video'
        },
        {
            id: 3,
            value: 'PowerPoint'
        }
    ]
    const count = [
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 3
        },
        {
            id: 4,
            value: 4
        },
        {
            id: 5,
            value: 5
        },
        {
            id: 6,
            value: 6
        },
        {
            id: 7,
            value: 7
        }

    ]
    //#endregion
// #region Methods
const resetProjectContent = (type, params) => {
    if(type == 'Video'){
        params.setContent([{id: 0, type: 'v', content: null},{id: 1, type: 'p', content: null}]);
        params.setIndex(0);
    }else {
        params.setContent([]);
        params.setIndex(0);
    }
}
const removeNames = (count, param) => {
    let items = param.names ;
    let scrubArray = [];
    items.forEach(item => {
        if(item.id < count){
            scrubArray.push(item);
        } else {
        }
    })
    items = scrubArray;

    param.set(items);
}
const AddItem = (content, setContent, compType, index, setIndex) => {
        if(compType != "Components"){
            const newItem = {id: index, type: compType, content: null, metaContent: null}
            setContent([...content, newItem]);
            setIndex(index+1);
        }
    }
    
    // Removes an item from a state array, and decrements the index state variable to match.
    const RemoveItem = (content, setContent, index, stateIndex, setIndex) => {
        let newContent = content;
        newContent.splice(index, 1);
        newContent = UpdateIndex(newContent);
        setContent(newContent);
        setIndex(stateIndex - 1);
    }
    // Updates the id component of an object of arrays passed through it to match its place in the array, returns an array with the new id values.
    const UpdateIndex = (newContent) => {
        for(let i = 0; i < newContent.length; i++){
            newContent[i].id = i;
        }
        return newContent;
    }
    // moves a component up(decreases index) in an array, and contains a reference to the array it is contained in, the set method for it, an index, and an additional state
    // variable for re-rendering purposes
    const MoveUp = (content, setContent, index, setChanged, changed) => {
        if(index > 0){
            let newContent = content;
            let oldIndex = newContent[index];
            newContent[index] = newContent[index - 1];
            newContent[index - 1] = oldIndex;
            newContent = UpdateIndex(newContent);
            setContent(newContent);
        }
        setChanged(!changed);
    }
    // moves a component down in an array(increases index), and contains a reference to the array it is contained in, the set method for it, an index, and an additional state
    // variable for re-rendering purposes
    const MoveDown = (content, setContent, index, setChanged, changed) => {
        if(index < content.length-1){
            let newContent = content;
            let oldIndex = newContent[index];
            newContent[index] = newContent[index + 1];
            newContent[index + 1] = oldIndex;
            newContent = UpdateIndex(newContent);
            setContent(newContent);
        }
        setChanged(!changed);
    }
    //Sets a value in the object at the given index, and updates the state array.
    const ChangeVal = (content, setContent, index, change) => {
        let newContent = content;
        newContent[index].content = change;
        newContent[index].metaContent = change;
        setContent(newContent);
    }
    //Scrubs a videolink for the needed information to turn it into an embeded video on the page. add cases for video sites other than youtube .
    const ScrubVideoLink = (change) => {
        let newChange = change.split('/');
        let youtubeVid = false;
        let vimeoVid = false;
        let changeString = "";
        newChange.forEach(word => {
            if(word.search("youtu") === -1){
                
            } else {
                youtubeVid = true;
            }
        });
        newChange.forEach(word => {
            if(word.search("vimeo") === -1){
                
            } else {
                vimeoVid = true;
            }
        });
        if(youtubeVid === true){
            newChange.forEach(word => {
            
            if(word.search("youtu") != -1){
                //Do nothing
            } 
            else if (word.search("https:") != -1) {
                //Do nothing
            } 
            else if(word == ""){
                //Do nothing
            }
            else{
                changeString = word;
                if(changeString.search("=") === -1){
                    
                } else {
                    changeString = changeString.split('=');
                    changeString = changeString[1];
                }
                if(changeString.search("&") === -1){
                    
                } else {
                    changeString = changeString.split('&');
                    changeString = changeString[0];
                }

                changeString = "https://www.youtube.com/embed/" + changeString;
            }
        });
        }
        if(vimeoVid === true){
            newChange.forEach(word => {
            
                if(word.search("vimeo") != -1){
                    //Do nothing
                } 
                else if (word.search("https:") != -1) {
                    //Do nothing
                } 
                else if(word == ""){
                    //Do nothing
                }
                else{
                    changeString = word;
                    if(changeString.search("=") === -1){
                        
                    } else {
                        changeString = changeString.split('=');
                        changeString = changeString[1];
                    }
                    if(changeString.search("&") === -1){
                        
                    } else {
                        changeString = changeString.split('&');
                        changeString = changeString[0];
                    }
    
                    changeString = "https://player.vimeo.com/video/" + changeString;
                }
            });
        }
        return changeString;
    }
    //#endregion
// app component
    const App = ({className}) => {
        return (
            <div className = {className}>
                <ProjectForm className = {classes.styledProjectForm} />
            </div>
        )
    };
    //Data serializer, returns a project object.
    const MakeProject = (projectName, description, nameData, program, content) => {
        let submitForm = true;
        let errorString = "Submit failed, check if the following fields are filled in: "
        if(projectName == null || projectName === ""){
            errorString += "Project Name, "
            submitForm = false;
        }
        if(description == null || description === ""){
            errorString += "Project Summary, "
            submitForm = false;
        }
        if(nameData == null || nameData.length == 0){
            errorString += "Student Name(s), "
            submitForm = false;
        }
        if(program == null || program == "Program"){
            errorString += "Program, "
            submitForm = false;
        }
        if(content == null || content.length == 0){
            errorString += "Nothing has been added to the project,"
            submitForm = false;
        }
        if(submitForm){
        let programData = null;
        let programID = "";
        let nameArray = []
        let project = {};
        let newContent = content;
        newContent.forEach(thing => {
                switch(thing.type){
                    case "Header 1":
                        thing.type = "h1"
                        break;
                    case "Header 2":
                        thing.type = "h2"
                        break;
                    case "Paragraph": 
                        thing.type = "p"
                        break;
                    case "Bullet Point": 
                        thing.type = "bp"
                        break;
                    case "Image": 
                        thing.type = "si"
                        break;
                    case "URL Link":
                        thing.type = "url"
                        break;
                    case "Video Link":
                        thing.type = "v"
                        break;
                    case "v":
                        thing.type = "v"
                        break;
                    case "Power Point Slide":
                        thing.type = "pp"
                        break;
                    default:
                        thing.type = "p"
                        
                }
        })
        nameData.forEach(item => {
            nameArray.push(item.firstName + " " + item.lastName);
        })
        getPrograms().then(res => {
            programData = res;
            programData.forEach(item => {
                if(item.program == program){
                    programID = item._id;
                }
                
            })
            project = {
                program: programID,
                name: projectName,
                shortDescription: description,
                participants: nameArray,
                content: newContent
    
            };
            //Send to server
            var body = JSON.stringify(project);
            let asyncCall = async () => {
                const res = await fetch("/api/projects", {
    
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    body: body
    
                })
                    .then(response => {
                        if (response.status == 200) {
                            setShowForm(false);
                        }
                    })
                    
            }
            try {
                asyncCall();
            } catch (err) {
                console.log("API ERROR: " + err);
            }
        });
    } else {
        errorString += " then attempt to submit again."
        alert(errorString);
    }
    }

    

    let getPrograms = async () => {

        const res = await fetch("/api/programs", {
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
    //Full Form Component, just rendering this should render the entire form. It contains state variables for all of the data members needed to serialize a
    // full project object. 
    const ProjectForm = ({className}) => {
        let programData = null;
        let programNames = [];
        getPrograms().then(res => {
            programData = res;
            programData.forEach(item => {
                programNames.push({id: item._id , value: item.program});
            })
        });
        
        //This holds the latest index of the content array
        const [index, setIndex] = React.useState(0);
        const [program, setProgram] = React.useState("Program");
        const [projectName, setProjectName] = React.useState("");
        const [projectType, setProjectType] = React.useState("Written/Essay");
        const [object, setObject] = React.useState("Components");
        const [description, setDescription] = React.useState("");
        const[content, setContent] = React.useState([]);
        const [memberCount, setMemberCount] = React.useState(1);
        const [groupMembers, setGroupMembers] = React.useState([]);
        //Set content equal to this when a video project is rendered.
        if(showForm){
            return(
                <div className = {className} method="post">
                    <center><h1 className = {classes.pageTitle}>Submission Form</h1></center> 
                    <div  className = {classes.fCol}>
                    
                    <div className={classes.fRow}>
                        <input className={classes.textInput} type = "text" placeholder = {"Project Name"} onChange={(e) => setProjectName(e.target.value)}/>
                    </div>
                    <div className={classes.fRow}>
                        <div  className = {classes.fCol}> 
                            <div className={classes.fRow}>
                                <DropDown className = {classes.styledDropDown} items = {count} setType = {setMemberCount} type = {memberCount} func = {removeNames} params = {{names: groupMembers,set: setGroupMembers}} />
                            </div >
                            <div className={classes.fRow}>
                                <NameList nameCount = {memberCount} setMembers = {setGroupMembers} members={groupMembers} />
                            </div >
                        </div >
                        <div  className = {classes.fCol}>
                            <FormTextInput className={classes.textInput} placeholder = "Email Address" />
                            <div  className = {classes.fCol}>
                            <DropDown className = {classes.styledProgramDropDown}  items={programNames} setType = {setProgram} type = {program} />
                            </div >
                            <div  className = {classes.fCol}>
                            <DropDown className = {classes.styledWrittenDropDown} items={projectTypes} setType = {setProjectType} type = {projectType} func = {resetProjectContent} params = {{setContent: setContent, setIndex: setIndex}} />
                            </div >
                        </div >
                    </div >
                        
                        <textarea className = {classes.textArea} rows = {'8'} cols = {"76"}placeholder = {"Maximum 55 word Project Summary"} onChange = {(e) => {e.preventDefault();
                            setDescription(e.target.value);
                        }}/>
                        
                    </div >
                    <div  className = {classes.fCol}>
                        <div className={classes.fRow}>
                        <img src={logo} alt="Logo" className={classes.logo} />
                        </div>
                        <div className={classes.fRow}>
                            <div  className = {classes.fCol}>
                            </div>
                            <div  className = {classes.lCol}>
                            <p className = {classes.disclaimer}>*Once you submit you cannot undo it. Be sure to read over your project and make sure all necessary fields are filled out.</p>
                            </div>
                        </div>
                        <div className={classes.fRow}>
                        <button className = {classes.submitButton} onClick={(e) => { MakeProject(projectName, description, groupMembers, program, content) }}> Submit </button>
                        </div>
                    </div >
                    <div className={classes.fRow}>
                        <ProjectEditor projectType = {projectType} type = "components" setContent = {setContent} content = {content} index={index} setIndex={setIndex}/>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <center>
                    <h2> Form Submitted </h2>
                    <p>Thank you!</p>
                    </center>
                </div>

            )
        }
        
    }
    // standard text input for a form, has a default value, and a set value for its content to be stored in a state variable.
    const FormTextInput = ({className, placeholder}) => {
        return(
            <input className = {className} type = "text" placeholder = {placeholder}/>
        )
    }
    
    const NameList = ({ClassName, nameCount, setMembers, members}) => {
        let names = []
        for(let i = 0; i < nameCount; i++){
            names.push({id: i, firstName: "", lastName: ""});
        }
        const HandleChange = (e) => {
            let items = members;
            if(items.length < names.length){
                names.forEach(name => {
                    if(items[name.id]){
                    }else{
                        items.push({id: name.id, firstName: "", lastName: ""});
                    }
                })
            } else if(items.length > names.length){
                let scrubArray = [];
                items.forEach(item => {
                    if(names[item.id]){
                        scrubArray.push(item);
                    } else {
                    }
                })
                items = scrubArray;
            }
            if(e.target.placeholder == "First Name"){
                items[e.target.id].firstName = e.target.value;
            }
            if(e.target.placeholder == "Last Name"){
                items[e.target.id].lastName = e.target.value;
            }
            setMembers(items);
        }
        return(
            <div>
                {names.map(aName => 
                    <div className={classes.fRow} key = {aName.id}> 
                        <div  className = {classes.fCol}> 
                        <input className = {classes.nameTextInput} width={"100%"} id = {aName.id} type="text" placeholder = "First Name" onChange = {(event) => 
                            HandleChange(event)
                        }/>
                        </div >
                        <div  className = {classes.fCol}>
                        <input className = {classes.nameTextInput} width={"100%"} id = {aName.id} type="text" placeholder = "Last Name" onChange = {(event) => 
                            HandleChange(event)
                        }/>
                        </div >
                    </div>
                )}
            </div>
            )
    }
    // #region Dropdown
    //DropDown top level component, takes in an array that becomes its options; Also takes in its children, a default value, and a set for a react state, that react states value
    // and an additional func value that can contain a desired function that will be run when a drop down item is selected. Think of it as a poor mans onChange. Im certain there is a
    // Better way to do this, but we are running low on time. Also had to hard code values in, so, never a good sign. will ask ben about this.
    const DropDown = ({className, items, children, defaultVal, setType, type, func, params, width}) => {
        const [open, setOpen] = React.useState(false);
        return(
            
            <div className = {className} onClick = {(e) => {e.preventDefault(); setOpen(!open);}} > 
                {type} 
                <span/>
                {open? <DropDownMenu className = {classes.styledDropDownMenu} items={items} setType = {setType} func = {func} params={params} width = {width}/> : <div/>}
            </div>
        )
    }
    const DropDownMenu = ({className, items, setType, func, params, width}) => {
        
        return(
            <div className ={className}>
                {items.map( item => 
                    <DropDownItem className = {classes.styledDropDownItem} key = {item.id} id = {item.id} name = {item.value} setType = {setType} func = {func} params = {params} width ={width}/>
                )}
            </div>
        )
    }
    const DropDownItem = ({className, id, name, setType, func, params}) => {
        
        return(
            <div className={classes.fRow}>
                <a className = {className}href = "#" onClick = {() => {
                    setType(name); 
                    if(func != null){
                        func(name, params);
                    }
                }}> {name} </a>
            </div>
        )
    }
    // #endregion

    //Project Editor top level component, it takes in a type which is the project type, and renders the proper project editor based on that.
    //If you want this to use Ky data, just hook it up so that the items is the data for the components that are allowed to be passed in, otherwise you
    // are just going to have to hard code it like I have.
    const ProjectEditor = ({className, projectType, setContent, content, items, index, setIndex}) => {
        const [intProjectType, setIntProjectType] = React.useState(projectType);
        //This determines the type of component to add to the project.
        const [type, setType] = React.useState("Components");
        // I could not think of a better way to re render this with ease without messing up the index, so uh... here is a change count.
        const [changed, setChanged] = React.useState(false);
        //Two hard coded component lists based on the type of project.
        const essayComps = [
        {
            id: 1,
            value: 'Header 1'
        },
        {
            id: 2,
            value: 'Header 2'
        },
        {
            id: 3,
            value: 'Paragraph'
        },
        {
            id: 4,
            value: 'Image'
        },
        {
            id: 5,
            value: 'Bullet Point'
        },
        {
            id: 6,
            value: 'URL Link'
        }
    ]
        const powerPointComps = [
            {
                id: 1,
                value: 'Header 1'
            },
            {
                id: 2,
                value: 'Header 2'
            },
            {
                id: 3,
                value: 'Paragraph'
            },
            {
                id: 4,
                value: 'Power Point Slide'
            },
            {
                id: 5,
                value: 'Video Link'
            }
        ]

        //Determines the editor rendered based on the passed in projectType.
        switch(projectType){
            case "Written/Essay":
            return(
                <div className = {className}>
                    <DropDown className = {classes.styledComponentDropDown} items={essayComps} setType = {setType} type={type}/>
                    <button className = {classes.styledButton} onClick={() => AddItem(content, setContent, type, index, setIndex)}> Add </button>
                    <Project className = {classes.styledProject} setChanged ={setChanged} changed = {changed} content={content} setContent={setContent} stateIndex={index} setIndex = {setIndex}/>
                </div>
            )
            case "Video":
            return(
                <div className = {className} > 
                    <VideoProject content = {content} setContent = {setContent} setChanged = {setChanged} changed = {changed}/>
                </div>
            )
            case "PowerPoint":
            return(
                <div className = {className}>
                    <DropDown className = {classes.styledComponentDropDown} items={powerPointComps} setType = {setType} type={type} />
                    <button className = {classes.styledButton} onClick={() => AddItem(content, setContent, type, index, setIndex)}> Add </button>
                    <Project className = {classes.styledProject} setChanged ={setChanged} changed = {changed} content={content} setContent={setContent} stateIndex={index} setIndex = {setIndex}/>
                </div>
            )
            default: 
            return(
                <div></div>
            )
        }
        
    }
    //renders the project using a map function to run through the content array, all of the rest of the parameters are there to pass
    //the needed state change variables to the buttons on the project items component. I feel that there may be an easier way to do this, but I
    //Wrote this all in less than two days, so cut me some slack.
    const Project = ({className, setChanged, changed, content, setContent, stateIndex, setIndex}) => {
        
        
        return(
            <div className = {className}>
                {content.map(contents => 
                    (<ProjectItem key = {contents.id} setChanged = {setChanged} changed = {changed} type = {contents.type} content={content} setContent={setContent} index={contents.id} stateIndex = {stateIndex} setIndex={setIndex}/>)
                )}
            </div>
        )
    }
    //Static video project which will only render two inputs and only store them like so.
    const VideoProject = ({className, content, setContent, setChanged, changed}) => {
        //<VideoInput content = {content} setContent={setContent} index = {0}/>
        return(
            <div className = {className}>
                <VideoInput content = {content} setContent={setContent} index = {0} setChanged = {setChanged} changed = {changed}/>
                <div className={classes.fRow}>
                    <ParagraphInput className={classes.styledParagraph} content = {content} index = {1} setContent = {setContent} setChanged = {setChanged}/>
                </div>
            </div>
        )
    }
    //The project item renders a FRow with a project item content component of the specified type and allows it to be moved up and down in the project via the up and down buttons.
    const ProjectItem = ({className, setChanged, changed, type, content, setContent, index, stateIndex, setIndex}) => {
        if(content[index+1] && content[index-1]){
            if(content[index-1].type === type && content[index+1].type === type){
                return(
                    <div className={classes.fRow}>
                        <div className = {className}>
                        <button className = {classes.sButton} disabled  onClick={() => MoveUp(content, setContent, index, setChanged, changed)}> up </button>
                        <button className = {classes.sButton} disabled  onClick={() => MoveDown(content, setContent, index, setChanged, changed)}> down </button>
                        <button className = {classes.sButton} onClick={() => RemoveItem(content, setContent, index, stateIndex, setIndex)}> X </button>
                        </div>
                        <ProjectItemContent type = {type} content={content} setContent={setContent} index={index} setChanged = {setChanged} changed={changed}/>
                    </div>
                )
            }else if(content[index-1].type === type){
                return(
                    <div className={classes.fRow}>
                        <div className = {className}>
                        <button className = {classes.sButton} disabled onClick={() => MoveUp(content, setContent, index, setChanged, changed)}> up </button>
                        <button className = {classes.sButton}  onClick={() => MoveDown(content, setContent, index, setChanged, changed)}> down </button>
                        <button className = {classes.sButton}  onClick={() => RemoveItem(content, setContent, index, stateIndex, setIndex)}> X </button>
                        </div>
                        <ProjectItemContent type = {type} content={content} setContent={setContent} index={index} setChanged = {setChanged} changed={changed}/>
                    </div>
                )
            }else if(content[index+1].type === type){
                return(
                    <div className={classes.fRow}>
                        <div className = {className}>
                        <button className = {classes.sButton} onClick={() => MoveUp(content, setContent, index, setChanged, changed)}> up </button>
                        <button className = {classes.sButton} disabled  onClick={() => MoveDown(content, setContent, index, setChanged, changed)}> down </button>
                        <button className = {classes.sButton}  onClick={() => RemoveItem(content, setContent, index, stateIndex, setIndex)}> X </button>
                        </div>
                        <ProjectItemContent type = {type} content={content} setContent={setContent} index={index} setChanged = {setChanged} changed={changed}/>
                    </div>
                )
            } else {
                return(
                    <div className={classes.fRow}>
                        <div className = {className}>
                        <button className = {classes.sButton} onClick={() => MoveUp(content, setContent, index, setChanged, changed)}> up </button>
                        <button className = {classes.sButton} onClick={() => MoveDown(content, setContent, index, setChanged, changed)}> down </button>
                        <button className = {classes.sButton} onClick={() => RemoveItem(content, setContent, index, stateIndex, setIndex)}> X </button>
                        </div>
                        <ProjectItemContent type = {type} content={content} setContent={setContent} index={index} setChanged = {setChanged} changed={changed}/>
                    </div>
                )
            }
        } else if(content[index+1]){
            if(content[index+1].type === type){
                return(
                    <div className={classes.fRow}>
                        <div className = {className}>
                        <button className = {classes.sButton} onClick={() => MoveUp(content, setContent, index, setChanged, changed)}> up </button>
                        <button className = {classes.sButton} disabled onClick={() => MoveDown(content, setContent, index, setChanged, changed)}> down </button>
                        <button className = {classes.sButton} onClick={() => RemoveItem(content, setContent, index, stateIndex, setIndex)}> X </button>
                        </div>
                        <ProjectItemContent type = {type} content={content} setContent={setContent} index={index} setChanged = {setChanged} changed={changed}/>
                    </div>
                )
            }else{
                return(
                    <div className={classes.fRow}>
                        <div className = {className}>
                        <button className = {classes.sButton} onClick={() => MoveUp(content, setContent, index, setChanged, changed)}> up </button>
                        <button className = {classes.sButton} onClick={() => MoveDown(content, setContent, index, setChanged, changed)}> down </button>
                        <button className = {classes.sButton} onClick={() => RemoveItem(content, setContent, index, stateIndex, setIndex)}> X </button>
                        </div>
                        <ProjectItemContent type = {type} content={content} setContent={setContent} index={index} setChanged = {setChanged} changed={changed}/>
                    </div>
                )
            }
        } else if(content[index-1]){
            if(content[index-1].type === type){
                return(
                    <div className={classes.fRow}>
                        <div className = {className}>
                        <button className = {classes.sButton} disabled onClick={() => MoveUp(content, setContent, index, setChanged, changed)}> up </button>
                        <button className = {classes.sButton} onClick={() => MoveDown(content, setContent, index, setChanged, changed)}> down </button>
                        <button className = {classes.sButton} onClick={() => RemoveItem(content, setContent, index, stateIndex, setIndex)}> X </button>
                        </div>
                        <ProjectItemContent type = {type} content={content} setContent={setContent} index={index} setChanged = {setChanged} changed={changed}/>
                    </div>
                )
            }else{
                return(
                    <div className={classes.fRow}>
                        <div className = {className}>
                        <button className = {classes.sButton} onClick={() => MoveUp(content, setContent, index, setChanged, changed)}> up </button>
                        <button className = {classes.sButton} onClick={() => MoveDown(content, setContent, index, setChanged, changed)}> down </button>
                        <button className = {classes.sButton} onClick={() => RemoveItem(content, setContent, index, stateIndex, setIndex)}> X </button>
                        </div>
                        <ProjectItemContent type = {type} content={content} setContent={setContent} index={index} setChanged = {setChanged} changed={changed}/>
                    </div>
                )
            }
        } else {
            return(
            <div className={classes.fRow}>
                <div className = {className}>
                <button className = {classes.sButton} onClick={() => MoveUp(content, setContent, index, setChanged, changed)}> up </button>
                <button className = {classes.sButton} onClick={() => MoveDown(content, setContent, index, setChanged, changed)}> down </button>
                <button className = {classes.sButton} onClick={() => RemoveItem(content, setContent, index, stateIndex, setIndex)}> X </button>
                </div>
                <ProjectItemContent type = {type} content={content} setContent={setContent} index={index} setChanged = {setChanged} changed={changed}/>
            </div>
        )
        }
    }
    // This renders the proper input component based on the type passed in, the other parameters create the state functionality.
    const ProjectItemContent = ({className, type, content, setContent, index, setChanged, changed}) => {

        switch(type){
            case "Header 1":
                return(
                    <HeaderOneInput className = {classes.styledHeaderOne} content={content} setContent = {setContent} index={index}/>
                )
            case "Header 2":
                return(
                    <HeaderTwoInput className = {classes.styledHeaderTwo} content={content} setContent = {setContent} index={index}/>
                )
            case "Paragraph": 
                return(
                    <ParagraphInput className={classes.styledParagraph} content={content} setContent = {setContent} index={index}/>
                )
            case "Bullet Point": 
                return(
                    <BulletPointInput className = {classes.styledBulletPoint} content={content} setContent = {setContent} index={index} changed={changed} setChanged={setChanged}/>
                )
            case "Image": 
                return(
                    <SingleImageInput className = {classes.styledImageInput} content = {content} setContent={setContent} index = {index} setChanged = {setChanged} changed = {changed}/>
                )
            case "URL Link":
                return(
                    <URLInput className = {classes.sURLInput} content={content} setContent = {setContent} index={index} changed={changed} setChanged={setChanged}/>
                )
            case "Video Link":
                return(
                    <VideoInput content = {content} setContent={setContent} index = {index} setChanged = {setChanged} changed = {changed}/>
                )
            case "Power Point Slide":
                return(
                    <PosterInput content = {content} setContent={setContent} index = {index} setChanged = {setChanged} changed = {changed} />
                )
            default:
            return(<h1> {type} </h1>);
            }
        
    }
    //Project Input Components these should be various inputs. ==================================================================================================
    // #region Finished inputs
    // The header one input item.
    const HeaderOneInput = ({className, content, setContent, index}) =>{

        if(content[index].content === null){
            return(
            <input className = {className} type="text" placeholder = "Type here" onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            )
        } else {
            return(
            <input className = {className} type="text" defaultValue = {content[index].content} onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            )
        }
        
    }
    // The header two input item.
    const HeaderTwoInput = ({className, content, setContent, index}) => {
        if(content[index].content === null){
            return(
            <input className = {className} type="text" placeholder = "Type here" onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            )
        } else {
            return(
            <input className = {className} type="text" defaultValue = {content[index].content} onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            )
        }
    }
    // The paragraph input item.
    const ParagraphInput = ({className, content, setContent, index}) => {
        if(content[index].content === null){
            return(
                <textarea rows={"6"} cols={"80"} className = {className} type="text" placeholder = "Type here" onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            )
        } else {
            return(
                <textarea rows={"6"} cols={"80"} className = {className} type="text" defaultValue = {content[index].content} onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            )
        }
    }
    // #endregion
    // The Bullet point item, I have no idea how want to set this one up, my initial thought is an array with index and text values, but we don't have a parse
    // for this yet either, so we should get on that. for now this will just be blank.
    const BulletPointInput = ({className, content, setContent, index, changed, setChanged}) => {
        const [bulletContent, setBulletContent] = React.useState([]);
            const [bulletIndex, setBulletIndex] = React.useState(0);
        
        React.useEffect(() => {
            let newContent = content;
            if(content[index].content){
                setBulletContent(content[index].content);
                setBulletIndex(content[index].content.length);
            }
        });
        const AddBullet = () => {
                const newBullet = {id: bulletIndex, type: "bullet", content: null}
                let newContent = bulletContent;
                newContent.push(newBullet);
                setBulletContent(newContent);
                setBulletIndex(bulletIndex+1);
                ChangeVal(content, setContent, index, bulletContent);
        }
        const UpdateBullet = (bIndex, newVal) => {
            let newContent = bulletContent;
            bulletContent[bIndex].content = newVal;
            setBulletContent(newContent);
            ChangeVal(content, setContent, index, bulletContent);
        }
        const RemoveBullet = (bIndex) => {
        let newContent = bulletContent;
        newContent.splice(bIndex, 1);

        setBulletIndex(bulletIndex - 1);
        // setBulletContent(newContent[index].content); <- this is cursed, don't 
        ChangeVal(content, setContent, index, bulletContent);
        }
        if(content && content[index].content == null){ // <- this would b0rk if content is undefined
            return(
            <div className={classes.fRow}>
                <button className = {classes.sButton} onClick ={() => AddBullet()}> Add Bullet </button>
            </div>
            )
        } else {
            return(
            <div>
                <div className={classes.fRow}>
                    <button className = {classes.sButton} onClick ={() => AddBullet()}> Add Bullet </button>
                </div>
                <div className={classes.fRow}>
                    {content[index].content.map(bullet =>{
                        if(content[index].content.length ===  1){
                            return(
                                <BulletPointItem className = {classes.styledBulletPointItem} key = {bullet.id} bIndex ={bullet.id} content={content} setContent= {setContent} index ={index} updateBullet ={UpdateBullet}/>
                            )
                        }
                        else if(bullet.id < content[index].content.length-1){
                            return(
                                <div className={classes.fRow} key = {bullet.id}>
                                    <BulletPointItem className = {classes.styledBulletPointItem} bIndex ={bullet.id} content={content} setContent= {setContent} index ={index} updateBullet ={UpdateBullet}/>
                                </div>
                            ) 
                        }
                        else {
                            return(
                                <div className={classes.fRow} key = {bullet.id}>
                                    <BulletPointItem className = {classes.styledBulletPointItem} bIndex ={bullet.id} content={content} setContent= {setContent} index ={index} updateBullet ={UpdateBullet}/>
                                    <button className = {classes.sButton} onClick = {() => RemoveBullet(bullet.id)}>X</button>
                                </div>
                            )
                        }
                        
                        
                    })}
                </div>
            </div>
            )
        }
    }
    const BulletPointItem = ({className, content, setContent, index, bIndex, updateBullet}) => {
        return(
                <input className = {classes.sBulletPointInput} type="text" defaultValue = {content[index].content[bIndex].content} placeholder = {"Type Here"} onChange = {(e) => {
                    
                    updateBullet(bIndex, e.target.value);
                }}/>
        )
    }
    // The URL Link item again one that has no component made for it yet to my knowledge, but my knowledge is bad so, whatever, will update the parser for it,
    // but for now it should basically just be another text input.
    const URLInput = ({className, content, setContent, index, setChanged, changed}) => {
        if(content[index].content == null){
            return(
            <div>
            <a href = {"#"}> ClickHere </a>
            <div className={classes.fRow}>
            <input className = {classes.sURLInput} id = {index} type="text" placeholder = "Type here" onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            <button className = {classes.sButton} onClick ={()=> {setChanged(!changed)}}> Update Link </button>
            </div>
            </div>
            )
        } else {
            return(
            <>
            <a href= {content[index].content} target= {"_blank"}> Click Here </a>
            <div className={classes.fRow}>
            <input className = {className} id = {index} type="text" defaultValue = {content[index].content} onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            <button className = {classes.sButton} onClick ={()=> {setChanged(!changed)}}> Update Link </button>
            </div>
            </>
            )
        }
    }
    // There inputs from here on require file uploads, and idk how to do that, but Tony needs to get started on Styling, so we will just have to 
    // Deal with these later.
    const VideoInput = ({className, content, setContent, index, setChanged, changed})=>{
        if(content[index].content === null){
            return(
            <>
            <iframe className = {classes.sIFrame} src = {content[index].content}/>
            <div className={classes.fRow}>
            <input className = {classes.sVideoInput} type="text" placeholder = "Paste Link Here" onChange = {(e) => ChangeVal(content, setContent, index, ScrubVideoLink(e.target.value))}/>
            <button className = {classes.sButton} onClick ={()=> {setChanged(!changed)}}> Test Link </button>
            </div>
            </>
            )
        } else {
            return(
                <>
                <iframe className = {classes.sIFrame} src = {content[index].content}/>
                <div className={classes.fRow}>
                <button className = {classes.sButton} onClick ={()=> {setChanged(!changed);}}> Test Link </button>
                <input type="text" defaultValue = {content[index].content} onChange = {(e) => ChangeVal(content, setContent, index, ScrubVideoLink(e.target.value))}/>
                </div>
                </>
            )
        }
    }

    // these are all the same, the only difference is the visuals of the component that will render when inserted.
    const SingleImageInput = ({className, content, setContent, index, setChanged, changed})=>{
        if(content[index].content === null){
            return(
            <>
            <img className = {classes.sIFrame} src = {content[index].content}/>
            <div className={classes.fRow}>
            <input className = {classes.styledImageInput} type="text" placeholder = "Paste Link Here" onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            <button className = {classes.sButton} onClick ={()=> {setChanged(!changed)}}> Test Link </button>
            </div>
            </>
            )
        } else {
            return(
                <>
                <img className = {classes.sIFrame} src = {content[index].content}/>
                <div className={classes.fRow}>
                <button className = {classes.sButton} onClick ={()=> {setChanged(!changed);}}> Test Link </button>
                <input type="text" defaultValue = {content[index].content} onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
                </div>
                </>
            )
        }
    }
    const PowerPointInput = ({className, content, setContent, index, setChanged, changed})=>{
        if(content[index].content === null){
            return(
            <>
            <img className = {classes.sIFrame} src = {content[index].content}/>
            <div className={classes.fRow}>
            <input className = {classes.sPowerPointSlideInput} type="text" placeholder = "Paste Link Here" onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            <button className = {classes.sButton} onClick ={()=> {setChanged(!changed)}}> Test Link </button>
            </div>
            </>
            )
        } else {
            return(
                <>
                <img className = {classes.sIFrame} src = {content[index].content}/>
                <div className={classes.fRow}>
                <button className = {classes.sButton} onClick ={()=> {setChanged(!changed);}}> Test Link </button>
                <input type="text" defaultValue = {content[index].content} onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
                </div>
                </>
            )
        }
    }
    const PosterInput = ({className, content, setContent, index, setChanged, changed})=>{
        if(content[index].content === null){
            return(
            <>
            <img className = {classes.sIFrame} src = {content[index].content}/>
            <div className={classes.fRow}>
            <input type="text" placeholder = "Paste Link Here" onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
            <button className = {classes.sButton} onClick ={()=> {setChanged(!changed)}}> Test Link </button>
            </div>
            </>
            )
        } else {
            return(
                <>
                <img className = {classes.sIFrame} src = {content[index].content}/>
                <div className={classes.fRow}>
                <button className = {classes.sButton} onClick ={()=> {setChanged(!changed);}}> Test Link </button>
                <input type="text" defaultValue = {content[index].content} onChange = {(e) => ChangeVal(content, setContent, index, e.target.value)}/>
                </div>
                </>
            )
        }
    }
   // #endregion
    return(
        <>
    <App />
        </>
    )
}
export default FullForm;
