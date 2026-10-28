const applications = [
    {
        company: "R+V",
        position: "Werkstudent Test Automation",
        status: "interview",
        date: "2026-09-01",
        technologies: ["JavaScript", "SQL", "Git"]
    },
    {
        company: "Aareal Bank",
        position: "Werkstudent IT PMO",
        status: "applied",
        date: "2026-09-05",
        technologies: ["Excel", "Jira", "SQL"]
    },
    {
        company: "Deloitte",
        position: "Werkstudent IT",
        status: "rejected",
        date: "2026-08-20",
        technologies: ["Cloud", "Git", "JavaScript"]
    },
    {
        company: "C24 Bank",
        position: "Werkstudent Software Development",
        status: "interview",
        date: "2026-09-10",
        technologies: ["TypeScript", "React", "Git"]
    },
    {
        company: "iC-Haus",
        position: "Werkstudent Software Development",
        status: "applied",
        date: "2026-09-15",
        technologies: ["C", "Linux", "Git"]
    },
    {
        company: "DB Cargo",
        position: "Werkstudent IT",
        status: "offer",
        date: "2026-08-25",
        technologies: ["SQL", "Python", "Excel"]
    },
    {
        company: "Mainzer Mobilität",
        position: "Werkstudent IT",
        status: "ghosted",
        date: "2026-07-30",
        technologies: ["SQL", "Linux"]
    },
    {
        company: "Seibert Group",
        position: "Werkstudent Full Stack",
        status: "applied",
        date: "2026-09-18",
        technologies: ["JavaScript", "React", "TypeScript"]
    },
    {
        company: "Computerra",
        position: "Full Stack Intern",
        status: "interview",
        date: "2026-09-12",
        technologies: ["React", "TypeScript", "Node.js"]
    },
    {
        company: "IHK Rheinhessen",
        position: "Werkstudent IT",
        status: "rejected",
        date: "2026-08-10",
        technologies: ["Excel", "SQL"]
    }
];


const companyNames = 
applications.map(application => application.company);

console.log("Company names:", companyNames);


const interviews = 
applications.filter(application =>application.status==="interview");

console.log("Interviews", interviews);

const openApplications = applications.filter(application => 
    application.status === "applied" || application.status ==="interview"
).length

console.log("Open Applications:",openApplications)

const oldestApplication = applications.reduce(
    (oldest, application) =>
        new Date(application.date) < new Date(oldest.date)
            ? application
            : oldest
);

console.log("Oldest application:", oldestApplication);


//flatMap = map() + flat()
// with help of chat gpt

const uniqueTechnologies = applications
    .flatMap(application => application.technologies)
    .filter((technology, index, array) =>
        array.indexOf(technology) === index
    );

console.log("Unique technologies:", uniqueTechnologies);

const countPerStatus = applications.reduce((counts, application) => {

    const status = application.status;

    if (counts[status]) {
        counts[status]++;
    } else {
        counts[status] = 1;
    }

    return counts;
}, {});

console.log(countPerStatus);


const newestFirst = applications.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});

console.log(newestFirst);


const usesTypeScript = applications.some(
    application => application.technologies.includes("TypeScript")
);

console.log("Uses TypeScript:", usesTypeScript);



const numbers = [5,3,56,6];

const max = numbers.reduce((maxNum ,number)=>
    { return number > maxNum ? number : maxNum } , numbers[0] );

console.log(`greatest number is :${max}`);