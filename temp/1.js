

function getData(){
    const response = { docs: null, message: '', success: false }
    const users = [
        {
            firstName: "akshay",
            lastName: "saini",
            age: 26,
        },
        {
            firstName: "donald",
            lastName: "trump",
            age: 56,
        },
        {
            firstName: "elon",
            lastName: "musk",
            age: 50,
        },
        {
            firstName: "ravi",
            lastName: "gupta",
            age: 23,
        },
        {
            firstName: "deepika",
            lastName: "padukone",
            age: 26,
        },
        {
            firstName: "qwerty",
            lastName: "padukone",
            age: 26,
        }
    ];

    response.docs = users;

    return response;
} 

const result = getData();
console.log(result);