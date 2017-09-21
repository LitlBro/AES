/////////////////////// Called on : load ///////////////////////
	function genKey() {
			for (i = 1; i <=16; i++) {
			var temp = 'key_' + i;
			var test = document.getElementById(temp);
			test.value ='0x'+ Math.floor((Math.random() * 255) + 1).toString(16);
		} 	
	}


	 function genHexaForId(id) {
		for (i = 1; i <=16; i++) {
			var temp = id + '_' +  i + '_A';
			var test = document.getElementById(temp);
			test.value ='0x' + Math.floor((Math.random() * 255) + 1).toString(16);
		} 
	 }
	 
	 

//////////////////////////////////////////////////////////////////

////////////////// utility function //////////////////////////////


		sBox = [ 0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,
				 0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,
				 0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,
				 0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,
				 0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,
				 0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,
				 0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,
				 0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,
				 0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,
				 0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,
				 0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,
				 0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,
				 0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,
				 0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,
				 0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,
				 0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16 ];

	
		

	 function setSame(id1, id2) {
		var V1 = document.getElementById(id1);
		var V2 = document.getElementById(id2);
		V2.value = V1.value;
	 }

	 function copyOpArray(op1, opArray) {
		var n = opArray.indexOf(op1);
		if(n < opArray.length - 1) {
			var op2 = opArray[n + 1];
			for (i = 1; i<=16; i++) {
				var id1 =op1 + '_' + i + '_B' ;
				var id2 =op2 + '_' + i + '_A' ;
				
				setSame(id1,id2);
			}
		}
	 }
	 
	 function getSub(idObject) {
		var hexaCode = document.getElementById(idObject).value;
		var index = parseInt(hexaCode,16);
		var tmp = "0x" + sBox[index].toString(16); 
		return tmp;
	}

/////////////////////////////////////////////////////////////////

