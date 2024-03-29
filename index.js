function calculateExtraSales() {
    const extrasInput = document.getElementById('extras');
    const gcInput = document.getElementById('gc');
    const resultInput = document.getElementById('resultado');
  
    if (isNaN(extrasInput.value) || isNaN(gcInput.value)) {
      alert('Por favor ingresa datos en Extras y GC\'s.');
      return;
    }
  
    const extras = parseFloat(extrasInput.value, 10);
    const gc = parseFloat(gcInput.value, 10);
  
    let percentaje = 0;
    if (gc !== 0) {
      percentaje = Math.round((extras / gc) * 100);
    } else if (extras === 0) {
      percentaje = 0;  
    } else {
      alert('por favor ingresa un valor superior a 0 en gcs');
      return;
    }
  

    resultInput.value = `${percentaje}%`;
  }