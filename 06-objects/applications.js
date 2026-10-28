// 1. Create a job application object

const application = {
    company: "R+V",
    role: "Werkstudent Software Development",
    stack: ["JavaScript", "SQL", "Git"],
    status: "interview",
    appliedAt: "2026-09-15",

    contact: {
        name: "Max Müller",
        email: "max@example.com"
    },

    summary: function () {
        return `${this.company} - ${this.role} - ${this.status}`;
    }
};


// 2. Print summary

console.log("Summary:");
console.log(application.summary());


// 3. Loop over the keys

console.log("\nKeys:");

for (let key in application) {
    console.log(key, application[key]);
}


// 4. Deep copy

const copiedApplication = JSON.parse(JSON.stringify(application));


// 5. Change nested values in the copy

copiedApplication.company = "C24 Bank";
copiedApplication.stack[0] = "TypeScript";
copiedApplication.contact.name = "Anna Schmidt";


// 6. Prove that the copy is independent

console.log("\nOriginal:");
console.log(application);

console.log("\nDeep copy:");
console.log(copiedApplication);


// 7. Delete a property

delete application.status;

console.log("\nAfter deleting status:");
console.log(application);


// 8. Convert to JSON

const jsonApplication = JSON.stringify(application, null, 2);

console.log("\nJSON:");
console.log(jsonApplication);