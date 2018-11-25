const cardExterior = $('.card-exterior');
const cardExteriorContent = $('.card-exterior-content');
const cardExteriorContentFront = $('.card-exterior-content-front');
const cardExteriorContentBack = $('.card-exterior-content-back');

function toggleCardOpenClose() {
  // Open/close card on click/tap.
  if (!cardExterior.hasClass('card-exterior__open')) {
    cardExterior.addClass('card-exterior__open');
    window.setTimeout(() => {
      cardExteriorContent.addClass('card_exterior-content__open');
      cardExteriorContentFront.addClass('card_exterior-content__hidden');
      cardExteriorContentBack.removeClass('card_exterior-content__hidden');
    }, 160);
  } else {
    cardExterior.removeClass('card-exterior__open');
    window.setTimeout(() => {
      cardExteriorContent.removeClass('card_exterior-content__open');
      cardExteriorContentFront.removeClass('card_exterior-content__hidden');
      cardExteriorContentBack.addClass('card_exterior-content__hidden');
    }, 210);
  }

  preventClickSpam();
}

// Remove click/tap listeners for 500ms (prevents click spamming).
function preventClickSpam() {
  $('.card').off('click');
  $('.card').off('tap');
  window.setTimeout(() => {
    $('.card').click(toggleCardOpenClose);
    $('.card').on('tap', toggleCardOpenClose);
  }, 500); // Value corresponds to .card-exterior "transition" attribute.
}

// Set initial event listeners.
$('.card').click(toggleCardOpenClose);
$('.card').on('tap', toggleCardOpenClose);

// Apply custom configuration settings to jQuery-Sakura.
$(window).on('load', () => {
  $('body').sakura('start', {
    fallSpeed: 1.5,
    maxSize: 13,
    minSize: 10,
    newOn: 450
  });
});
