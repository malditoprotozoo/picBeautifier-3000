$(document).ready(function() {
  objFunctions.limitWidthImg('#logo', '100%');
  showDoc('.selector');
});

const showDoc = selector => {
  $(selector).click(function() {
    let thisData = $(this).html().toLowerCase();
    $('.card-header').html(`${documentation[thisData].title}`);
    $('.card-body').html(`<p class="description">${documentation[thisData].description}</p>
      <code class="javascript">${documentation[thisData].function}</code>
      <p class="description">${documentation[thisData].use}</p>
      <p class="description important">${documentation[thisData].important}</p>
      ${documentation[thisData].example}`);
  });
};