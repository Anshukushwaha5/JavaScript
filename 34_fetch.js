// method 1 by fetch

fetch('https://api.github.com/users/hiteshchoudhary')
    .then(function (response) {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        return data.id;
    })
    .then((id) => {
        console.log(id)
    })
    .catch((reject) => {    
        console.log("error", reject);
    })
    .finally(() => {
        console.log("code has been exicuted")
    })

https://data.covid19india.org/csvcsv/latest/case_time_series.



// method 2 by asyn await

async function reqrep(){
    try {
        const response= await fetch('https://api.github.com/users/hiteshchoudhary')
        const data= await response.json();
        console.log(data)
    } catch (reject) {
        console.log("Async ERROR",reject)
    }
}
reqrep()


//method 3 promise
