$(window).load(() => {
  $('body').sakura('start', {
    fallSpeed: 1.5,
    maxSize: 13,
    minSize: 10,
    newOn: 450
  });
});

$('.card').click(toggleCard);
$('.card').on('tap', toggleCard);

function toggleCard() {
  const cardExterior = $('.card-exterior');
  if (!cardExterior.hasClass('open')) {
    cardExterior.addClass('open');
    window.setTimeout(() => {
      cardExterior.addClass('hide-text');
    }, 165);
  } else {
    cardExterior.removeClass('open');
    window.setTimeout(() => {
      cardExterior.removeClass('hide-text');
    }, 225);
  }
}
