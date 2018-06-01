 /*document.getElementById("seachinput").onblur = function() {
   document.getElementById("seachinput").classList.add("clickedclass");
   document.getElementById("seachinput").value='Поиск людей по мероприятию';
};

 document.getElementById("seachinput").onfocus = function() {
  document.getElementById("seachinput").classList.remove("clickedclass");
  document.getElementById("seachinput").value='';
};*/

function init() {
	  //document.getElementById("seachinput").value='Поиск людей по мероприятию';
	  // var π = 3.14;
	  /*copyContent(2);*/
	  ;
};


$(document).ready(init);


/*при нажатии Enter в input*/
document.getElementById("seachinput").addEventListener("keyup", 
	function(event) {
				    event.preventDefault();
				    if (event.keyCode === 13) {
				        /*document.getElementById("seachinput").click();*/
				        alert("click");
				    }
});

function klikaj() {
              alert("click");
          };


function copyContent(num) {
    var $cardsList = $('.cards-list');
    var $cardItem = $('.card-item');

	for (var i=0; i<num; i++) {
		$cardItem.clone().appendTo($cardsList);
    }
}
