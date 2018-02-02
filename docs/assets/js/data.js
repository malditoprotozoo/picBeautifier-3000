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
    function: `objFunctions.addOverlay(container, width, colorBackground, colorText)`,
    use: `You must choose four parameters: a parent element of all the images you want yo apply this effect, a width for such element,
    a background color for the overlay and the color of your text.`,
    important: `The parent element must be a class or a tag, does not works with IDs`,
    example: `<figure class="overlay" onmouseover="objFunctions.addOverlay(this, '100%', '#7d2535', 'white')"><img src="assets/img/akane.jpg" alt="Akane Sleeping" width="100%"></figure>`
  },
  'apply': {
    title: 'Apply Filter',
    description: `Apply any CSS filter that requires a percentage value, like: brightness, contrast, grayscale,
    invert, opacity and sepia.`,
    function: `objFunctions.applyFilteryHover(selectorName, filter, value);`,
    use: `You must choose three parameters: an image class or the img tag, a filter
    and a percentage value`,
    important: `This doesn't work with containers!`,
    example: `<figure onmouseover="objFunctions.applyFilteryHover('.apply-filter', 'grayscale', '100')"><img src="assets/img/akane.jpg" alt="Akane Sleeping" width="100%" class="apply-filter"></figure>`
  },
  'remove': {
    title: 'Remove Filter',
    description: 'When you have images with filters, this functions takes it out on hover',
    function: `objFunctions.removeFilteryHover(selectorName, filter, value);`,
    use: `You must choose three parameters: an image class or the img tag, the filter used
    and a percentage value`,
    important: `This doesn't work with containers!`,
    example: `<figure onmouseover="objFunctions.removeFilteryHover('.remove-filter', 'grayscale', '100')"><img src="assets/img/akane.jpg" alt="Akane Sleeping" width="100%" class="remove-filter"></figure>`
  },
  'zoom in': {
    title: `Zoom In`,
    description: `Add a zoom effect to image.`,
    function: `objFunctions.hoverLargeScale(selectorName, scale);`,
    use: `You must choose two parameters: a parent element of all images you
    want to apply the effect and a size for the zoom scale.`,
    important: `The parent element must be a class or a tag, does not works with IDs`,
    example: `<figure class="zoom-in" onmouseover="objFunctions.hoverLargeScale(this, 1.3)"><img src="assets/img/akane.jpg" alt="Akane Sleeping" width="100%"></figure>`
  },
  'zoom out': {
    title: `Zoom In`,
    description: `Add a zoom effect to image.`,
    function: `objFunctions.hoverNormalScale(selectorName, scale);`,
    use: `You must choose two parameters: a parent element of all images you
    want to apply the effect and a size for the zoom scale.`,
    important: `The parent element must be a class or a tag, does not works with IDs`,
    example: `<figure class="zoom-in" onmouseover="objFunctions.hoverNormalScale(this, 1.4)"><img src="assets/img/akane.jpg" alt="Akane Sleeping" width="100%"></figure>`
  },
  'slide': {
    title: `Slide`,
    description: `This effect will move your image slightly to the side.`,
    function: `objFunctions.hoverSlide(selectorName, scale, margin);`,
    use: `You must choose three parameters: the container class or tag, a scale and a margin`,
    important: `If your margin is too big, the margin will look ugly, so try to use a small one`,
    example: `<figure class="zoom-in" onmouseover="objFunctions.hoverSlide(this, '1.3', '30')"><img src="assets/img/akane.jpg" alt="Akane Sleeping" width="100%"></figure>`
  }
};