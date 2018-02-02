const documentation = {
  'cardify': {
    title: `Cardify`,
    description: `Displays alt attribute on hover.`,
    function: `objFunctions.hoverCardify(selectorName, color);`,
    use: `You must choose two parameters: a parent element of all images you
    want to apply the effect and a background color for the text.`,
    important: `The parent element must be a class or a tag, does not works with IDs`,
    example: `<figure class="cardify" onmouseover="objFunctions.hoverCardify(this, '#7d2535')"><img src="assets/img/akane.jpg" alt="Akane Sleeping" width="100%"></figure>`
  },
  'overlay': {
    title: `Overlay`,
    description: `Displays an overlay with the alt attribute inside.`,
    function: ``
  },
  'apply': {},
  'remove': {},
  'zoom in': {
    title: `Zoom In`,
    description: `Add a zoom effect to image.`,
    function: `objFunctions.hoverLargeScale(selectorName, scale)`,
    use: `You must choose two parameters: a parent element of all images you
    want to apply the effect and a size for the zoom scale.`,
    important: `The parent element must be a class or a tag, does not works with IDs`,
    example: `<figure class="zoom-in" onmouseover="objFunctions.hoverLargeScale(this, 1.3)"><img src="assets/img/akane.jpg" alt="Akane Sleeping" width="100%"></figure>`
  },
  'zoom out': {
    title: `Zoom In`,
    description: `Add a zoom effect to image.`,
    function: `objFunctions.hoverNormalScale(selectorName, scale)`,
    use: `You must choose two parameters: a parent element of all images you
    want to apply the effect and a size for the zoom scale.`,
    important: `The parent element must be a class or a tag, does not works with IDs`,
    example: `<figure class="zoom-in" onmouseover="objFunctions.hoverNormalScale(this, 1.4)"><img src="assets/img/akane.jpg" alt="Akane Sleeping" width="100%"></figure>`
  }
};