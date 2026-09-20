let status = "interview";
let daysSinceApplying = 10;

if (daysSinceApplying >= 0 & typeof daysSinceApplying === "number" ){
    if (status ===  "applied"){
    if (daysSinceApplying >= 7){
         console.log("Send a follow-up");
    }
    else {
        console.log("Waiting for response");
    }


}
else if (status === "interview") {
    console.log("Online interview scheduled at 14:00");
} else if (status === "offer") {
    console.log("Offer received for Software Developer position");
} else if (status === "rejected") {
    console.log("Application archived");
} else if (status === "ghosted") {
    console.log("Application archived");
} else {
    console.log("Invalid status");
}

}

else {console.log("Invalid day")}

















