(function () {
  const SNOW_COUNT = 250; // adjust if needed

  function ensureSnowContainer() {
    if (!document.getElementById('snow')) {
      const div = document.createElement('div');
      div.id = 'snow';
      div.style.position = 'fixed';
      div.style.top = 0;
      div.style.left = 0;
      div.style.width = '100%';
      div.style.height = '100%';
      div.style.pointerEvents = 'none';
      div.style.overflow = 'hidden';
      div.style.zIndex = 9999;
      document.body.appendChild(div);
    }
  }

  function addSnowflakes(count) {
    const snowContainer = document.getElementById('snow');
    snowContainer.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const flake = document.createElement('div');
      flake.className = 'snowflake';
      flake.style.position = 'absolute';
      flake.style.top = '-10px';
      flake.style.left = Math.random() * 100 + 'vw';
      flake.style.width = Math.random() * 5 + 3 + 'px';
      flake.style.height = flake.style.width;
      flake.style.background = 'white';
      flake.style.borderRadius = '50%';
      flake.style.opacity = Math.random();
      flake.style.animation = `fall-${i} ${10 + Math.random() * 20}s linear infinite`;
      snowContainer.appendChild(flake);
    }
  }

  function addSnowCSS(count) {
    const style = document.createElement('style');
    let css = '';
    for (let i = 0; i < count; i++) {
      const xMove = Math.random() * 20 - 10;
      const yMove = 100 + Math.random() * 10;
      css += `
        @keyframes fall-${i} {
          0% { transform: translate(0, 0); }
          50% { transform: translate(${xMove}vw, ${yMove / 2}vh); }
          100% { transform: translate(${xMove * 2}vw, ${yMove}vh); }
        }
      `;
    }
    style.innerHTML = css;
    document.head.appendChild(style);
  }

  function initSnow() {
    ensureSnowContainer();
    addSnowCSS(SNOW_COUNT);
    addSnowflakes(SNOW_COUNT);
  }

  window.addEventListener('load', initSnow);
})();