//takes command line inputs and cuts off after the 1 index to only capture user input
const profileDateArgs = process.argv.slice(2, process.argv.length);
console.log(profileDateArgs);

//prints user input 1 by 1
const printProfileData = profileDataArr => {
    //this for loop iteration over an array
    for (let i = 0; i < profileDataArr.length; i+=1) {
        console.log(profileDataArr[i]);
    }

    console.log("==================");
    
    //is the same as above
    profileDataArr.forEach(profileItem => console.log(profileItem));
}

printProfileData(profileDateArgs);