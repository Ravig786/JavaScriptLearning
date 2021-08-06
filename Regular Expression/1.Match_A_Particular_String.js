const password = new RegExp("^123456$");
const confirmPassword = 123456;
if (password.test(confirmPassword)) {
    console.log("Match1");
} else {
    console.log("Does not match1");
}

const confirmPassword2 = 12345612;
if (password.test(confirmPassword2)) {
    console.log("Match2");
} else {
    console.log("Does not match2");
}