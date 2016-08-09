var APACHE_SCORE = 0;
var arreglo = []; //numero de días
var arreglo_score = []; //score diario
var scoreMortalidad = []; //mortalidad diaria
var initScore; //score inicial
var initVariables = []; //variables iniciales
//arreglos de valores de rango de variables
var temperatureArray = [];
var pamArray= [], fcArray= [], frArray= [], o2Array= [], phArray= [], naArray= [], kArray= [], crArray= [], hctoArray= [], leucArray= [], glasgowArray= [];

//Función generadora de números aleatorios
function randomNumbers(medianTEMP,medianPAM,medianK){
//Temperatura
//var randomTemperature = Math.floor(Math.random()*(41-29.9+1)+29.9);

function poissonRandomNumber(lambda) {
    	var L = Math.exp(-lambda),
        	k = 0,
        	p = 1;

    	do {
        	k = k + 1;
        	p = p * Math.random();
    	} while (p > L);

    	return k - 1;
}

var randomTemperature = poissonRandomNumber(medianTEMP);
console.log("Temperatura: "+randomTemperature);

//Presión Arterial Media
//var randomPAM = Math.floor(Math.random()*(160-49+1)+49);
var randomPAM = poissonRandomNumber(medianPAM);
console.log("PAM: "+randomPAM);
//Frecuencia Cardíacada
var randomFC = Math.floor(Math.random()*(180-39+1)+39);
console.log("FC: "+randomFC);
//Frecuencia Respiratoria
var randomFR = Math.floor(Math.random()*(50-5+1)+5);
console.log("FR: "+randomFR);
//Oxigenación
var randomO2 = Math.floor(Math.random()*(500-55+1)+55);
console.log("O2: "+randomO2);
//PH Arterial
var randomPH = Math.random()*(7.7-7.15+0.5)+7.15;
console.log("PH: "+randomPH);
//Na+Sérico
var randomNa = Math.floor(Math.random()*(180-110+1)+110);
console.log("Na: "+randomNa);
//K+Sérico
var randomK = poissonRandomNumber(medianK);
console.log("K: "+randomK);
//Creatinina (Cr)
var randomCr = Math.random()*(3.5-0.6+1)+0.6;
console.log("Cr: "+randomCr);
//Insuficiencia Renal Aguda
//var randomIRA = Math.random()*(+1)+;
//Hematocrito
var randomHCTO = Math.random()*(60-20+1)+20;
console.log("HCTO: "+randomHCTO);
//Leucocitos
var randomLEUC = Math.random()*(40-1+1)+1;
console.log("LEUC: "+randomLEUC);
//Glasgow Comma Scale
var randomGlasgow = Math.floor(Math.random()*(15-1+1)+1);
console.log("Glasgow: "+randomGlasgow);
//Edad
//var randomAge = Math.floor(Math.random()*(75-44+1)+44);
//console.log("Edad: "+randomAge);

return [randomTemperature, randomPAM,randomFC,randomFR,randomO2,randomPH,randomNa,randomK,randomCr,randomHCTO,randomLEUC,randomGlasgow];

}

//Bloque de funciones con casos de rangos
function temperatureRisk(temperature){
	switch(true){
	case (temperature <= 29.9):
		APACHE_SCORE += 4;
		temperatureArray.push(4);
		console.log("Valor rango temperatura: "+4);
		break;
	case (temperature <= 31.9):
		APACHE_SCORE += 3;
		temperatureArray.push(3);
		console.log("Valor rango temperatura: "+3);
		break;
	case (temperature <= 33.9):
		APACHE_SCORE += 2;
		temperatureArray.push(2);
		console.log("Valor rango temperatura: "+2);
		break;
	case (temperature <= 35.9):
		APACHE_SCORE += 1;
		temperatureArray.push(1);
		console.log("Valor rango temperatura: "+1);
		break;
	case (temperature <= 38.4):
		APACHE_SCORE += 0;
		temperatureArray.push(0);
		console.log("Valor rango temperatura: "+0);
		break;
	case (temperature <= 38.9):
		APACHE_SCORE += 1;
		temperatureArray.push(1);
		console.log("Valor rango temperatura: "+1);
		break;
	case (temperature <= 40.9):
		APACHE_SCORE += 3;
		temperatureArray.push(3);
		console.log("Valor rango temperatura: "+3);
		break;
	case (temperature <= 41):
		APACHE_SCORE += 4;
		temperatureArray.push(4);
		console.log("Valor rango temperatura: "+4);
		break;
	}
}

