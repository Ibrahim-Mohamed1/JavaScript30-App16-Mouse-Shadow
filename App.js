const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const walk = 500;

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
  }