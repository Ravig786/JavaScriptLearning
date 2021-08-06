const reqString = new RegExp("ravi");


const matchString1 = 123456;
if (reqString.test(matchString1)) {
    console.log("Match1");
} else {
    console.log("Does not match1");
}


const matchString2 = "This string contains ravi";
if (reqString.test(matchString2)) {
    console.log("Match2");
} else {
    console.log("Does not match2");
}