
const reqString = new RegExp("^[a-zA-Z]{1}");


const matchString1 = "abc";
if (reqString.test(matchString1)) {
    console.log("Match1");
} else {
    console.log("Does not match1");
}


const matchString2 = "123";
if (reqString.test(matchString2)) {
    console.log("Match2");
} else {
    console.log("Does not match2");
}