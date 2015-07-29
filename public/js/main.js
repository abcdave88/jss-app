console.log('hello world')

$(document).ready(function(){
  //works
  var header = $('.jumbo1 #contain-h');
  var image = $('.jumbo1 #jumbo-img');
  var imageUrls = ["http://arpadlukacs.com/wp-content/uploads/2012/09/975.-London-Skyline-from-Gypsy-Hill.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/ff/Cabot_Square,_Canary_Wharf_-_June_2008.jpg", "http://www.gocre8.co.uk/wp-content/uploads/2015/03/NHS-Building-site-banners.png"];
  var imageHeadings = ['Something About Procurement', 'Something About Money And How We Can Save You A Shit Tonne', 'Something About Owning The Shit Out Of Public & Private Sectors'];
  var count = 0;

  function changeJumbo(){
    image.attr('src', imageUrls[count])
    header.html(imageHeadings[count])

    count ++
    console.log('jumbo changed')
    setTimeout(changeJumbo, 5000)
     if (count === imageUrls.length){
      count = 0
     }
  };

changeJumbo()
//works




});//end of document.ready