function pamRisk(PAM){
	switch(true){
		case (PAM <= 49):
			APACHE_SCORE += 4;
			pamArray.push(4);
			console.log("Valor rango PAM: "+4);
			break;
		case (PAM <= 69):
			APACHE_SCORE += 2;
			pamArray.push(2);
			console.log("Valor rango PAM: "+2);
			break;
		case (PAM <= 109):
			APACHE_SCORE += 0;
			pamArray.push(0);
			console.log("Valor rango PAM: "+0);
			break;
		case (PAM <= 129):
			APACHE_SCORE += 2;
			pamArray.push(2);
			console.log("Valor rango PAM: "+2);
			break;
		case (PAM <= 159):
			APACHE_SCORE += 3;
			pamArray.push(3);
			console.log("Valor rango PAM: "+3);
			break;
		case (PAM >= 160):
			APACHE_SCORE += 4;
			pamArray.push(4);
			console.log("Valor rango PAM: "+4);
			break;

	}
}

function fcRisk(FC){
	switch(true){
		case (FC <= 39):
			APACHE_SCORE += 4;
			fcArray.push();
			console.log("Valor rango FC: "+4);
			break;
		case (FC <= 54):
		 	APACHE_SCORE += 3;
		 	fcArray.push(3);
		 	console.log("Valor rango FC: "+3);
		 	break;
		 case (FC <= 69):
		 	APACHE_SCORE += 2;
		 	fcArray.push(2);
		 	console.log("Valor rango FC: "+2);
		 	break;
		 case (FC <= 109):
		 	APACHE_SCORE += 0;
		 	fcArray.push(0);
		 	console.log("Valor rango FC: "+0);
		 	break;
		 case (FC <= 139):
		 	APACHE_SCORE += 2;
		 	fcArray.push(2);
		 	console.log("Valor rango FC: "+2);
		 	break;
		 case (FC <=179):
		 	APACHE_SCORE += 3;
		 	fcArray.push(3);
		 	console.log("Valor rango FC: "+3);
		 	break;
		 case (FC >= 180):
		 	APACHE_SCORE += 4;
		 	fcArray.push(3);
		 	console.log("Valor rango FC: "+4);
		 	break;
	}
}

function frRisk(FR){
	switch(true){
		case (FR <= 5):
			APACHE_SCORE += 4;
			frArray.push();
			console.log("Valor rango FR: "+4);
			break;
		case (FR <= 9):
			APACHE_SCORE += 2;
			frArray.push(2);
			console.log("Valor rango FR: "+2);
			break;
		case (FR <= 11):
			APACHE_SCORE += 1;
			frArray.push(1);
			console.log("Valor rango FR: "+1);
			break;
		case (FR <= 24):
			APACHE_SCORE += 0;
			frArray.push(0);
			console.log("Valor rango FR: "+0);
			break;
		case (FR <= 34):
			APACHE_SCORE += 1;
			frArray.push(1);
			console.log("Valor rango FR: "+1);
			break;
		case (FR <= 49):
			APACHE_SCORE += 3;
			frArray.push(3);
			console.log("Valor rango FR: "+3);
			break;
		case (FR >= 50):
			APACHE_SCORE += 4;
			frArray.push(4);
			console.log("Valor rango FR: "+4);
			break;

	}
}

function oxigenRisk(O2){
	switch(true){
		case (O2 <= 55):
			APACHE_SCORE += 4;
			o2Array.push();
			console.log("Valor rango O2: "+4);
			break;
		case (O2 <= 60):
			APACHE_SCORE += 3;
			o2Array.push(3);
			console.log("Valor rango O2: "+3);
			break;
		case (O2 <= 70):
			APACHE_SCORE += 1;
			o2Array.push(1);
			console.log("Valor rango O2: "+1);
			break;
		case (O2 <= 200):
			APACHE_SCORE += 0;
			o2Array.push(0);
			console.log("Valor rango O2: "+0);
			break;
		case (O2 <= 349):
			APACHE_SCORE += 2;
			o2Array.push(2);
			console.log("Valor rango O2: "+2);
			break;
		case (O2 <= 499):
			APACHE_SCORE += 3;
			o2Array.push(3);
			console.log("Valor rango O2: "+3);
			break;
		case (O2 >= 500):
			APACHE_SCORE += 4;
			o2Array.push(4);
			console.log("Valor rango O2: "+4);
			break;
	}
}

