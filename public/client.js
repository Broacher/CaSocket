
document.addEventListener("DOMContentLoaded", function() {
   var mouse = {
      click: false,
      move: false,
      pos: {x:0, y:0},
      pos_prev: false,
   };

   //creating a canvas
   var canvas = document.getElementById('drawing');
   var context = canvas.getContext('2d');
   var width = window.innerWidth;
   var height = window.innerHeight;
   var socket = io.connect();
   var color = ["#2ecc71", "#e74c3c", "#8e44ad", "#f39c12"]
   var ctx = context;

   //setting the canvas widht and height to equal that of the web browser
   canvas.width = 1000;
   canvas.height = 600;


   //change the state of the mouse click variable deppeding on action
   canvas.onmousedown = function(e){ mouse.click = true; };
   canvas.onmouseup = function(e){ mouse.click = false; };

   //normalization of mouse possi
   canvas.onmousemove = function(e){
      mouse.pos.x = e.clientX / width;
      mouse.pos.y = e.clientY / height;
      mouse.move = true;
   };

   socket.on('draw_line', function(data) {
      var line = data.line;
      context.beginPath();
      context.moveTo(line[0].x * width, line[0].y * height);
      context.lineTo(line[1].x * width, line[1].y * height);
      context.strokeStyle= color || color[0];
      context.stroke();


      
   });
   
   // socket.on('draw_color', function(data) {
   //   color = data.color;
   //   color;   
   // });

   //color changing blocks

   var color1 = document.getElementById("drawing");
      var ctx=color1.getContext("2d");
      ctx.strokeStyle=color[0];
      ctx.strokeRect(20,20,40,40);


      var color2 = document.getElementById("drawing");
      var ctx=color2.getContext("2d");
      ctx.strokeStyle=color[1];
      ctx.strokeRect(20,canvas.height-60,40,40);

      var color3 = document.getElementById("drawing");
      var ctx=color2.getContext("2d");
      ctx.strokeStyle=color[2];
      ctx.strokeRect(canvas.width-60,20,40,40);

      var color4 = document.getElementById("drawing");
      var ctx=color2.getContext("2d");
      ctx.strokeStyle=color[3];
      ctx.strokeRect(canvas.width-60,canvas.height-60,40,40);


   //clickable element
   var elem = document.getElementById('drawing'),
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d'),
    elements = [];

   // Add event listener for `click` events.
   elem.addEventListener('click', function(event) {
       var x = event.pageX - elemLeft,
           y = event.pageY - elemTop;
       console.log(x, y);
       elements.forEach(function(element) {
           if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
               //alert('clicked element ' + elements.length);

               color = color[0];

               // socket.emit('color', color = color[0]);

               socket.on('draw_color', function(data) {
                  color = color[0];
                 color = data.color;       
               });

           }
       });

   }, false);

   // Add element.
   elements.push({
       colour: color[0],
       width: 40,
       height: 40,
       top: 20,
       left: 20
   });


   // Render elements.
   elements.forEach(function(element) {
       context.fillStyle = element.colour;
       context.fillRect(element.left, element.top, element.width, element.height);
   });


   /////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //clickable element
    var elem1 = document.getElementById('drawing'),
    elemLeft1 = elem1.offsetLeft,
    elemTop1 = elem1.offsetTop,
    context1 = elem1.getContext('2d'),
    elements1 = [];

   // Add event listener for `click` events.
   elem1.addEventListener('click', function(event) {
       var x = event.pageX - elemLeft1,
           y = event.pageY - elemTop1;
       console.log(x, y);
       elements1.forEach(function(element1) {
           if (y > element1.top && y < element1.top + element1.height && x > element1.left && x < element1.left + element1.width) {
               //alert('clicked element ' + elements1.length);
               color = color[1];
           }
       });

   }, false);

   // Add element.
   elements1.push({
       colour: color[1],
       width: 40,
       height: 40,
       top: canvas.height-60,
       left: 20
   });


   // Render elements.
   elements1.forEach(function(element1) {
       context1.fillStyle = element1.colour;
       context1.fillRect(element1.left, element1.top, element1.width, element1.height);
   });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //clickable element
    var elem2 = document.getElementById('drawing'),
    elemLeft2 = elem2.offsetLeft,
    elemTop2 = elem2.offsetTop,
    context2 = elem2.getContext('2d'),
    elements2 = [];

   // Add event listener for `click` events.
   elem2.addEventListener('click', function(event) {
       var x = event.pageX - elemLeft2,
           y = event.pageY - elemTop2;
       console.log(x, y);
       elements2.forEach(function(element2) {
           if (y > element2.top && y < element2.top + element2.height && x > element2.left && x < element2.left + element2.width) {
               //alert('clicked element ' + elements1.length);
               color = color[2];
           }
       });

   }, false);

   // Add element.
   elements2.push({
       colour: color[2],
       width: 40,
       height: 40,
       top: 20,
       left: canvas.width-60
   });


   // Render elements.
   elements2.forEach(function(element2) {
       context2.fillStyle = element2.colour;
       context2.fillRect(element2.left, element2.top, element2.width, element2.height);
   });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //clickable element
    var elem3 = document.getElementById('drawing'),
    elemLeft3 = elem3.offsetLeft,
    elemTop3 = elem3.offsetTop,
    context3 = elem3.getContext('2d'),
    elements3 = [];

   // Add event listener for `click` events.
   elem3.addEventListener('click', function(event) {
       var x = event.pageX - elemLeft3,
           y = event.pageY - elemTop3;
       console.log(x, y);
       elements3.forEach(function(element3) {
           if (y > element3.top && y < element3.top + element3.height && x > element3.left && x < element3.left + element3.width) {
               //alert('clicked element ' + elements1.length);
               color = color[3];
           }
       });

   }, false);

   // Add element.
   elements3.push({
       colour: color[3],
       width: 40,
       height: 40,
       top: canvas.height-60,
       left: canvas.width-60
   });


   // Render elements.
   elements3.forEach(function(element3) {
       context3.fillStyle = element3.colour;
       context3.fillRect(element3.left, element3.top, element3.width, element3.height);
   });


   /////////////////////////////////////////////////////////////////



   function mainLoop(){
      if(mouse.click && mouse.move && mouse.pos_prev) {
         socket.emit('draw_line', { line: [ mouse.pos, mouse.pos_prev ] });
         mouse.move = false;
      }
     
      mouse.pos_prev = { x: mouse.pos.x, y: mouse.pos.y};
      setTimeout(mainLoop, 10);
   }
   mainLoop();
});