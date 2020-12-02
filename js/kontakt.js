

/*Da na klik dugmeta prikaze mapu i da skloni*/
function handleButtnClick(){
    let btn1= document.getElementById("Mapa");
    
    if (btn1.style.display == "none"){
       btn1.style.display = "block";
       
    }
       else{
          btn1.style.display = "none";
       }
 }

 


 function checkPhone(){
	var telefon = document.getElementById("broj").value;
	var regTelefon = /^06[0-9]{1}[0-9]{3,4}[0-9]{3}$/;

	if(!regTelefon.test(telefon))
	{
		document.getElementById("broj").style.border="2px solid red";
	}
	else
	{
		document.getElementById("broj").style.border="2px solid green";
	}
}

       
  
