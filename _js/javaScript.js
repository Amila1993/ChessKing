function allowDrop(ev) {
    ev.preventDefault();
	}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	}

function drop(ev) {
	    var data = ev.dataTransfer.getData("text");
	    
	//Target cell
	    var trgt_row = $(ev.target).parent().parent().index();
	    var trgt_col = $(ev.target).parent().index();
	    var capture_cell = $('#ChessBoardTbl tr:eq(' + (trgt_row) + ') td:eq(' + (trgt_col) + ')');
	//Intersecting pieces
	    var drag_piece_id = ev.dataTransfer.getData("text");
	    var cap_img_id = $(capture_cell).children().attr("id");
	    var drag_image=document.getElementById(drag_piece_id);
		var cap_image=document.getElementById(cap_img_id);
	//Occupied cells
		if (ev.target.bgColor==undefined) {
		//Showing details	
			console.log(drag_piece_id+" to "+cap_img_id+" in "+"("+trgt_row+","+trgt_col+")");
		//Same color cells
			if (drag_piece_id.charAt(0) !== cap_img_id.charAt(0)) {
				$(cap_image).remove();
		   		$(drag_image).detach().appendTo($(capture_cell));
			}		
		}
	//Unoccupied cells
		else{
			ev.target.appendChild(document.getElementById(data));
		}

	}

	

function B_radar(cell){
	var op_nm = $(cell).children().attr("id");
	// Identify intruder	
   		if (op_nm!=null) {
   	   //Enemy
	   		if (op_nm.charAt(0)=="W") {
	   			$( cell ).css("background-color", "#ff6666");
	   					}
	   //Friendly
	   		else if (op_nm.charAt(0)=="B") {
	   			$( cell ).css("background-color", "");
	   					}
				return true;	
	   		}	
	   //No_one
	   	else {
	   			$( cell ).css("background-color", "#90ee90");
	   			return false;	
	   		}	  		
	}

function W_radar(cell){
	var op_nm = $(cell).children().attr("id");
	// Identify intruder	
   		if (op_nm!=null) {
   	   //Enemy
	   		if (op_nm.charAt(0)=="B") {
	   			$( cell ).css("background-color", "#ff6666");
	   					}
	   //Friendly
	   		else if (op_nm.charAt(0)=="W") {
	   			$( cell ).css("background-color", "");
	   					}
				return true;	
	   		}	
	   //No_one
	   	else {
	   			$( cell ).css("background-color", "#90ee90");
	   			return false;	
	   		}	  		
	}

function B_pawn_radar(cell,cellE1,cellE2){

		var op_nm = $(cell).children().attr("id");
			// Identify intruder	
	   		if (op_nm!=null) {
	   	   //Enemy and Friendly
		   		if (op_nm.charAt(0)=="W","B") {
		   			$( cell ).css("background-color", "");
		   					}
		   		else{
		   			$( cell ).css("background-color", "#90ee90");
		   		}				
		   	}	
		   //No_one
		   	else {
		   			$( cell ).css("background-color", "#90ee90");
		   		}
			//Elimination mode 1
		var op_nm1 = $(cellE1).children().attr("id");
			// Identify intruder	
	   		if (op_nm1!=null) {
	   	   //Enemy
		   		if (op_nm1.charAt(0)=="W") {
		   			$( cellE1 ).css("background-color", "#ff6666");
		   					}
		   	//Friendly
		   		else if (op_nm1.charAt(0)=="B") {
		   			$( cellE1 ).css("background-color", "");
		   					}				
		   //No_one
		   	else {
		   			$( cellE1 ).css("background-color", "#90ee90");	
		   		}	   		
			}
			else {
		   			$( cellE1 ).css("background-color", "");
		   		}

			//Elimination mode 2
		var op_nm2 = $(cellE2).children().attr("id");
			// Identify intruder	
	   		if (op_nm2!=null) {
	   	   //Enemy
		   		if (op_nm2.charAt(0)=="W") {
		   			$( cellE2 ).css("background-color", "#ff6666");
		   					}
		   	//Friendly
		   		else if (op_nm2.charAt(0)=="B") {
		   			$( cellE2 ).css("background-color", "");
		   					}				
		   //No_one
		   	else {
		   			$( cellE2 ).css("background-color", "#90ee90");	
		   		}	   		
			}
			else {
		   			$( cellE2 ).css("background-color", "");
		   		}
		}

