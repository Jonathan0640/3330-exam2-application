//initial values in computer databases containing 5 computers at the computer lab
const computers = [
    {
        computerID: 1,
        location: "computer lab"
    },
    {
        computerID: 2,
        location: "computer lab"
    },
    {
        computerID: 3,
        location: "computer lab"
    },
    {
        computerID: 4,
        location: "computer lab"
    },
    {
        computerID: 5,
        location: "computer lab"
    },
];

//functions to access computer database
const getAllComputers = ()=>{
    return computers;
};


//export default functions below
export default{
    getAllComputers
}