$("#login").click(function(){
var user=$("#user").val();
var pass=$("#pass").val();
console.log(pass);
if(user=="admin"&& pass=="1234"){
	alert("bienvenido");
	window.location="pag.php";
}
})