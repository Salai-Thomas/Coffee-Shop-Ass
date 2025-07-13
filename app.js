
Swal.fire({
  title: "<h3 class='overflow-hidden'>Do You Want To Subscribe?</h3>",
  text: "We have Special Discount For Subscrbed Users.",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Subscribe",
}).then((result) => {
  if (result.isConfirmed) {
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
    //  window.location.href = "Events/event.html";
  }
});







