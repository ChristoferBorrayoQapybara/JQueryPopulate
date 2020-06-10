
var dataSet;

var dataSet2 = [
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
    ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
    ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
    ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
    ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
    ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
    ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
    ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
    ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
    ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
    ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
    ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
    ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
    ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
    ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
    ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
    ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
    ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
    ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
    ["Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "$85,600"],
    ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
    ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
    ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
    ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
    ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
    ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
    ["Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "$95,400"],
    ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
    ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
    ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
    ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
    ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]
];
var salidaQ = [
    ["nombre1", "escuela1", "lugar1",  "01/01/2020" ],
    ["nombre2", "escuela2","lugar2","01/01/2020" ],
    [ "nombre3", "escuela3", "lugar3", "01/01/2020" ],
    [ "nombre4","escuela4",  "lugar4",  "01/01/2020" ],
    [  "nombre5",  "escuela5",  "lugar5", "01/01/2020" ]
];
var titulo = [
    { title: "nombre" },
    { title: "escuela" },
    { title: "estado" },
    { title: "fechaIngreso" }
];

function setJSON() {
    alert("iniciando")
    var dt;
    $.getJSON("https://restcountries.eu/rest/v2/all", function (data) {
        //console.log(data);
        console.log("iniciando carga");
        /*var tabla = $('.dataTable').DataTable();
        var p1 = ["Tigeeeer Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"];
        /*tabla.row.add({
            p1
            //entry
            /*"Pais": "entry.name",
            "Capital": "entry.capital",
            "Region": "entry.region",
            "Poblacion": "entry.population",
            "Codigo A2C": "entry.alpha2Code",
            "Codigo A3C": "entry.alpha3Code"
        }).draw();*/
        dataSet = [];
        dataSet.length = 0;
        $.each(data, function (key, entry) {
            dt = [entry.name, entry.capital, entry.region, entry.population + "", entry.alpha2Code + "", entry.alpha3Code + ""];
            if (dataSet.length < 10) dataSet.push(dt);
            if (dataSet2.length < 50) dataSet2.push(dt);
        });
        console.log(dataSet);
        console.log("fin")
        //tabla.rows({ page: 'current' }).delete();
        /*$.each(data, function (key, entry) {
            //console.log(entry);
            tabla.row.add({
                //entry
                "Pais": entry.name
                "Capital": entry.capital,
                "Region": entry.region,
                "Poblacion": entry.population,
                "Codigo A2C": entry.alpha2Code,
                "Codigo A3C": entry.alpha3Code
            }).draw();
        });*/
    });
    return dataSet;
}

function saveData() {
    var table = $('.dataTable').DataTable();
    var tableData = table.rows().data().toArray();

    $.ajax({
        type: 'POST',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        dataType: 'json',
        data: { json: JSON.stringify(titulo) },
        success: function (data) {
            alert(json);
            console.log(json);
        }
    });
};

function insertarSalida() {
    $.ajax({
        "type": "GET",
        //"url":"http://localhost:50401/api/json",
        "url": "https://3f9df7cf-efc3-4f48-9cab-4cbf3f31599a.mock.pstmn.io/json",
        "crossDomain": true,
        "dataType": "json",
        "contentType:": "application/json",
        //"contentType": 'application/json; charset=utf-8',
        "success": function (data) {
            console.log("exito");
            console.log(data);
            salidaQ = data;
        }
    });
}

$(document).ready(function () {
    insertarSalida();
    //setJSON();
	//plugin datatables
    $('.dataTable').DataTable({
        "processing": true,
        //"sAjaxSource": 'http://datatables.net/examples/examples_support/json_source.txt',
        /*"info": false,
        "serverSide": true,
        "ordering": false,
        "paging": false,
        "searching": false,*/
        /*"ajax": $.ajax({
            "type": "GET",
            //"url":"http://localhost:50401/api/json",
            "url": "https://3f9df7cf-efc3-4f48-9cab-4cbf3f31599a.mock.pstmn.io/json",
            "crossDomain": true,
            "dataType": "json",
            "contentType:": "application/json",
            //"contentType": 'application/json; charset=utf-8',
            "success": function (data) {
                console.log("exito");
                console.log(data);
            }
        }),
        //"serverSide": true,
        "processing": true,
        "JQueryUI": true,
        "stateSave": true,
        /*"ajax":({
            "type": 'POST',
            "url": 'http://localhost:56189/api/report',
            "dataType": 'json',
            "success": function (data) {
                alert(json);
                console.log(json);
            }
        }),*/
        /*"columns": [
            { "data": "userId" },
            { "data": "id" },
            { "data": "title" },
            { "data": "completed" }
        ],/*
        columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ],*/
        "data": salidaQ,
        //"columns": titulo,
        //data: setJSON(),
		"pageLength": 4,
		"aaSorting": [],
		"ordering": true,
			columnDefs: [{
			  orderable: false,
			  targets: "no-sort"
			}],
		"responsive":true,
		"language": {
            "lengthMenu": "Mostrar _MENU_ resultados por página",
            "zeroRecords": "No se han encontrado resultados",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No se han encontrado resultados",
            "infoFiltered": "",
			"EmptyTable":   	"No se han encontrado resultados",
			"LoadingRecords": 	"Cargando...",
			"Processing":   	"Procesando...",
			"ZeroRecords":  	"No se han encontrado resultados",
			"oPaginate": {
				"sFirst":    	"<<",
				"sPrevious": 	"<",
				"sNext":     	">",
				"sLast":     	">>"
			},
			"sSearch": "_INPUT_",            
        	"searchPlaceholder": "Search...",
			
			
        },
		
		"bLengthChange": false,
		"bFilter": false,
		"bInfo": false,
        "bAutoWidth": false,
        "autoFill": true
		
	});
    
    //console.log(dataSet);
    //console.log(dataSet2);
	//inicializamos los toltip
    $(function () {
	  $('[data-toggle="tooltip"]').tooltip(); 
	});

	//overlay del navbar
	$('.navbar-collapse').on('hidden.bs.collapse', function () {
	  $(".overlay").hide();
	});
	
	$('.navbar-collapse').on('shown.bs.collapse', function () {
	  $(".overlay").show();
	});
	
	//calendar eventos
	$("#calendar").simpleCalendar({
      fixedStartDay: false,
      disableEmptyDetails: true,
      events: [//carga datos del mes actual, a la hora de pulsar los botones de cambiar de mes, cargar un nuevo ajax con los eventos de ese mes
        
        {
          startDate: new Date("2020-05-21").toISOString(),
          endDate: new Date("2020-05-21").toISOString(),
          summary: '<p>Te falta rellenar el desayuno <a href="http://www.google.es" class="btn btn-link">Ir a rellenar</a></p><p>Te falta rellenar la cena <a href="http://www.google.es" class="btn btn-link">Ir a rellenar</a></p>',
		  color:'vacio',
        },
        
        {
          startDate: new Date("2020-05-24").toISOString(),
          endDate: new Date("2020-05-24").toISOString(),
          summary: '<p>Te falta rellenar el desayuno <a href="http://www.google.es" class="btn btn-link">Ir a rellenar</a></p>',
			color:'encurso',
        },
        
        {
          startDate: new Date("2020-05-25").toISOString(),
          endDate: new Date("2020-05-25").toISOString(),
          summary: 'Has rellenado las 3 comidas',
			color:'completado',
        },
		{
          startDate: new Date("2020-05-26").toISOString(),
          endDate: new Date("2020-05-26").toISOString(),
          summary: 'Hoy es festivo',
			color:'festivo',
        },
		  
		
      ],

    });
	
	
	//mostrar/ocultar contraseña
	$(document).on('click','#show_password', function () {
	  
		var cambio = document.getElementById("password");
		if(cambio.type == "password"){
			cambio.type = "text";
			$('.iconpass').removeClass('la la-eye-slash').addClass('la la-eye');
		}else{
			cambio.type = "password";
			$('.iconpass').removeClass('la la-eye').addClass('la la-eye-slash');
		}
	});
	
	
	//range control
	if($("#valueslider").length>0)
	{
		var slider = document.getElementById("myRange");
		var output = document.getElementById("valueslider");
		output.innerHTML = slider.value; // Display the default slider value

		// Update the current slider value (each time you drag the slider handle)
		slider.oninput = function() {
		  output.innerHTML = this.value;
		}
	}
	
	
	//mostrar/ocultar filtros
	$(document).on('click','#showfilters', function () {
        
		$(".filters").slideToggle();
	});
	
	
	//seleccionar todos
	$("#seleccionartodos").click(function () {
		 $('.checkitems input:checkbox').not(this).prop('checked', this.checked);
		itemsseleccionados();
	 });
	
	
	//previsualizar foto usuario
	/*=============================================
	SUBIENDO LA FOTO DEL USUARIO
	=============================================*/
	$(".nuevaFoto").change(function(){

		var imagen = this.files[0];

		/*=============================================
		VALIDAMOS EL FORMATO DE LA IMAGEN SEA JPG O PNG
		=============================================*/

		if(imagen["type"] != "image/jpeg" && imagen["type"] != "image/png"){

			$(".nuevaFoto").val("");

			$(".errorimagen").show();

		}else{

			$(".errorimagen").hide();
			var datosImagen = new FileReader;
			datosImagen.readAsDataURL(imagen);

			$(datosImagen).on("load", function(event){

				var rutaImagen = event.target.result;

				$(".previsualizar").attr("src", rutaImagen);

			})

		}
	});
	
	//controlamos loa checkboxes pulsados
	$(".tablagrupos tbody input[type=checkbox]").change(function(){
 
		itemsseleccionados();
		
	});
	
	function itemsseleccionados()
	{
		// Cogemos el elemento actual
		var elemento=this;
		var contador=0;
 
		// Recorremos todos los checkbox para contar los que estan seleccionados
		$(".tablagrupos tbody input[type=checkbox]").each(function(){
			if($(this).is(":checked"))
				contador++;
		});
 
		if(contador==0)
		{
			$(".itemsselected").html("No hay items seleccionados");
		}
		else if(contador==1)
		{
			$(".itemsselected").html(contador+" Item seleccionado");
		}
		else
		{
			$(".itemsselected").html(contador+" Items seleccionados");
		}
	}
	
	
	
	//desplegar opciones
	$(document).on('click','.desplegarmenu', function () {
	  
		$(this).parents(".opcion").find(".opciones").slideToggle();
		if($(this).hasClass("la-angle-down"))
		{
			$(this).removeClass("la-angle-down");
			$(this).addClass("la-angle-up");
		}
		else 
		{
			$(this).removeClass("la-angle-up");
			$(this).addClass("la-angle-down");
		}
	});
	
	//boton expandir/contraer todo
	$(document).on('click','#expandirtodo', function () {

		if($(this).find("i").hasClass("la la-expand-arrows-alt"))
		{
			$(this).html('<i class="la la-expand"></i> Contraer todo');
			$(".opciones").show();
			$(".opcion .desplegarmenu").removeClass("la-angle-down");
			$(".opcion .desplegarmenu").addClass("la-angle-up");
		}
		else 
		{
			$(this).html('<i class="la la-expand-arrows-alt"></i> Expandir todo');
			$(".opciones").hide();
			$(".opcion .desplegarmenu").removeClass("la-angle-up");
			$(".opcion .desplegarmenu").addClass("la-angle-down");
		}
	});
	
	
	//daterangepicker
	$('.daterangepicker').daterangepicker({
		"locale": {
			"format": "DD/MM/YYYY",
			"separator": " - ",
			"applyLabel": "Ok",
			"cancelLabel": "Cancelar",
			"fromLabel": "Desde",
			"toLabel": "Hasta",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": [
				"Do",
				"Lu",
				"Ma",
				"Mi",
				"Ju",
				"Vi",
				"Sa"
			],
			"monthNames": [
				"Enero",
				"Febrero",
				"Marzo",
				"Abril",
				"Mayo",
				"Junio",
				"Julio",
				"Agosto",
				"Septiembre",
				"Octubre",
				"Noviembre",
				"Diciembre"
			],
			"firstDay": 1
		},
		
	}, function(start, end, label) {
	  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
	
	
	//daterangepicker sin rango, simple
	$('.daterangepickersimple').daterangepicker({
		"singleDatePicker": true,
		"locale": {
			"format": "DD/MM/YYYY",
			"separator": " - ",
			"applyLabel": "Ok",
			"cancelLabel": "Cancelar",
			"fromLabel": "Desde",
			"toLabel": "Hasta",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": [
				"Do",
				"Lu",
				"Ma",
				"Mi",
				"Ju",
				"Vi",
				"Sa"
			],
			"monthNames": [
				"Enero",
				"Febrero",
				"Marzo",
				"Abril",
				"Mayo",
				"Junio",
				"Julio",
				"Agosto",
				"Septiembre",
				"Octubre",
				"Noviembre",
				"Diciembre"
			],
			"firstDay": 1
		},
		
	}, function(start, end, label) {
	  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
	
	
	
	
	//fixed elemenents
	window.onscroll = function() {
		if(window.innerWidth>=992){stickderecha();}
	};
	

	

	function stickderecha() {
		
	var width2 = $('#botonesfijos').width();
	var height2 = $('#botonesfijos').height();
	var botonesfijos = document.getElementById("botonesfijos");
	var sticky = botonesfijos.offsetTop;

	var padre = $('#botonesfijos').parent().offset().top + $('#botonesfijos').parent().height() - height2 -120;
		
	  if (window.pageYOffset > sticky && window.pageYOffset < padre) {
		botonesfijos.classList.add("sticky");
		  
		var offset = $('#botonesfijos').parent().offset();
		 var width = $('#botonesfijos').parent().width();
		  

		var right = offset.left + width - width2 -30 + "px";
		$('#botonesfijos').css( { 'left': right,'width':width2+30 });
		  
		  
	  } else {
		botonesfijos.classList.remove("sticky");
		$('#botonesfijos').css( { 'left': 'auto' });
	  }
	}
	
	
	//mostrar productos horario
	$(document).on('click','.producto .la', function () {
	  
		$(this).parents(".tablahorario").find(".col-11").slideToggle();
		if($(this).hasClass("la-angle-down"))
		{
			$(this).removeClass("la-angle-down");
			$(this).addClass("la-angle-up");
		}
		else
		{
			$(this).removeClass("la-angle-up");
			$(this).addClass("la-angle-down");
		}
	});
	
	
	
	 
	
	
	
	
	
	
	
	
	
});





