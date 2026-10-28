// Task 03: Conditions refactored into a function

function checkApplicationStatus(status, daysSinceApplying) {

    if (typeof daysSinceApplying === "number" && daysSinceApplying >= 0) {

        switch (status) {

            case "applied":
                if (daysSinceApplying >= 7) {
                    return "Send a follow-up";
                } else {
                    return "Waiting for response";
                }

            case "interview":
                return "Online interview scheduled at 14:00";

            case "offer":
                return "Offer received for Software Developer position";

            case "rejected":
            case "ghosted":
                return "Application archived";

            default:
                return "Invalid status";
        }

    } else {
        return "Invalid day";
    }
}


// Test

console.log(checkApplicationStatus("interview", 10));
console.log(checkApplicationStatus("applied", 10));
console.log(checkApplicationStatus("applied", 3));
console.log(checkApplicationStatus("rejected", 5));
console.log(checkApplicationStatus("unknown", 10));
console.log(checkApplicationStatus("applied", -2));