//////////////////////MAIN OPERATION/////////////////////////////
	function applyOp_xor() {
				
		for (i = 1; i<=16; i++) {
			var id1 = 'xor_' + i + '_A' ;
			var id3 = 'xor_' + i + '_B' ;
			var id2 = "key_exp_" + i;
			
			var V1 = document.getElementById(id1);
			var V2 = document.getElementById(id2);
			var V3 = document.getElementById(id3);
			var tmp = V1.value ^ V2.value; 

			V3.value = '0x'+ tmp.toString(16);
		}

	}

	function applyOp_shift() {

		var shiftArray = 
			['1','2','3','4','6','7','8','5','11','12','9','10','16','13','14','15'];

		for (i = 1; i<=16; i++) {
			var id1 = 'shift_' + shiftArray[i-1] + '_A'; 
			var id2 = 'shift_' + i + '_B';
			
			var V1 = document.getElementById(id1); 
			var V2 = document.getElementById(id2);
			
			V2.value = V1.value; 
		}
		
	}

	// Applique MixColumn sur un bloc de donnée
	function applyOp_mix() {
		for(c=1; c<=4; c++) {
			//Pour chaque colonne, récupérer les 4 éléments initiaux
			var ob_x1 = document.getElementById('mix_' + (c) + '_A'); 
			var ob_x5 = document.getElementById('mix_' + (c + 4) + '_A'); 
			var ob_x9 = document.getElementById('mix_' + (c + 8) + '_A'); 
			var ob_x13 = document.getElementById('mix_' + (c + 12) + '_A'); 

			//Récupérer les éléments de la colonne d'arrivée
			var ob_y1 = document.getElementById('mix_' + (c) + '_B'); 
			var ob_y5 = document.getElementById('mix_' + (c + 4) + '_B'); 
			var ob_y9 = document.getElementById('mix_' + (c + 8) + '_B'); 
			var ob_y13 = document.getElementById('mix_' + (c + 12) + '_B'); 

			//Récupérer la valeur de la colonne initiale
			var x1 = ob_x1.value;
			var x5 = ob_x5.value;
			var x9 = ob_x9.value;
			var x13 = ob_x13.value;

			//Récupérer la valeur de la colonne initiale multipliée par 0x02, modulée par P (0x011b) si besoin
			//dx => deux_fois_x
			var dx1  = '0x' + (ob_x1.value & 0x80 ? ob_x1.value << 1 ^ 0x011b : ob_x1.value << 1).toString(16);
			var dx5  = '0x' + (ob_x5.value & 0x80 ? ob_x5.value << 1 ^ 0x011b : ob_x5.value << 1).toString(16);
			var dx9  = '0x' + (ob_x9.value & 0x80 ? ob_x9.value << 1 ^ 0x011b : ob_x9.value << 1).toString(16);
			var dx13 = '0x' + (ob_x13.value & 0x80 ? ob_x13.value << 1 ^ 0x011b : ob_x13.value << 1).toString(16);

			//Créer la valeur de la colonne initiale, multipliée par 0x03 (dx + x)
			//tx => trois_fois_x
			var tx1  = '0x' + (dx1 ^ ob_x1.value).toString(16);
			var tx5  = '0x' + (dx5 ^ ob_x5.value).toString(16);
			var tx9  = '0x' + (dx9 ^ ob_x9.value).toString(16);
			var tx13 = '0x' + (dx13 ^ ob_x13.value).toString(16);

			//Calcul selon la matrice de MixColumn
			ob_y1.value  =  '0x' + (dx1 ^ tx5 ^ x9 ^ x13).toString(16);
			ob_y5.value  =  '0x' + (x1 ^ dx5 ^ tx9 ^ x13).toString(16);
			ob_y9.value  =  '0x' + (x1 ^ x5 ^ dx9 ^ tx13).toString(16);
			ob_y13.value =  '0x' + (tx1 ^ x5 ^ x9 ^ dx13).toString(16);
		}
	}

	//Applique la fonction SubByte
	function applyOp_sub() {
		
		for(i=1;i<=16;i++) {
			//Pour chaque élement du bloc de donnée initial
			var id1 = 'sub_' + i + '_A'; 
			var id2 = 'sub_' + i + '_B';
			
			//Récupérer son double final
			var V2 = document.getElementById(id2);		
			
			//En lui donnant la valeur sub (utility function, voir plus haut)
			V2.value = getSub(id1);
		}
	}

	//Permet l'extension de la clé
	function applyOp_keySchedule() {
			//Stocker les 16 valeurs dans un tableau initial
			var wIni = [];
			for(var i = 1; i <= 16; i++) {
				var tmp = document.getElementById('key_' + i);
				wIni.push(tmp.value); 
			}
			
		//APPLICATION DE g()
		
			//Récupérer les 4 derniers octets en appliquant la premiére transformée g1(W3)
			var wTmp = [wIni[13],wIni[14],wIni[15],wIni[12]];
			//Pour chaque élément de wTmp, appliquer g2() : ByteSub
			for(var i = 0; i<4; i++) {
				var index = parseInt(wTmp[i],16);
				wTmp[i] = "0x" + sBox[index].toString(16); 
			}
			
			//Appliquer g3() en sommant le premier coefficient d'itération : ici 2^0=1 base 10 soit 0x01 en hexa
			var tmp = "0x" + (wTmp[0] ^ 0x01).toString(16);
			wTmp[0] = tmp;
			
		//FIN APPLICATION g()
		
		//SOMME g(W3) + W0
			//On somme wIni (W0) avec wTmp (g(W3))
			for(var i = 0; i<4; i++) {
				var tmp = "0x" + (wTmp[i] ^ wIni[i]).toString(16);
				wTmp[i] = tmp;

			}
			//4 premiers octets de wEnd sont ceux de Tmp
			var wEnd = wTmp;
		//FIN SOMME
		
		//Somme des W précédents et initiaux (les sommes étant bit a bit, faire 4octets par 4octets ou octets par octets ne change rien)
			for(var i = 5; i <= 16; i++) {
				var tmp = "0x" + (wIni[i-1] ^ wEnd[i-4-1]).toString(16);
				wEnd.push(tmp);
			}
			
		//Tableau final modifié
			for(var i = 1; i <= 16; i++) {
				var tmp = document.getElementById('key_exp_' + i);
				tmp.value = wEnd[i-1]
			}
	}


	
	
	

	


