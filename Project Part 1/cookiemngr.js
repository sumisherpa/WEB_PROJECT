function setCookie(name,value,days)
{
	var x=new Date();
	x.setTime(x.getTime() + (days*24*60*60*1000));
	document.cookie=name+"="+value+ "; expires="+x.toGMTString()+"; path=/";
} 
function getCookie(cookie2find)
{
	var cookievalue="",str=document.cookie;
	var A=str.split(";");
	for(var i=0;i<A.length;i++)
	{
		var B=A[i].split("=");
		var c2f="";
		if(i != 0) c2f=" "+cookie2find;
		else c2f=cookie2find;
		if(B[0]==c2f){cookievalue=B[1];break;}
	}
	return cookievalue;
}
function getraw(){return document.cookie;}
