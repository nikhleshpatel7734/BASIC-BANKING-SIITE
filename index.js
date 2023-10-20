
console.log("sksksksk")
let popup = document.getElementById('popup');
let history = document.getElementById('history');

function openPopup(){
  popup.classList.add('open-popup')
  popup.classList.remove('close-popup')

}
function closePopup(){
//   popup.classList.remove('open-popup')
//   history.classList.remove('open-popup')
  popup.classList.add('close-popup')
  history.classList.add('close-popup')

}
function historyFun(){
  history.classList.add('open-popup')
  history.classList.remove('close-popup')

}

// let myAccountBalance = parseInt(document.getElementsById("myAccountBalance").innerText);
// const play = document.getElementById('but');
// const svgContainer = document.getElementById('svg');
// const animItem = bodymovin.loadAnimation({
//     wrapper: svgContainer,
//     animType: 'svg',
//     loop: false,
//     autoplay: false,
//     path: "https://assets7.lottiefiles.com/packages/lf20_wkebwzpz.json"
// });

// play.addEventListener('click', () => {
//     // animItem.play();
//     svgContainer.classList.remove('hide');
//     animItem.goToAndPlay(0,true);
// })

// animItem.addEventListener('complete', () => {
//     svgContainer.classList.add('hide');
    
// })
var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

const play = document.getElementById('but');
const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets7.lottiefiles.com/packages/lf20_wkebwzpz.json"
});
function transfer(){

    var enterName = document.getElementById("enterRName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var enterSName = document.getElementById("enterSName").value;
    var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    
    
    if (isNaN(enterAmount) || enterAmount > enterSAmount ){
        alert("Insufficient Balance! or invalid credentials🔐🔐")
    }else{
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        svgContainer.classList.remove('hide');
        animItem.goToAndPlay(0,true);

        animItem.addEventListener('complete', () => {
            svgContainer.classList.add('hide');
            closePopup();
            
        })

        // alert(`Transaction Successful! ₹${enterAmount} is sent to ${enterName}@gmail.com`)

        //transaction history
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`₹ ${enterAmount} is sent from the sender with email-id ${enterSName}@gmail.com to recepient with email-id ${enterName}@gmail.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transactionHistoryBody");
        element.insertBefore(createPTag, element.firstChild);
    }
    
}