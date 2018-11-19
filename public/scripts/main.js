const cardExterior = $('.card-exterior');
const cardExteriorContent = $('.card-exterior-content');
const cardExteriorContentFront = $('.card-exterior-content-front');
const cardExteriorContentBack = $('.card-exterior-content-back');

function toggleCard() {
  // Open/close card on click/tap:
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

  // Remove click/tap listeners for 500ms (prevents click spamming):
  $('.card').off('click');
  $('.card').off('tap');
  window.setTimeout(() => {
    $('.card').click(toggleCard);
    $('.card').on('tap', toggleCard);
  }, 500);
}

// Set initial event listeners:
$('.card').click(toggleCard);
$('.card').on('tap', toggleCard);

// Apply custom configuration settings to jQuery-Sakura:
$(window).on('load', () => {
  $('body').sakura('start', {
    fallSpeed: 1.5,
    maxSize: 13,
    minSize: 10,
    newOn: 450
  });
});