function W_pawn_radar(cell,cellE1,cellE2){

		var op_nm = $(cell).children().attr("id");
			// Identify intruder	
	   		if (op_nm!=null) {
	   	   //Enemy and Friendly
		   		if (op_nm.charAt(0)=="W","B") {
		   			$( cell ).css("background-color", "");
		   					}
		   		else{
		   			$( cell ).css("background-color", "#90ee90");
		   		}				
		   	}	
		   //No_one
		   	else {
		   			$( cell ).css("background-color", "#90ee90");
		   		}
			//Elimination mode 1
		var op_nm1 = $(cellE1).children().attr("id");
			// Identify intruder	
	   		if (op_nm1!=null) {
	   	   //Enemy
		   		if (op_nm1.charAt(0)=="B") {
		   			$( cellE1 ).css("background-color", "#ff6666");
		   					}
		   	//Friendly
		   		else if (op_nm1.charAt(0)=="W") {
		   			$( cellE1 ).css("background-color", "");
		   					}				
		   //No_one
		   	else {
		   			$( cellE1 ).css("background-color", "#90ee90");	
		   		}	   		
			}
			else {
		   			$( cellE1 ).css("background-color", "");
		   		}

			//Elimination mode 2
		var op_nm2 = $(cellE2).children().attr("id");
			// Identify intruder	
	   		if (op_nm2!=null) {
	   	   //Enemy
		   		if (op_nm2.charAt(0)=="B") {
		   			$( cellE2 ).css("background-color", "#ff6666");
		   					}
		   	//Friendly
		   		else if (op_nm2.charAt(0)=="W") {
		   			$( cellE2 ).css("background-color", "");
		   					}				
		   //No_one
		   	else {
		   			$( cellE2 ).css("background-color", "#90ee90");	
		   		}	   		
			}
			else {
		   			$( cellE2 ).css("background-color", "");
		   		}
		}		


<!--BLACK PAWN-->
		$(document).ready(function(){
				$(".Bpawn").mouseenter(function(){
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   					// console.log("row_index: "+row_index+" col_index: "+col_index);
   					var cell = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + col_index + ')');
   					var cellE1 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index+1) + ')');
   					var cellE2 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index-1) + ')');
	  				B_pawn_radar(cell,cellE1,cellE2);


			});
				$(".Bpawn").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});
<!--WHITE PAWN-->	
		$(document).ready(function(){
				$(".Wpawn").mouseenter(function(){
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   					// console.log("row_index: "+row_index+" col_index: "+col_index);
   					var cell = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + col_index + ')');
   					var cellE1 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index+1) + ')');
   					var cellE2 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index-1) + ')');
	  				W_pawn_radar(cell,cellE1,cellE2);
			});
				$(".Wpawn").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});		
<!--BLACK KING-->	

		$(document).ready(function(){
				$(".B_King").mouseenter(function(){
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   					// console.log("row_index: "+row_index+" col_index: "+col_index);
   					var cell_1 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index) + ')');
   					var cell_2 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index+1) + ')');
   					var cell_3 = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index+1) + ')');
   					var cell_4 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index+1) + ')');
   					var cell_5 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index) + ')');
   					var cell_6 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index-1) + ')');
   					var cell_7 = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index-1) + ')');
   					var cell_8 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index-1) + ')');

   					B_radar(cell_1);
	   				B_radar(cell_2);
	   				B_radar(cell_3);
	   				B_radar(cell_4);
	   				B_radar(cell_5);
	   				B_radar(cell_6);
	   				B_radar(cell_7);
	   				B_radar(cell_8);
			});
				$(".B_King").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});	
<!--WHITE KING-->	

		$(document).ready(function(){
				$(".W_King").mouseenter(function(){
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   					// console.log("row_index: "+row_index+" col_index: "+col_index);
   					var cell_1 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index) + ')');
   					var cell_2 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index+1) + ')');
   					var cell_3 = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index+1) + ')');
   					var cell_4 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index+1) + ')');
   					var cell_5 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index) + ')');
   					var cell_6 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index-1) + ')');
   					var cell_7 = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index-1) + ')');
   					var cell_8 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index-1) + ')');
   					
   					W_radar(cell_1);
	   				W_radar(cell_2);
	   				W_radar(cell_3);
	   				W_radar(cell_4);
	   				W_radar(cell_5);
	   				W_radar(cell_6);
	   				W_radar(cell_7);
	   				W_radar(cell_8);

			});
				$(".W_King").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});
