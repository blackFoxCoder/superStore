	e=0;p=0;r=0;c=0;m=0;b=0;s=0;sa=0;sh=0;bo=0;
		function eraser() 
		{if (ordE.value<=100)
		{
			e=ordE.value*15;
			pdtE.value=e;
			document.getElementById('qtyEraser').innerHTML=100-ordE.value;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			}
		else 
		{
			pdtE.value='Not enough';
			ordE.value=0;
			e=0;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			document.getElementById('qtyEraser').innerHTML=100;
		}
		}
function pens() 
		{if (ordP.value<=90)
		{
			p=ordP.value*30;
			pdtP.value=p;
			document.getElementById('qtyPen').innerHTML=90-ordP.value;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			}
		else 
		{
			pdtP.value='Not enough';
			ordP.value=0;
			p=0;
			document.getElementById('qtyPen').innerHTML=90;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
		}
		}
function ruler() 
		{if (ordR.value<=78)
		{
			r=ordR.value*70;
			pdtR.value=r;
			document.getElementById('qtyRuler').innerHTML=78-ordR.value;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			}
		else 
		{
			pdtR.value='Not enough';
			ordR.value=0;
			r=0;
			document.getElementById('qtyRuler').innerHTML=78;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
		}
		}
function compass() 
		{if (ordC.value<=105)
		{
			c=ordC.value*50;
			pdtC.value=c;
			document.getElementById('qtyCompass').innerHTML=105-ordC.value;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			}
		else 
		{
			pdtC.value='Not enough';
			ordC.value=0;
			c=0;
			document.getElementById('qtyCompass').innerHTML=105;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
		}
		}
function math() 
		{if (ordM.value<=76)
		{
			m=ordM.value*200;
			pdtM.value=m;
			document.getElementById('qtyMath').innerHTML=76-ordM.value;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			}
		else 
		{
			pdtM.value='Not enough';
			ordM.value=0;
			m=0;
			document.getElementById('qtyMath').innerHTML=76;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
		}
		}
function back() 
		{if (ordB.value<=87)
		{
			b=ordB.value*2500;
			pdtB.value=b;
			document.getElementById('qtyBack').innerHTML=87-ordB.value;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			}
		else 
		{
			pdtB.value='Not enough';
			ordB.value=0;
			b=0;
			document.getElementById('qtyBack').innerHTML=87;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
		}
		}
function socks() 
		{if (ordS.value<=24)
		{
			s=ordS.value*120;
			pdtS.value=s;
			document.getElementById('qtySocks').innerHTML=24-ordS.value;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			}
		else 
		{
			pdtS.value='Not enough';
			ordS.value=0;
			s=0;document.getElementById('qtySocks').innerHTML=24;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
		}
		}
function sandals() 
		{if (ordSa.value<=63)
		{
			sa=ordSa.value*700;
			pdtSa.value=sa;
			document.getElementById('qtySandals').innerHTML=63-ordSa.value;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			}
		else 
		{
			pdtSa.value='Not enough';
			ordSa.value=0;
			sa=0;
			document.getElementById('qtySandals').innerHTML=63;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
		}
		}
function shoes() 
		{if (ordSh.value<=11)
		{
			sh=ordSh.value*1500;
			pdtSh.value=sh;
			document.getElementById('qtyShoes').innerHTML=11-ordSh.value;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			}
		else 
		{
			pdtSh.value='Not enough';
			ordSh.value=0;
			sh=0;
			document.getElementById('qtyShoes').innerHTML=11;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
		}
		}
function books() 
		{if (ordBo.value<=25)
		{
			bo=ordBo.value*70;
			pdtBo.value=bo;
			document.getElementById('qtyBooks').innerHTML=25-ordBo.value;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
			}
		else 
		{
			pdtBo.value='Not enough';
			ordBo.value=0;
			bo=0;
			document.getElementById('qtyBooks').innerHTML=25;
			document.getElementById('sum').innerHTML=e+p+r+c+m+b+s+sa+sh+bo;
		}
		}
function display1()
{
	document.getElementById('display').src=document.getElementById('img1').src;
}
function display2()
{
	document.getElementById('display').src=document.getElementById('img2').src;
}
function display3()
{
	document.getElementById('display').src=document.getElementById('img3').src;
}
function display4()
{
	document.getElementById('display').src=document.getElementById('img4').src;
}
function display5()
{
	document.getElementById('display').src=document.getElementById('img5').src;
}
function display6()
{
	document.getElementById('display').src=document.getElementById('img6').src;
}
function display7()
{
	document.getElementById('display').src=document.getElementById('img7').src;
}
function display8()
{
	document.getElementById('display').src=document.getElementById('img8').src;
}
function display9()
{
	document.getElementById('display').src=document.getElementById('img9').src;
}
function display10()
{
	document.getElementById('display').src=document.getElementById('img10').src;
}
function out()
{
	document.getElementById('display').src="SuperMarket/home viewing.jpg"
}

function checkOut()
{
	window.confirm("confirm your purchase")
}
