const cardExterior = $('.card-exterior');
const cardExteriorContent = $('.card-exterior-content');
const cardExteriorContentFront = $('.card-exterior-content-front');
const cardExteriorContentBack = $('.card-exterior-content-back');

function toggleCard() {
  if (!cardExterior.hasClass('open')) {
    cardExterior.addClass('open');
    window.setTimeout(() => {
      cardExteriorContent.css({
        'box-shadow': 'inset -1px 1px 2px hsla(270, 10%, 50%, 1)'
      });
      cardExteriorContentFront.addClass('hide');
      cardExteriorContentBack.removeClass('hide');
    }, 165);
  } else {
    cardExterior.removeClass('open');
    window.setTimeout(() => {
      cardExteriorContent.css({
        'box-shadow': 'inset 1px 1px 2px hsla(270, 10%, 50%, 1)'
      });
      cardExteriorContentFront.removeClass('hide');
      cardExteriorContentBack.addClass('hide');
    }, 225);
  }
}

$('.card').click(toggleCard);
$('.card').on('tap', toggleCard);

$(window).on('load', () => {
  $('body').sakura('start', {
    fallSpeed: 1.5,
    maxSize: 13,
    minSize: 10,
    newOn: 450
  });
});
