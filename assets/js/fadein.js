const fadeElements = document.querySelectorAll('.fadein');

const observer = new IntersectionObserver(function(entries){

  entries.forEach(function(entry){

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

});

fadeElements.forEach(function(el){
  observer.observe(el);
});