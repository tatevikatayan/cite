
let catalog = document.querySelectorAll('.catalog__about-wrapper');
catalog.forEach(function (item) {
  item.addEventListener('click', function () {
    let itemClosest = item.childNodes[3];
    let itemAbout = item.childNodes[1].parentElement;
    console.log(itemAbout)
      itemClosest.style.opacity = 1;
      itemAbout.style.opacity = 1;
  })
})
 $(function(){
    $('.menu__burger').on('click', function() {
       $('.header__burger-menu').toggleClass('visible');
    });

    $('.search__link').on('click', function() {
       $('.is-open').css('display', 'flex');

    });
    $('.close-auth').on('click', function() {
      $('.is-open').css('display', 'none');
    });
    $('.btn-vin').on('click', function() {
      $('.request').css('display', 'block');
    
    });
    $('.close-svg_head').on('click', function() {
      $('.request').css('display', 'none');
    
    });
   
    $('.products__items').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
   
      prevArrow: '<button type="button" class="slick-prev slick-arrows"><img src="images/arrow_left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrows"><img src="images/arrow_right.svg" alt=""></button>',
  
        responsive: [
          {
            breakpoint: 1441,
            settings: {
        
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 986,
            settings: {
        
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 641,
            settings: {
        
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
           
            }
          }
        ]
    });
})

