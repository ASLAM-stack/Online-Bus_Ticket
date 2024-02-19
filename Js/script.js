const seats = document.querySelectorAll('.seat');
let count = 0;
let seatAvailable = 40;
let totalPrice = 0;
let grandTotal = 0;
const ticketPrice = 550;

for (const seat of seats) {
  seat.addEventListener('click', function () {
    count++;
    seatAvailable = seatAvailable - 1;
    const seatName = seat.querySelector('span').innerText;
    const seatAdded = showElementById('seat-added');




    if (count <= 4) {

      const newBg = document.getElementById(seatName).classList.add('bg-[#1DD100]');

      const Bg = document.getElementById(seatName).classList.remove('bg-[#F7F8F8]');

      totalPrice = ticketPrice * count;
      grandTotal = ticketPrice * count;

      document.getElementById('total-price').innerText = totalPrice;
      document.getElementById('grand-total').innerText = grandTotal;

      const totalSelectedSeat = setInnerTextById('seat-count', count);
      const totalSeatAvailable = setInnerTextById('available-seat', seatAvailable);
      const li = document.createElement('li');
      const d1 = document.createElement('div');
      d1.innerText = seatName;
      const d2 = document.createElement('div');
      d2.innerText = 'Economy';
      const d3 = document.createElement('div');
      d3.innerText = ticketPrice;
      li.appendChild(d1);
      li.appendChild(d2);
      li.appendChild(d3);
      const classOfLi = li.classList;
      classOfLi.add('flex', 'justify-between');
      const seatAddedDiv = document.getElementById('seat-added');
      seatAddedDiv.appendChild(li);
      const selected = seatAddedDiv.childNodes[1].childNodes[0].innerText;
      seat.setAttribute('disabled', '');


      const phone = document.getElementById('input-mobile');
      phone.addEventListener('keyup', function () {
        const phoneNum = phone.value.length;
        if (totalPrice >= 550 && phoneNum > 0) {
          const buttonNext = document.getElementById('next-button');
          console.log(buttonNext);
          buttonNext.removeAttribute('disabled', true);
        }
      })


      if (totalPrice === 2200) {
        const buttonApply = document.getElementById('apply-button');
        buttonApply.removeAttribute('disabled', true);
        const couponField = document.getElementById('coupon-input-field');
        couponField.removeAttribute('disabled', true);


      }




    }

    else {
      alert('You can  buy only 04 tickets at time')
    }
  })

}










function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  const element1 = element.classList;
  element1.add('hidden');
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  const element1 = element.classList;
  element1.remove('hidden');
}






function getInnerTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText
  return text;
}

function setInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  const element1 = element.innerText = value;
  return element1;
}







const applyButton = document.getElementById('apply-button');
applyButton.addEventListener('click', function () {



  const couponCode = document.getElementById('coupon-input-field');

  const couponText = couponCode.value;



  if (totalPrice === 2200) {
    if (couponText === 'NEW15') {
      const grandTotal1 = document.getElementById('grand-total');

      const discount = document.getElementById('total-discount');

      const discountedPrice = totalPrice * 15 / 100;

      discount.innerText = discountedPrice;
      showElementById('discount-hidden');
      grandTotal1.innerText = grandTotal - discountedPrice;


      hideElementById('coupon-container');


    }
    else if (couponText === 'Couple 20') {
      const grandTotal1 = document.getElementById('grand-total');

      const discount = document.getElementById('total-discount');

      const discountedPrice = totalPrice * 20 / 100;

      discount.innerText = discountedPrice;
      showElementById('discount-hidden');
      grandTotal1.innerText = grandTotal - discountedPrice;
      hideElementById('coupon-container');






    }
    else {
      alert('Please enter a valid coupon code.')
      document.getElementById('coupon-input-field').value = '';


    }
  }

  else {
    alert('To apply this code you have to buy 04 tickets.')
    document.getElementById('coupon-input-field').value = '';

  }

})




function purchesConfirm() {
  const totalPrice = document.getElementById('total-price');
  const amount = totalPrice.innerText;
  const amount1 = parseFloat(amount);
  if (amount > 0) {
    my_modal_4.showModal();

  }
  else {
    alert('Please Select an Item.')
  }
}
function allClose(){
  location.reload();
}
