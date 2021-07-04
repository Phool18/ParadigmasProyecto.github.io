// PARA LA NAVEGACIÓN ENTRE SECCIONES DENTRO DE LA PAGINA
// $(document).ready(function(){
//     $('div.navbar-nav a:first').addClass('active');
//     $('.secciones section').hide();
//     $('.secciones section:first').show();

//     $('div.navbar-nav a').click(function(){
//         $('div.navbar-nav a').removeClass('active');
//         $(this).addClass('active');
//         $('.secciones section').hide();

//         var activeSection = $(this).attr('href')
//         $(activeSection).show();
//         // return false;
//     });
// });

// $(document).ready(function(){
//     $('div.botones-carrera button:first').addClass('active')
//     $('div.imagenes-carrera img').hide();
//     $('div.imagenes-carrera img:first').show();
// 	$('#btn1').click(function(){
//         $('div.botones-carrera button').removeClass('active');
//         $(this).addClass('active');
//         $('div.imagenes-carrera img').hide();
//         $('#imgDiv1').show();
// 	});
//     $('#btn2').click(function(){
//         $('div.botones-carrera button').removeClass('active');
//         $(this).addClass('active');
//         $('div.imagenes-carrera img').hide();
//         $('#imgDiv2').show();
// 	});
  	
// });
$(document).ready(function(){
    $('div.botones-carrera button:first').addClass('active')
    $('div.imagenes-carrera #imgDiv1').removeClass('d-none');

	$('#btn1').click(function(){
        $('div.botones-carrera button').removeClass('active');
        $(this).addClass('active');
        $('div.imagenes-carrera img').addClass('d-none');
        $('div.imagenes-carrera #imgDiv1').removeClass('d-none');
	});
    $('#btn2').click(function(){
        $('div.botones-carrera button').removeClass('active');
        $(this).addClass('active');
        $('div.imagenes-carrera img').addClass('d-none');
        $('div.imagenes-carrera #imgDiv2').removeClass('d-none');
	});
  	
});