<!--BLACK KNIGHT-->

		$(document).ready(function(){
				$(".B_Knight").mouseenter(function(){
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   					
	   				var cell_1 = $('#ChessBoardTbl tr:eq(' + (row_index-2) + ') td:eq(' + (col_index+1) + ')');
	   				var cell_2 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index+2) + ')');
	   				var cell_3 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index+2) + ')');
	   				var cell_4 = $('#ChessBoardTbl tr:eq(' + (row_index+2) + ') td:eq(' + (col_index+1) + ')');
	   				var cell_5 = $('#ChessBoardTbl tr:eq(' + (row_index+2) + ') td:eq(' + (col_index-1) + ')');
	   				var cell_6 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index-2) + ')');
	   				var cell_7 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index-2) + ')');
	   				var cell_8 = $('#ChessBoardTbl tr:eq(' + (row_index-2) + ') td:eq(' + (col_index-1) + ')');
	   				
	   				if (row_index==0) {
	   					B_radar(cell_2);
	   					B_radar(cell_3);
	   					B_radar(cell_4);
	   					B_radar(cell_5);
	   					B_radar(cell_6);
	   					B_radar(cell_7);
	   				}
	   				else if (col_index==1) {
	   					B_radar(cell_1);
	   					B_radar(cell_2);
	   					B_radar(cell_3);
	   					B_radar(cell_4);
	   					B_radar(cell_5);
	   					B_radar(cell_8);
	   					
	   				}
	   				else{
	   					B_radar(cell_1);
	   					B_radar(cell_2);
	   					B_radar(cell_3);
	   					B_radar(cell_4);
	   					B_radar(cell_5);
	   					B_radar(cell_6);
	   					B_radar(cell_7);
	   					B_radar(cell_8);
	   				}

			});
				$(".B_Knight").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});	
<!--WHITE KNIGHT-->

		$(document).ready(function(){
				$(".W_Knight").mouseenter(function(){
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   					
	   				var cell_1 = $('#ChessBoardTbl tr:eq(' + (row_index-2) + ') td:eq(' + (col_index+1) + ')');
	   				var cell_2 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index+2) + ')');
	   				var cell_3 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index+2) + ')');
	   				var cell_4 = $('#ChessBoardTbl tr:eq(' + (row_index+2) + ') td:eq(' + (col_index+1) + ')');
	   				var cell_5 = $('#ChessBoardTbl tr:eq(' + (row_index+2) + ') td:eq(' + (col_index-1) + ')');
	   				var cell_6 = $('#ChessBoardTbl tr:eq(' + (row_index+1) + ') td:eq(' + (col_index-2) + ')');
	   				var cell_7 = $('#ChessBoardTbl tr:eq(' + (row_index-1) + ') td:eq(' + (col_index-2) + ')');
	   				var cell_8 = $('#ChessBoardTbl tr:eq(' + (row_index-2) + ') td:eq(' + (col_index-1) + ')');
	   				
	   				if (row_index==0) {
	   					W_radar(cell_2);
	   					W_radar(cell_3);
	   					W_radar(cell_4);
	   					W_radar(cell_5);
	   					W_radar(cell_6);
	   					W_radar(cell_7);
	   				}
	   				else if (col_index==1) {
	   					W_radar(cell_1);
	   					W_radar(cell_2);
	   					W_radar(cell_3);
	   					W_radar(cell_4);
	   					W_radar(cell_5);
	   					W_radar(cell_8);
	   					
	   				}
	   				else{
	   					W_radar(cell_1);
	   					W_radar(cell_2);
	   					W_radar(cell_3);
	   					W_radar(cell_4);
	   					W_radar(cell_5);
	   					W_radar(cell_6);
	   					W_radar(cell_7);
	   					W_radar(cell_8);
	   				}

			});
				$(".W_Knight").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});	
