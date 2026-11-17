//initial values in computer databases containing 5 computers at the computer lab
const computers = [
    {
        computerID: 1,
        location: "Study Room"
    },
    {
        computerID: 2,
        location: "Study Room"
    },
    {
        computerID: 3,
        location: "Computer Lab"
    },
    {
        computerID: 4,
        location: "Computer Lab"
    },
    {
        computerID: 5,
        location: "Computer Lab"
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