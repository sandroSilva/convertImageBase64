var fileUploadSend;
var dataImgHolder;
$(".buttonsActionImg").hide();

function sendFile(){

	if ( document.getElementById("inputSendImage").files && document.getElementById("inputSendImage").files[0] ) {
		var FR= new FileReader();
		FR.onload = function(e) {
			dataImgHolder = $("#docImgSend").attr('src');
			fileUploadSend = e.target.result;
			$("#docImgSend").replaceWith('<img src="'+e.target.result+'" id="docImgSend" />');
			$(".buttonsActionImg").show();
        };       
        FR.readAsDataURL( document.getElementById("inputSendImage").files[0] );
    }
}


function fCancelUpload(){
	$("#docImgSend").replaceWith('<img id="docImgSend" src="'+dataImgHolder+'" alt="...">');
	$(".buttonsActionImg").hide();
}

function fConfirmUpload(){
	console.log(fileUploadSend);
}


$( "#btSendImage" ).change(function() {
	sendFile();
});


$( "#btSendUploadImg" ).click(function() {
	fConfirmUpload();
});


$( "#btCancelUploadImg" ).click(function() {
	fCancelUpload();
});