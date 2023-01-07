
// _________NEXT BUTTON__________

let next = document.querySelectorAll('.nextBtn');
let index = 0;
const pages = ['info', 'plan', 'addOn', 'summary'];
const steps = ['step1', 'step2', 'step3', 'step4'];


next.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (validateForm()) {
            document.getElementById(pages[index]).style.display = 'none';
            document.getElementById(pages[index + 1]).style.display = 'flex';
            document.getElementById(steps[index]).classList.remove('stepActive');
            document.getElementById(steps[index + 1]).classList.add('stepActive');
            document.getElementById('mobBack').style.display = 'flex';
            index++;
            if (index == 3) {
                document.getElementById('mobNext').style.display = 'none';
                document.getElementById('mobConfirm').style.display = 'block';
            }
        }
    })
})


// ________BACK BUTTON_____________

let back = document.querySelectorAll('.backBtn');

back.forEach((ele) => {
    ele.addEventListener('click', () => {
        document.getElementById('mobNext').style.display = 'block';
        document.getElementById('mobConfirm').style.display = 'none';
        document.getElementById(pages[index - 1]).style.display = 'flex';
        document.getElementById(pages[index]).style.display = 'none';
        document.getElementById(steps[index - 1]).classList.add('stepActive');
        document.getElementById(steps[index]).classList.remove('stepActive');
        index--;
        if (index == 0) {
            document.getElementById('mobBack').style.display = 'none';
        }
    })
})

//  _____________CHANGEPLAN BUTTON

document.getElementById('changePlan').addEventListener('click', () => {
    document.getElementById('plan').style.display = 'flex';
    document.getElementById('addOn').style.display = 'none';
    document.getElementById('summary').style.display = 'none';
    document.getElementById('info').style.display = 'none';
    document.getElementById('mobNext').style.display = 'block';
    document.getElementById('mobConfirm').style.display = 'none';

    document.getElementById('step2').classList.add('stepActive');
    document.getElementById('step4').classList.remove('stepActive');
    index = 1;

    addCheck.forEach((ele) => {
        ele.checked = false;
        ele.parentElement.classList.remove('activePlan');
    })
    cname.forEach((ele) => {
        ele.parentElement.style.display = 'none';
    })
})


// ____________CONFIRM BUTTON

document.getElementById('confirm').addEventListener('click', displayFinish)

document.getElementById('mobConfirm').addEventListener('click', displayFinish)

function displayFinish() {
    document.getElementById('finish').style.display = 'flex';
    for (let n = 0; n < pages.length; n++) {
        document.getElementById(pages[n]).style.display = 'none';
    }
}

// _-_-_-_-_-_-_-FORM VALIIDATION---------

function clearErrors() {
    errors = document.getElementsByClassName('error');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length == 0) {
        seterror("name", "This field is required");
        returnval = false;
    }

    var email = document.forms['myForm']["fmail"].value;
    if (email.length == 0) {
        seterror("mail", "This field is required");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length == 0) {
        seterror("phone", "This field is required");
        returnval = false;
    }

    return returnval;
}

// ------Step 2 toggle button

let chkBtn = document.getElementById('check');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let month = document.getElementById('month');
let year = document.getElementById('year');
let duration = true;

chkBtn.addEventListener('click', () => {
    plan1.classList.remove('activePlan');
    plan2.classList.remove('activePlan');
    plan3.classList.remove('activePlan');
    addCheck.forEach((ele) => {
        ele.checked = false;
        ele.parentElement.classList.remove('activePlan');
    })
    cname.forEach((ele) => {
        ele.parentElement.style.display = 'none';
    })
    if (p1.innerText.includes('mo')) {
        p1.innerHTML = "$90/yr";
        p2.innerHTML = "$120/yr";
        p3.innerHTML = "$150/yr";
        p4.innerHTML = "+$10/yr";
        p5.innerHTML = "+$20/yr";
        p6.innerHTML = "+$20/yr";
        document.querySelectorAll('.free').forEach((elem) => {
            elem.style.display = 'block';
        });
        month.style.color = "hsl(231, 11%, 63%)";
        year.style.color = "hsl(213, 96%, 18%)";
        duration = false;
    }
    else if (p1.innerText.includes('yr')) {
        p1.innerHTML = "$9/mo";
        p2.innerHTML = "$12/mo";
        p3.innerHTML = "$15/mo";
        p4.innerHTML = "+$1/mo";
        p5.innerHTML = "+$2/mo";
        p6.innerHTML = "+$2/mo";
        document.querySelectorAll('.free').forEach((elem) => {
            elem.style.display = 'none';
        });
        year.style.color = "hsl(231, 11%, 63%)";
        month.style.color = "hsl(213, 96%, 18%)";
        duration = true;
    }
});

