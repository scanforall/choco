$('#open-modal-menu').click(e => {
  e.preventDefault();

  $.fancybox.open({
    src: "#modal-menu",
    type: "inline",
  });
})


$('#app-close-modal-menu').click(e => {
  e.preventDefault();
  $.fancybox.close();
})