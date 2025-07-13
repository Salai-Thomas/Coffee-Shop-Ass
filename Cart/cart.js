$(document).ready(function(){
let orderlines = [
  {"product":"Cappuccino","price":20,"qty":2},
  {"product":"Choco Cappuccino","price":20,"qty":3},
  {"product":"Choco Coffee","price":30,"qty":4},
];

  function updateRowUI(index) {
    let row = $(`#item${index}`);
    row.find('.qty').text(orderlines[index].qty);
    row.find('.total').text(orderlines[index].qty * orderlines[index].price);
  }
function updateOrderSummary() {
  let subtotal = 0;
  orderlines.forEach(function(line) {
    subtotal += line.qty * line.price;
  });

  $('.subtotal').text(`$${subtotal}`);
  $('.order-total').text(`$${subtotal}`);
}
orderlines.forEach(function(line,index){

  $('#orderlines').append(
    `<tr id="item${index}">
    <td>${line.product}</td>
    <td>${line.price}</td>
    <td class="text-center"><a class="btn increment" data-index="${index}"><i class="bi bi-plus-circle"></i></a><span class='qty'>${line.qty}</span><a class="btn decrement" data-index="${index}"><i class="bi bi-dash-circle"></i></a></td>
    <td class="text-end"><span class='total'>${line.qty * line.price}</span></td>
    </tr>`
  );

});


  $(document).on('click', '.increment', function() {
    let index = $(this).data('index');
    orderlines[index].qty += 1;
    updateRowUI(index);
    updateOrderSummary();
  });

  $(document).on('click', '.decrement', function() {
    let index = $(this).data('index');
    if(orderlines[index].qty != 0){
      orderlines[index].qty -= 1;
      updateRowUI(index);
      updateOrderSummary();
    }

  });


});