function phRisk(PH){
	switch(true){
		case (PH <= 7.15):
			APACHE_SCORE += 4;
			phArray.push();
			console.log("Valor rango PH: "+4);
			break;
		case (PH <= 7.24):
			APACHE_SCORE += 3;
			phArray.push(3);
			console.log("Valor rango PH: "+3);
			break;
		case (PH <= 7.32):
			APACHE_SCORE += 2;
			phArray.push(2);
			console.log("Valor rango PH: "+2);
			break;
		case (PH <= 7.49):
			APACHE_SCORE += 0;
			phArray.push(0);
			console.log("Valor rango PH: "+0);
			break;
		case (PH <= 7.59):
			APACHE_SCORE += 1;
			phArray.push(1);
			console.log("Valor rango PH: "+1);
			break;
		case (PH <= 7.69):
			APACHE_SCORE += 3;
			phArray.push(3);
			console.log("Valor rango PH: "+3);
			break;
		case (PH >= 7.7):
			APACHE_SCORE += 4;
			phArray.push(4);
			console.log("Valor rango PH: "+4);
			break;
	}
}
function naRisk(NA){
	switch(true){
		case (NA <= 110):
			APACHE_SCORE += 4;
			naArray.push();
			console.log("Valor rango NA: "+4);
			break;
		case (NA <= 119):
			APACHE_SCORE += 3;
			naArray.push(3);
			console.log("Valor rango NA: "+3);
			break;
		case (NA <= 129):
			APACHE_SCORE += 2;
			naArray.push(2);
			console.log("Valor rango NA: "+2);
			break;
		case (NA <= 149):
			APACHE_SCORE += 0;
			naArray.push(0);
			console.log("Valor rango NA: "+0);
			break;
		case (NA <= 154):
			APACHE_SCORE += 1;
			naArray.push(1);
			console.log("Valor rango NA: "+1);
			break;
		case (NA <= 159):
			APACHE_SCORE += 2;
			naArray.push(2);
			console.log("Valor rango NA: "+2);
			break;
		case (NA <= 179):
			APACHE_SCORE += 3;
			naArray.push(3);
			console.log("Valor rango NA: "+3);
			break;
		case (NA >= 180):
			APACHE_SCORE += 4;
			naArray.push(4);
			console.log("Valor rango NA: "+4);
			break;
	}
}
function kRisk(kSerico){
	switch(true){
		case (kSerico <= 2.5):
			APACHE_SCORE += 4;
			kArray.push(4);
			console.log("Valor rango K: "+4);
			break;
		case (kSerico <= 2.9):
			APACHE_SCORE += 2;
			kArray.push(2);
			console.log("Valor rango K: "+2);
			break;
		case (kSerico <= 3.4):
			APACHE_SCORE += 1;
			kArray.push(1);
			console.log("Valor rango K: "+1);
			break;
		case (kSerico <= 5.4):
			APACHE_SCORE += 0;
			kArray.push(0);
			console.log("Valor rango K: "+0);
			break;
		case (kSerico <= 5.9):
			APACHE_SCORE += 1;
			kArray.push(1);
			console.log("Valor rango K: "+1);
			break;
		case (kSerico <= 6.9):
			APACHE_SCORE += 3;
			kArray.push(3);
			console.log("Valor rango K: "+3);
			break;
		case (kSerico >= 7):
			APACHE_SCORE += 4;
			kArray.push(4);
			console.log("Valor rango K: "+4);
			break;
	}
}
function crRisk(CR){
	switch(true){
		case (CR <= 0.6):
			APACHE_SCORE += 2;
			crArray.push();
			console.log("Valor rango CR: "+2);
			break;
		case (CR <= 1.4):
			APACHE_SCORE += 0;
			crArray.push(0);
			console.log("Valor rango CR: "+0);
			break;
		case (CR <= 1.9):
			APACHE_SCORE += 2;
			crArray.push(2);
			console.log("Valor rango CR: "+2);
			break;
		case (CR <= 3.4):
			APACHE_SCORE += 3;
			crArray.push(3);
			console.log("Valor rango CR: "+3);
			break;
		case (CR >= 3.5):
			APACHE_SCORE += 4;
			crArray.push(4);
			console.log("Valor rango CR: "+4);
			break;
	}
}
function hctoRisk(HCTO){
	switch(true){
		case (HCTO <= 20):
			APACHE_SCORE += 4;
			hctoArray.push();
			console.log("Valor rango HCTO: "+4);
			break;
		case (HCTO <= 29.9):
			APACHE_SCORE += 2;
			hctoArray.push(2);
			console.log("Valor rango HCTO: "+2);
			break;
		case (HCTO <= 45.9):
			APACHE_SCORE += 0;
			hctoArray.push(0);
			console.log("Valor rango HCTO: "+0);
			break;
		case (HCTO <= 49.9):
			APACHE_SCORE += 1;
			hctoArray.push(1);
			console.log("Valor rango HCTO: "+1);
			break;
		case (HCTO <= 59.9):
			APACHE_SCORE += 2;
			hctoArray.push(2);
			console.log("Valor rango HCTO: "+2);
			break;
		case (HCTO >= 60):
			APACHE_SCORE += 4;
			hctoArray.push(4);
			console.log("Valor rango HCTO: "+4);
			break;
	}
}
function leucRisk(LEUC){
	switch(true){
		case (LEUC <= 1):
			APACHE_SCORE += 4;
			leucArray.push();
			console.log("Valor rango LEUC: "+4);
			break;
		case (LEUC <= 2.9):
			APACHE_SCORE += 2;
			leucArray.push(2);
			console.log("Valor rango LEUC: "+1);
			break;
		case (LEUC <= 14.9):
			APACHE_SCORE += 0;
			leucArray.push(0);
			console.log("Valor rango LEUC: "+0);
			break;
		case (LEUC <= 19.9):
			APACHE_SCORE += 1;
			leucArray.push(1);
			console.log("Valor rango LEUC: "+1);
			break;
		case (LEUC <= 39.9):
			APACHE_SCORE += 2;
			leucArray.push(2);
			console.log("Valor rango LEUC: "+2);
			break;
		case (LEUC >= 40):
			APACHE_SCORE += 4;
			leucArray.push(4);
			console.log("Valor rango LEUC: "+4);
			break;
	}
}
function ageRisk(EDAD){
	switch(true){
		case (EDAD <= 44):
			APACHE_SCORE += 0;
			console.log("Valor rango EDAD: "+0);
			break;
		case (EDAD <= 54):
			APACHE_SCORE += 2;
			console.log("Valor rango EDAD: "+2);
			break;
		case (EDAD <= 64):
			APACHE_SCORE += 3;
			console.log("Valor rango EDAD: "+3);
			break;
		case (EDAD <= 74):
			APACHE_SCORE += 5;
			console.log("Valor rango EDAD: "+5);
			break;
		case (EDAD >= 75):
			APACHE_SCORE += 6;
			console.log("Valor rango EDAD: "+6);
			break;
	}
}


