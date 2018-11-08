var key=require('speakeasy');
var secret='OZQ4BLXDVBK2SH3N';



function generateTotp(){
	var token = key.totp({
  		secret: secret.base32,
 		encoding: 'base32'
	});
	return token;
}
