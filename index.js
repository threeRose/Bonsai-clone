const product = document.querySelector('#product1');
const templates = document.querySelector('#templates');

const productIn = document.querySelector('#product1-in');
const templatesIn = document.querySelector('#templates-in');

product.addEventListener('click', function () {
    if (productIn.style.display == "block"){
        productIn.style.display = "none";
    }else {
        productIn.style.display = "block";
    }
})
product.addEventListener('focusout', function() {
    productIn.style.display = "none";
})

templates.addEventListener('click', function(){
    if (templatesIn.style.display == "block"){
        templatesIn.style.display = "none";
    }else {
        templatesIn.style.display = "block";
    }
})
templates.addEventListener('focusout', function() {
    templatesIn.style.display = "none";
})



const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#closeIcon');

const navbarSecond = document.querySelector('#navbarSecond');

menuIcon.addEventListener('click', function() {
    navbarSecond.style.display = "flex";
})

closeIcon.addEventListener('click', function() {
    navbarSecond.style.display = "none";
})

// SWITCH PART

const swit = document.querySelector('#swit1');
const monthly = document.querySelector('#monthly');
const yearly = document.querySelector('#yearly');


swit.addEventListener('change', function() {

    if(!swit.checked) {
        monthly.style.color = "#4c525a";
    }else {
        monthly.style.color = "#696a6cd2";
    }
})
swit.addEventListener('change', function() {

    if(swit.checked) {
        yearly.style.color = "#4c525a";
    }else {
        yearly.style.color = "#696a6cd2";
    }
})


const s21 = document.querySelector('#s21');
const s22 = document.querySelector('#s22');
const s23 = document.querySelector('#s23');
const billed = document.querySelectorAll('.billed')

swit.addEventListener('change', function() {
    
    if(swit.checked) {
        s21.innerText = "17";
        s22.innerText = "32";
        s23.innerText = "52";
    }else {
        s21.innerText = "24";
        s22.innerText = "39";
        s23.innerText = "79";
    }
})

swit.addEventListener('change', function() {
    if(swit.checked) {
        billed.forEach(bill => {
            bill.style.display ="block";
        })
    }else {
        billed.forEach(bill => {
            bill.style.display ="none";
        })
    }
})


// SECTION 3 MONTH / YEAR

const sp2 = document.querySelector('#sp2');
const sp3 = document.querySelector('#sp3');
const spM = document.querySelectorAll('.spM');
const section3 = document.querySelector('.section3')

swit.addEventListener('change', function() {
    if(swit.checked) {
        section3.style.flexDirection = "column-reverse";
        sp2.innerText = "$90";
        sp3.innerText = "$100";
    }else {
        section3.style.flexDirection = "column";
        sp2.innerText = "$9";
        sp3.innerText = "$10";
    }
})

swit.addEventListener('change', function() {
    if(swit.checked) {
        spM.forEach(sp => {
            sp.innerText = "/YEAR";
        })
    }else {
        spM.forEach(sp => {
            sp.innerText = "/MONTH";
        })
    }
})

// SECTION5 QUESTIONS 

const s5B1 = document.querySelector('#section5Btn1')
const s5B2 = document.querySelector('#section5Btn2')
const s5B3 = document.querySelector('#section5Btn3')
const s5B4 = document.querySelector('#section5Btn4')


const s5P1 = document.querySelector('#section5P1')
const s5P2 = document.querySelector('#section5P2')
const s5P3 = document.querySelector('#section5P3')
const s5P4 = document.querySelector('#section5P4')

s5B1.addEventListener('click', function() {
    if(s5P1.style.display == "block") {
        s5P1.style.display = "none";
    }else {
        s5P1.style.display = "block";
    }
})

s5B2.addEventListener('click', function() {
    if(s5P2.style.display == "block") {
        s5P2.style.display = "none";
    }else {
        s5P2.style.display = "block";
    }
})

s5B3.addEventListener('click', function() {
    if(s5P3.style.display == "block") {
        s5P3.style.display = "none";
    }else {
        s5P3.style.display = "block";
    }
})
s5B4.addEventListener('click', function() {
    if(s5P4.style.display == "block") {
        s5P4.style.display = "none";
    }else {
        s5P4.style.display = "block";
    }
})


// FOOTER BUTTONS

const footerBtn1 = document.querySelector('#footerBtn1')
const footerBtn2 = document.querySelector('#footerBtn2')
const footerBtn3 = document.querySelector('#footerBtn3')
const footerBtn4 = document.querySelector('#footerBtn4')
const footerBtn5 = document.querySelector('#footerBtn5')

const footerHP1 = document.querySelector('#footerHideLink1')
const footerHP2 = document.querySelector('#footerHideLink2')
const footerHP3 = document.querySelector('#footerHideLink3')
const footerHP4 = document.querySelector('#footerHideLink4')
const footerHP5 = document.querySelector('#footerHideLink5')

footerBtn1.addEventListener('click', function () {
    if (footerHP1.style.display == "flex") {
        footerHP1.style.display = "none";
    }else {
        footerHP1.style.display = "flex";
}
})

footerBtn2.addEventListener('click', function () {
    if (footerHP2.style.display == "flex") {
        footerHP2.style.display = "none";
    }else {
        footerHP2.style.display = "flex";
}
})

footerBtn3.addEventListener('click', function () {
    if (footerHP3.style.display == "flex") {
        footerHP3.style.display = "none";
    }else {
        footerHP3.style.display = "flex";
}
})

footerBtn4.addEventListener('click', function () {
    if (footerHP4.style.display == "flex") {
        footerHP4.style.display = "none";
    }else {
        footerHP4.style.display = "flex";
}
})

footerBtn5.addEventListener('click', function () {
    if (footerHP5.style.display == "flex") {
        footerHP5.style.display = "none";
    }else {
        footerHP5.style.display = "flex";
}
})