//Funcion de llamado a casos, retorna el APACHE score diario
function simuluar(randomTemperature, randomPAM,randomFC,randomFR,randomO2,randomPH,randomNa,randomK,randomCr,randomHCTO,randomLEUC,randomGlasgow,dia,edad){
APACHE_SCORE = 0;
temperatureRisk(randomTemperature);
pamRisk(randomPAM);
fcRisk(randomFC);
frRisk(randomFR);
oxigenRisk(randomO2);
phRisk(randomPH);
naRisk(randomNa);
kRisk(randomK);
crRisk(randomCr);
hctoRisk(randomHCTO);
leucRisk(randomLEUC);
ageRisk(edad);
//document.write(randomGlasgow);
var Glasgow = 15 - randomGlasgow;
glasgowArray.push(Glasgow);
		

//console.log(arreglo);
var total_score;
total_score = APACHE_SCORE+Glasgow;
$("#apache_score").append("APACHE SCORE: "+total_score+" al día: "+(dia+1)+"<br>");
	arreglo_score.push(total_score);
}

//Cálculo mortalidad
function mortalidad(total_score){
	switch(true){
		case (total_score <= 4):
			scoreMortalidad.push("4%");
			console.log("mortalidad: "+4+"%");
			break; 
		case (total_score <= 9):
			scoreMortalidad.push("9%");
			console.log("mortalidad: "+8+"%");
			break; 
		case (total_score <= 14):
			scoreMortalidad.push("15%");
			console.log("mortalidad: "+15+"%");
			break; 
		case (total_score <= 19):
			scoreMortalidad.push("25%");
			console.log("mortalidad: "+25+"%");
			break; 
		case (total_score <= 24):
			scoreMortalidad.push("40%");
			console.log("mortalidad: "+40+"%");
			break; 
		case (total_score <= 29):
			scoreMortalidad.push("55%");
			console.log("mortalidad: "+55+"%");
			break; 
		case (total_score <= 34):
			scoreMortalidad.push("75%");
			console.log("mortalidad: "+75+"%");
			break; 
		case (total_score > 34):
			scoreMortalidad.push("85%");
			console.log("mortalidad: "+85+"%");
			break; 
	}
}

