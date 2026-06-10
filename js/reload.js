path = '//*[text()="No tasks are currently available.  Please try again later." or contains(text(), "No tasks are currently available")]';
r = document.evaluate(path, document, null, XPathResult.BOOLEAN_TYPE, null);

if (r.booleanValue) {
    // Calcula um tempo aleatório entre 89 e 199 segundos (em ms)
    const min = 89000;
    const max = 199000;
    const tempoAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    
    console.log(`Próximo refresh em ${Math.round(tempoAleatorio / 1000)} segundos.`);
    
    setTimeout(() => {
        window.location.href = 'https://www.raterhub.com/evaluation/rater';
    }, tempoAleatorio);
} else {
    s = chrome.extension.getURL("sounds/airport_tonne.mp3");
    x = new Audio(s);
    x.play();
}