<!--BLACK ROOK-->

		$(document).ready(function(){
				$(".B_Rook").mouseenter(function(){
				// Piece Co-ordenates
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   				//South
   					for (var i = (1); i < (8-row_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   						}
   				//North
   					for (var i = (1); i < (row_index+1); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   						}
   				//West
   					for (var i = (1); i < (col_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   						}
   				//East
   					for (var i = (1); i < (9-col_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   						}
   				//Remove highlights						
				$(".B_Rook").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});
		});
<!--WHITE ROOK-->

		$(document).ready(function(){
				$(".W_Rook").mouseenter(function(){
				// Piece Co-ordenates
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   				//South
   					for (var i = (1); i < (8-row_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   						}
   				//North
   					for (var i = (1); i < (row_index+1); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   						}
   				//West
   					for (var i = (1); i < (col_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   						}
   				//East
   					for (var i = (1); i < (9-col_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   						}
   				//Remove highlights						
				$(".W_Rook").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});
		});	
<!--BLACK BISHOP-->

		$(document).ready(function(){
				$(".B_Bishop").mouseenter(function(){
			// Piece Co-ordenates
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   			//"\" shaped cells		
   					// Left down triangle
   					if ((col_index<6) && (row_index>2)) {
   						// South-East
   						for (var i = (1); i < (8-row_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}
   						//North-West	
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}	
   						}
   					//Right up triangle		
   					else{
   						// South-East
   						for (var i = (1); i < (9-col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}	
   							}
   							//North-West
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}
   						}

   				//"/" shaped cells		
   					// Left down triangle
   					if ((col_index<6) && (row_index>2)) {
   						// South-West
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}
   						//North-East	
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}	
   						}
   					//Right up triangle		
   					else{
   						// South-West
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}
   							//North-East
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}
   						}


   			//Remove highlights
				$(".B_Bishop").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});
		});		
<!--WHITE BISHOP-->

		$(document).ready(function(){
				$(".W_Bishop").mouseenter(function(){
			// Piece Co-ordenates
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   			//"\" shaped cells		
   					// Left down triangle
   					if ((col_index<6) && (row_index>2)) {
   						// South-East
   						for (var i = (1); i < (8-row_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}
   						//North-West	
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}	
   						}
   					//Right up triangle		
   					else{
   						// South-East
   						for (var i = (1); i < (9-col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}	
   							}
   							//North-West
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}
   						}

   				//"/" shaped cells		
   					// Left down triangle
   					if ((col_index<6) && (row_index>2)) {
   						// South-West
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}
   						//North-East	
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}	
   						}
   					//Right up triangle		
   					else{
   						// South-West
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}
   							//North-East
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}
   						}		
   			//Remove highlights
				$(".W_Bishop").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});
		});		
<!--BLACK QUEEN-->

		$(document).ready(function(){
				$(".B_Queen").mouseenter(function(){
			// Piece Co-ordenates
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   			//"\" shaped cells		
   					// Left down triangle
   					if ((col_index<6) && (row_index>2)) {
   						// South-East
   						for (var i = (1); i < (8-row_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}
   						//North-West	
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}	
   						}
   					//Right up triangle		
   					else{
   						// South-East
   						for (var i = (1); i < (9-col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}	
   							}
   							//North-West
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}
   						}

   				//"/" shaped cells		
   					// Left down triangle
   					if ((col_index<6) && (row_index>2)) {
   						// South-West
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}
   						//North-East	
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}	
   						}
   					//Right up triangle		
   					else{
   						// South-West
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}
   							//North-East
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   							}
   						}
   				//South
   					for (var i = (1); i < (8-row_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   						}
   				//North
   					for (var i = (1); i < (row_index+1); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   						}
   				//West
   					for (var i = (1); i < (col_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   						}
   				//East
   					for (var i = (1); i < (9-col_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (B_radar(cell)) {
   									break;
   								}
   						}			
   								
   			//Remove highlights
				$(".B_Queen").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});
		});	
<!--WHITE QUEEN-->

		$(document).ready(function(){
				$(".W_Queen").mouseenter(function(){
			// Piece Co-ordenates
   					var row_index = $(this).parent().parent().index();
   					var col_index = $(this).parent().index();
   			//"\" shaped cells		
   					// Left down triangle
   					if ((col_index<6) && (row_index>2)) {
   						// South-East
   						for (var i = (1); i < (8-row_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}
   						//North-West	
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}	
   						}
   					//Right up triangle		
   					else{
   						// South-East
   						for (var i = (1); i < (9-col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}	
   							}
   							//North-West
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}
   						}

   				//"/" shaped cells		
   					// Left down triangle
   					if ((col_index<6) && (row_index>2)) {
   						// South-West
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}
   						//North-East	
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}	
   						}
   					//Right up triangle		
   					else{
   						// South-West
   						for (var i = (1); i < (col_index); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}
   							//North-East
   						for (var i = (1); i < (row_index+1); i++) {
   								var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   							}
   						}
   				//South
   					for (var i = (1); i < (8-row_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index+i) + ') td:eq(' + (col_index) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   						}
   				//North
   					for (var i = (1); i < (row_index+1); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index-i) + ') td:eq(' + (col_index) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   						}
   				//West
   					for (var i = (1); i < (col_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index-i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   						}
   				//East
   					for (var i = (1); i < (9-col_index); i++) {
   							var cell = $('#ChessBoardTbl tr:eq(' + (row_index) + ') td:eq(' + (col_index+i) + ')');
   							//Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
   								if (W_radar(cell)) {
   									break;
   								}
   						}		

   			//Remove highlights
				$(".W_Queen").mouseout(function(){
   					$("td").each (function () {
       				var $cCell = $(this);
          			$cCell.css("background-color","");
    		});
    		});
		});
		});		