//Funciona Generadora de Gráfica
function generarGrafica(cantidadDias,Data){
			var canvas = document.getElementById('myChart').getContext("2d");


	var data = {
    	labels: cantidadDias,
    	datasets: [
        	{
            	label: "APACHE SCORE II",
            	fillColor: "rgba(0, 150, 136, 1)",
            	strokeColor: "rgba(0, 150, 136, 1)",
            	borderWidth: 2,
            	highlightFill: "rgba(255,99,132,0.4)",
            	highlightStroke: "rgba(255,99,132,1)",
            	data: Data,
        	}
    	]
	};
	var option = {
	animation: {
				duration:5000,
				responsive: true
	}

};
var myBarChart = new Chart(canvas).Bar(data, option);
//myBarChart.update();

//var myBarChart = Chart.Bar(canvas,{
	//data:data,
  //options:option
//});
}

//Generar tabla de resultados
function tablegenerate (arreglo,temperatureArray, pamArray, fcArray, frArray, o2Array, phArray, naArray, kArray, crArray, hctoArray, leucArray, glasgowArray, arreglo_score) {
    for(i=0; i<arreglo.length;i++)
    {
         var $formrow = '<tr><td>'+arreglo[i]+'</td><td class="variable">'+temperatureArray[i]+'</td><td class="variable">'+pamArray[i]+'</td><td class="variable">'+fcArray[i]+'</td><td class="variable">'+frArray[i]+'</td><td class="variable">'+o2Array[i]+'</td><td class="variable">'+phArray[i]+'</td><td class="variable">'+naArray[i]+'</td><td class="variable">'+kArray[i]+'</td><td class="variable">'+crArray[i]+'</td><td class="variable">'+hctoArray[i]+'</td><td class="variable">'+leucArray[i]+'</td><td class="variable">'+glasgowArray[i]+'</td><td>'+arreglo_score[i]+'</td><td class="variableMortalidad">'+scoreMortalidad[i]+'</td></tr>';
        $('.myTable').append($formrow);
    }
}

//Recibe número de días, llamado a otras funciones
function simularDias(dias, edad, medianTEMP,medianPAM,medianK){
	arreglo_score = [];
	arreglo = [];
	scoreMortalidad = [];
	temperatureArray= [], pamArray= [], fcArray= [], frArray= [], o2Array= [], phArray= [], naArray= [], kArray= [], crArray= [], hctoArray= [], leucArray= [], glasgowArray= [];
	for (var i = 0; i <= dias; i++) {
		var numbers = randomNumbers(medianTEMP,medianPAM,medianK);
		simuluar(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],numbers[5],numbers[6],numbers[7],numbers[8],numbers[9],numbers[10],numbers[11],i, edad);
		arreglo.push(i);
		mortalidad(arreglo_score[i]);
		$('#panel_mortalidad').append("Mortalidad al día "+(i+1)+": "+scoreMortalidad[i]+"<br>");
	}
}


$(document).ready(function(){
	//Función al presionar calcular
	$('#calcular').click(function(){
		$('#apache_score').empty();
		$('#mortalidad_score').empty();
		$('.initScore').empty();
		//$('.myTable').empty();
    	var sum = 0;
    	initVariables = [];
    	$('select :selected').each(function() {
        	sum += Number($(this).val());
        	initScore = sum;
        	initVariables.push(Number($(this).val()));
	    	});
    	simularDias(($('#dias').val()-1),$('#edad option:selected').attr('value1'),$('#temperatura option:selected').attr('media'),$('#pam option:selected').attr('media'),$('#k_serico option:selected').attr('media') );
	    generarGrafica(arreglo,arreglo_score);
	    tablegenerate(arreglo,temperatureArray, pamArray, fcArray, frArray, o2Array, phArray, naArray, kArray, crArray, hctoArray, leucArray, glasgowArray,arreglo_score);
	    $(".variable:contains('4')").css("background-color","rgba(255,99,132,0.4)");
	    $(".variableMortalidad:contains('85')").css("background-color","rgba(255,99,132,0.4)");
	    $('.initScore').append(initScore);
	});
});