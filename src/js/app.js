// Bootstrap Tooltip
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltipEl => {
  new bootstrap.Tooltip(tooltipEl);  
})
console.log("Hello World")

// splide js 
addEventListener("DOMContentLoaded", function(){
var splide = new Splide( '.splide', {
  perPage: 4,
  gap: '16px',
  type: 'loop',
  focus: 'center',
  autoplay: true,
  interval: 5000,
  rewind : true,
  pagination: false,
  arrows: false,
  breakpoints: {
    1200: {
      perPage: 2,
    },
    767: {
      perPage: 2,
      pagination: true,
    },
    500: {
      perPage: 1,
    }
  },
} );

splide.mount();  
});
