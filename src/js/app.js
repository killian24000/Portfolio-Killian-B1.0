// Bootstrap Tooltip
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltipEl => {
  new bootstrap.Tooltip(tooltipEl);  
})
console.log("Hello World")

// splide js 
addEventListener("DOMContentLoaded", function(){
var splide = new Splide( '.splide', {
  perPage: 3,
  gap: '16px',
  type: 'loop',
  focus: 'center',
  rewind : true,
  pagination: false,
  arrows: false,
  autoScroll: {
    speed: 0.5,
    pauseOnHover: true,
    pauseOnFocus: true,
  },
  breakpoints: {
    1200: {
      perPage: 2,
      autoScroll: false,
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

splide.mount(window.splide.Extensions);  
});
