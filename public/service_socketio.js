var socket = io.connect('http://localhost:8080');

var who = function(pseudo)
{
socket.emit('client', pseudo);
}