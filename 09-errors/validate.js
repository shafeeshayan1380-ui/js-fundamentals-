


function validateApplication(app) {

    if (!app.company) {
        throw new Error("Company is missing");
    }

    if (!app.role) {
        throw new Error("Role is missing");
    }

    if (!app.status) {
        throw new Error("Status is missing");
    }

    return true;
}


// Three invalid applications

const app1 = {
    company: "",
    role: "Developer",
    status: "applied"
};

const app2 = {
    company: "R+V",
    role: "",
    status: "interview"
};

const app3 = {
    company: "C24",
    role: "Developer",
    status: ""
};


// Test applications

const applications = [app1, app2, app3];

for (let i = 0; i < applications.length; i++) {

    try {
        validateApplication(applications[i]);
        console.log("Application is valid");
    } catch (err) {
        console.log(err.message);
    }

}
