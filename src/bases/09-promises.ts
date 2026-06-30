const myPromise = new Promise( (resolve) => {

    setTimeout(() => {
        resolve(100);
    }, 2000);

})

myPromise.then(
    (myMoney) => {
        console.log(`Tengo mi dinero ${myMoney}`);
    }
)