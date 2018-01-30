$(document).ready(function() {
  objFunctions.limitWidthImg('img', '100%');
  objFunctions.changeHeightImg('img', 'auto', true);
  objFunctions.hoverCardify('.cardify figure', 'pink');
  objFunctions.hoverSlide('.slide figure', '1.3', '30');
  //objFunctions.applyColorOpacity('figure', 'black', '.5');
  objFunctions.hoverLargeScale('.zoom-in figure', 1.3);
  objFunctions.hoverNormalScale('.zoom-out figure', 1.5);
});