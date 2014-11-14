var fileUploadSend;
var dataImgHolder;
/* esconde os botões de action da imagem */
$(".buttonsActionImg").hide();

function sendFile(){
	if ( document.getElementById("inputSendImage").files && document.getElementById("inputSendImage").files[0] ) {
		/* prepara a função de leitura da imagem e conversão FileReader() na varável FR */
		var FR= new FileReader();
		/* recebe os dados de conversão da imagem com os dados do input escondido */ 
		FR.onload = function(e) {
			/* salva a imagem de holder para normalizar, quando cancelado. */
			dataImgHolder = $("#docImgSend").attr('src');
			/* coloca na variável fileUploadSend o valor em base/64 */
			fileUploadSend = e.target.result;
			$("#docImgSend").replaceWith('<img src="'+e.target.result+'" id="docImgSend" />');
			$(".buttonsActionImg").show();
        };
        /* inicia a função de leitura da imagem e conversão da imagem com os dados do input escondido */    
        FR.readAsDataURL( document.getElementById("inputSendImage").files[0] );
    }
}

/* cancela e volta ao estado normal da imagem para */
function fCancelUpload(){
	$("#docImgSend").replaceWith('<img id="docImgSend" src="'+dataImgHolder+'" alt="...">');
	$(".buttonsActionImg").hide();
}

/* exibe através da saída console a codificação do arquivo base/64 */
function fConfirmUpload(){
	console.log(fileUploadSend);
}


/* captura os estados dos botões */
$( "#btSendImage" ).change(function() {
	sendFile();
});


$( "#btSendUploadImg" ).click(function() {
	fConfirmUpload();
});


$( "#btCancelUploadImg" ).click(function() {
	fCancelUpload();
});