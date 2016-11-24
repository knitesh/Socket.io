

  var socket = io();

 // Send message to get broadcasted
  $('form').submit(function(e){

  	e.preventDefault();
  	console.log($('#message').val())

    socket.emit('chat message', $('#message').val());

    $('#message').val('');
    
  });

  // Receive Message from the BroadCast
  socket.on('chat message', function(msg){
    $('#messageslist').append($('<li>').text(msg));
  });
