let status = "interview";
let daysSinceApplying = 10;

if (typeof daysSinceApplying === "number" && daysSinceApplying >= 0) {

    switch (status) {

        case "applied":
            if (daysSinceApplying >= 7) {
                console.log("Send a follow-up");
            } else {
                console.log("Waiting for response");
            }
            break;

        case "interview":
            console.log("Online interview scheduled at 14:00");
            break;

        case "offer":
            console.log("Offer received for Software Developer position");
            break;

        case "rejected":
            console.log("Application archived");
            break;

        case "ghosted":
            console.log("Application archived");
            break;

        default:
            console.log("Invalid status");
    }

} else {
    console.log("Invalid day");
}