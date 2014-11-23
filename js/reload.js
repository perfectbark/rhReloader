path = '//*[text()="No tasks are currently available.  Please try again later."]';
r = document.evaluate(path, document, null, XPathResult.BOOLEAN_TYPE, null );

if (r.booleanValue)
{
  alert(r.booleanValue);
  //setTimeout("window.location.href = 'https://www.raterhub.com/evaluation/rater'",30000);
}
else
{
  s = chrome.extension.getURL("sounds/airport_tonne.mp3");
  x = new Audio(s);
  x.play();
}