// Adding Event Listener to plans

let plan1 = document.getElementById('plan1');
let plan2 = document.getElementById('plan2');
let plan3 = document.getElementById('plan3');
let mainPlan = document.getElementById('selectedPlan');
let mainPlanPrice = document.getElementById('selectedPlanPrice');
plan1.classList.add('activePlan');
let plans = [plan1, plan2, plan3];

plan1.addEventListener('click', () => {planChange(plans[0], plans[1], plans[2])});

plan2.addEventListener('click', () => {planChange(plans[1], plans[2], plans[0])});

plan3.addEventListener('click', () => {planChange(plans[2], plans[0], plans[1])});


function planChange(plan, plans, planp){
    plan.classList.add('activePlan');
    plans.classList.remove('activePlan');
    planp.classList.remove('activePlan');
    addCheck.forEach((ele) => {
        ele.checked = false;
        ele.parentElement.classList.remove('activePlan');
    })
    cname.forEach((ele) => {
        ele.parentElement.style.display = 'none';
    })

    prArr = [];

    let planName = plan.getElementsByClassName('planName');
    let planPrice = plan.getElementsByClassName('planPrice');
    if (duration) {
        mainPlan.innerHTML = planName[0].innerHTML + "(Monthly)";
    }
    else {
        mainPlan.innerHTML = planName[0].innerHTML + "(Yearly)";
    }
    mainPlanPrice.innerHTML = planPrice[0].innerHTML;
    document.getElementById('tp').innerHTML = planPrice[0].innerHTML;
}


// Step 3 & Step 4

let addCheck = document.querySelectorAll('.addCheck');
let cname = document.querySelectorAll('.serviceName');
let prArr = [];

addCheck.forEach((elem) => {
    elem.addEventListener('change', () => {
        let name = elem.nextElementSibling.getElementsByClassName('addOnName')[0].innerHTML;
        let price = elem.nextElementSibling.nextElementSibling.innerHTML;
        if (elem.checked == true) {
            elem.parentElement.classList.add('activePlan');
            cname.forEach((e) => {
                if (name == e.innerHTML) {
                    e.parentElement.style.display = 'flex';
                    e.nextElementSibling.innerHTML = price;
                }
            })
            let mpp = parseInt(mainPlanPrice.innerHTML.match(/\d+/g));
            let pr = parseInt(price.match(/\d+/g));
            prArr.push(pr);
            for (let i = 0; i < prArr.length; i++) {
                mpp = mpp + prArr[i];
            }
            if (price.includes('mo')) {
                document.getElementById('tp').innerHTML = "+$" + mpp + "/mo";
            }
            else {
                document.getElementById('tp').innerHTML = "+$" + mpp + "/yr";
            }
        }
        else {
            elem.parentElement.classList.remove('activePlan');
            let pr = parseInt(price.match(/\d+/g));
            let mpp = parseInt(mainPlanPrice.innerHTML.match(/\d+/g));
            for (let i = 0; i < prArr.length; i++) {
                if (prArr[i] == pr) {
                    let remEle = prArr.indexOf(prArr[i]);
                    prArr.splice(remEle, 1);
                }
                mpp = mpp + prArr[i];
            }
            if (price.includes('mo')) {
                document.getElementById('tp').innerHTML = "+$" + mpp + "/mo";
            }
            else {
                document.getElementById('tp').innerHTML = "+$" + mpp + "/yr";
            }

            cname.forEach((e) => {
                if (name == e.innerHTML) {
                    e.parentElement.style.display = 'none';
                }
            })
        }

    })
})

