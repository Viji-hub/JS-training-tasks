
const resultEle = document.querySelector('.result');
const errorEle = document.querySelector('.error');

function resetResult() {
    errorEle.classList.add('hide');
    resultEle.classList.add('hide');
    errorEle.innerHTML = '';
    resultEle.innerHTML = '';
}

function showFn(ele, msg) {
    ele.classList.remove('hide');
    ele.innerHTML = msg;
}

function enableNextOption() {
    const myTaskValue = document.querySelector('#tasks').value;
    const sickOption = document.querySelector('.sickOption');
    const clothGivenOption = document.querySelector('.clothGivenOption');
    const fittingGivenOption = document.querySelector('.fittingGivenOption');

    sickOption.classList.add('hide');
    clothGivenOption.classList.add('hide');
    resetResult();
    
    if(myTaskValue === 'order-cake') {
        sickOption.classList.remove('hide');
    }
    else if(myTaskValue === 'stitch-dress') {
        if(this.event.target.name === 'clothGiven') {
            fittingGivenOption.classList.remove('hide');
        }
        clothGivenOption.classList.remove('hide');
    }
}

function resetFittingOption() {
    const fittingGiven = document.querySelector('#fittingGiven');
    fittingGiven.selectedIndex = 0;
}

function orderCake() {
    return new Promise((resolve, reject) => {
        const sickOption = document.querySelector('#sick');

        if(sickOption.value === 'false') {
            resolve('Cake is ready for Delivery...!!');
        }
        else {
            reject('Sorry...!! Could not deliver your cake..!!');
        }
    });
}

function clothCheck() {
    return new Promise((resolve, reject) => {
        const clothGiven = document.querySelector('#clothGiven');

        if(clothGiven.value === 'true') {
            resolve(true);
        }
        else {
            resetFittingOption();
            reject('Please submit cloth to stitch..!!');
        }
    });
}

function fittingCheck(res) {
    return new Promise((resolve, reject) => {
        const fittingGiven = document.querySelector('#fittingGiven');

        if(fittingGiven.value === 'true' && res) {
            resolve('Party dress ready to wear...!!');
        }
        else {
            reject('Please submit fitting for dress..!!');
        }
    });
}

// function invokeStitchDressFn() {
//     clothCheck()
//     .then((res) => {
//         return fittingCheck(res);
//     })
//     .then((res) => {
//         resetResult();
//         showFn(resultEle, 'Success : ' + res);
//     })
//     .catch((errMsg) => {
//         resetResult();
//         showFn(errorEle, 'Failed : ' + errMsg);
//     })
// }

// function invokeOrderCakeFn() {
//     orderCake().then((res) => {
//         resetResult();
//         showFn(resultEle, 'Success : ' + res);
//     }).catch((errMsg) => {
//         resetResult();
//         showFn(errorEle, 'Failed : ' + errMsg);
//     })
// }

// using async await 

async function invokeOrderCakeFn() {
    try {
        resetResult();
        const res = await orderCake();
        showFn(resultEle, 'Success : ' + res);
    }
    catch(e) {
        resetResult();
        showFn(errorEle, 'Failed : ' + e);
    }
}

async function invokeStitchDressFn() {
    try {
        resetResult();
        const res = await clothCheck();
        const fittingRes = await fittingCheck(res);
        showFn(resultEle, 'Success : ' + fittingRes);

    }
    catch(e) {
        resetResult();
        showFn(errorEle, 'Failed : ' + e);
    }

}