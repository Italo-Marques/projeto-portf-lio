function onClickNavHandler() {
    for (const link of document.querySelectorAll("nav li a")) {
      link.addEventListener('click', function(event) {

        document.querySelectorAll("nav li a")
          .forEach(el => document.querySelector(`.${el.getAttribute('href').substring(1)}`).style.display = 'none');

        document.querySelectorAll("nav li a")
          .forEach(el => el.classList.remove('active'));

        document.querySelector(`.${event.currentTarget.getAttribute('href').substring(1)}`).style.display = "flex";

        link.classList.add('active');
      })
    }
  }
  
  onClickNavHandler();