// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'ios',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Delivery Food',
	dialog: {
		title: 'Delivery Food',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/valentines/',
    	url: 'valentines.html',
    	name: 'valentines',
  		},
		{
		path: '/weddings/',
    	url: 'weddings.html',
    	name: 'weddings',
  		},
		{
		path: '/funeral/',
    	url: 'funeral.html',
    	name: 'funeral',
  		},
		{
		path: '/anniversary/',
    	url: 'anniversary.html',
    	name: 'anniversary',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnAlerta').on('click',function(){
	app.dialog.alert('Hola Diseño Web 2');
});


 
$$('#btnLogin').on('click', function(e){
	e.preventDefault();
	
	var usuario = $$('#username').val();
	var password = $$('#password').val();
	
	if (usuario == 'admin' && password == "admin"){
		$$('#nombre').html('Fernando Ramos');
		app.loginScreen.close('.login-screen');
	}else{
		app.dialog.alert('Datos ingresados no son validos')
	}
  
});





















