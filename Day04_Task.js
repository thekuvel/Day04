// Resume data in JSON format

let resumeData = {
    name: "Kumaravel",
    experience: [
        {
            companyName: "IBM",
            designation: "Associate Analyst"
        },
        {
            companyName: "Wipro",
            designation: "Infrastructure Specialist"
        }
    ],
    education: [
        {
            title: "B.E",
            course: "ECE",
            grade:  7.3,
            college: "MNMJEC",
            affiliation: "Anna University" 
        },
        {
            title: "12th",
            course: "Computer Science",
            grade: 8.1,
            school: "BASS",
            board: "CBSE"
        }
    ],
    projects:[
        {
            projectName : "Project_1",
            githubLink : "dummy_link.git"
        },
        {
            projectName : "Project_2",
            githubLink : "dummy_link.git"
        }
    ]
}

//console.log(resumeData);

// iterate above json using for, forin, for off, for each

console.log("\nObject iterated using For loop")//for

for(i=0;i<resumeData.experience.length;i++){
    console.log(resumeData.experience[i].companyName);
}

console.log("\nObject iterated using for in")//forin

for(i in resumeData){
    console.log(i);
}

console.log("\nIterated using for of")//for of
for(i of resumeData.projects){
    console.log(i);
}

console.log("\nIterated using forEach")//forEach
resumeData.education.forEach(myFunction)
function myFunction(obj){
    console.log(obj)
}

