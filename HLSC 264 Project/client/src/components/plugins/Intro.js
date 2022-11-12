import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

//top level parse component, splits data into categories, based on the program and renders those lists.
const Parser = ({ className, data }) => {
    let sortedData = Sort(data);

    if (sortedData) {
        return (

            <div className={className}>
                {sortedData.map(program =>
                    <div key={program.program}>
                        <h1> {program.program} </h1>
                        {
                            program.projects.map(project => (
                                <div key={project._id}>
                                    <ProjectHeader name={project.name} authors={project.participants} date={project.date} program={project.program} />
                                    <ProjectIntro shortDescription={project.shortDescription} />
                                    <Button>View Project</Button>
                                    <hr />
                                    <br />
                                    <br />
                                </div>
                            ))

                        }
                    </div>
                )}
            </div>
        )
    }
    else {
        return (
            <div>
                <p>No Data Found</p>
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

const ProjectIntro = ({ className, shortDescription }) => {
    return (
        <div>
            <p>{shortDescription}</p>
        </div>
    )
}

//project component, renders out and parses an individual project using the content tag within an individual item object.
const ProjectContent = ({ className, content }) => {
    if (content) {
        return (
            <>
                {content.map(item => {

                    switch (item.type) {
                        case "h1":
                            return (
                                <StyledHeaderOne key={item.id}> {item.content} </StyledHeaderOne>
                            )
                        case "h2":
                            return (
                                <StyledHeaderTwo key={item.id}> {item.content} </StyledHeaderTwo>
                            )
                        case "p":
                            return (
                                <StyledParagraph key={item.id}> {item.content} </StyledParagraph>
                            )
                        case "si":
                            return (
                                <SingleImage key={item.id} image={item.content} />
                            )
                        case "pp":
                            return (
                                <PowerPoint key={item.id} slide={item.content} />
                            )
                        case "ps":
                            return (
                                <Poster key={item.id} poster={item.content} />
                            )
                        case "v":
                            return (
                                <Video key={item.id} video={item.content} />
                            )
                        default:
                            return (
                                <div></div>
                            )
                    }
                }
                )}
            </>
        )
    }
    else {
        return (
            <div></div>
        );
    }

};
// Component to go on the header of a project.
const ProjectHeader = ({ className, name, authors, date, program }) => {
    let authorString = "";
    for (let i = 0; i < authors.length; i++) {
        if (i === 0) {
            authorString += authors[i];
        } else if (i === authors.length - 1) {
            authorString += (", and " + authors[i]);
        } else {
            authorString += (", " + authors[i]);
        }
    }
    return (
        <div>
            <StyledHeaderOne> {name} </StyledHeaderOne>
            <div>
                <HeaderPara>Authors: {authorString} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Program:{program} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date: {date} </HeaderPara>
                <hr />
            </div>
        </div>
    )
};

const Video = ({ className, video }) => {
    return (
        <div className={className}>
            <VideoFile source src={process.env.PUBLIC_URL + "/videos/" + video} type="video/mp4"></VideoFile>
        </div>
    )
}
const SingleImage = ({ className, image }) => {
    return (
        <div className={className}>
            <StyledImage src={process.env.PUBLIC_URL + "/images/" + image}></StyledImage>
        </div>
    )
}

const PowerPoint = ({ className, slide }) => {
    return (
        <div className={className}>
            <PowerPointImage src={process.env.PUBLIC_URL + "/powerpoint/" + slide}></PowerPointImage>
        </div>
    )
}



const Poster = ({ className, poster }) => {
    return (
        <div className={className}>
            <PosterImage src={process.env.PUBLIC_URL + "/images/" + poster}></PosterImage>
        </div>
    )
}
// Styled Components --------------------------------------------------------------------------------------------------------------------

const StyledHeaderOne = styled.h1`
                color: #5A5A5A;
                size; 20pt;
                font-family: calibri;
                font-weight: bold;
            `;

const StyledHeaderTwo = styled.h2`
                color: #5A5A5A;
                font-family: calibri;
            `;

const StyledParagraph = styled.p`
                size: 12pt;
                font-family: calibri;
                color: black;
            `;

const StyledImage = styled.img`
                width: 30%;
                display: block;
                margin: auto;
            `
const VideoFile = styled.video`
                display: block;
                margin: auto;
                width: 60%;
                margin-top: 20px
            `
const PowerPointImage = styled.img`
                display: block;
                margin: auto;
                width: 60%;
                margin-top: 20px
            `
const PosterImage = styled.img`
                display: block;
                margin: auto;
                width: 70%;
                margin-top: 40px
            `

const HeaderPara = styled.p`
                font-size: medium;
                font-style: italic;
                margin-bottom: 5px;


            `

export default Parser;