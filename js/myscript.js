function percentage() {
	y=1/100
	x=eval(y)*(document.calvalue.screen.value);
	calvalue.screen.value=x;
  }
  
  function plusminus() {
	clear = false
	if (clear === false) {
	  document.calvalue.screen.value = document.calvalue.screen.value * - 1;
	  
	}
	else {
	  calvalue.screen.value=x;
	}
  }
  
  function backspace() {
	document.calvalue.screen.value=calvalue.screen.value.slice(0, -1);
  }
  
  function overx() {
	y=1
	x=eval(y)/(document.calvalue.screen.value);
	calvalue.screen.value=x;
  }
  
  function xraise2() {
	x=eval(document.calvalue.screen.value)*(document.calvalue.screen.value);
	calvalue.screen.value=x;
  }
  
  function square() {
	x=Math.sqrt(document.calvalue.screen.value);
	calvalue.screen.value=x;
  }
  
  function rundivide() {
	document.calvalue.screen.value+="/";
  }
  
  function run7() {
	document.calvalue.screen.value+="7";
  }
  
  function run8() {
	document.calvalue.screen.value+="8";
  }
  
  function run9() {
	document.calvalue.screen.value+="9";
  }
  
  function runmultiple() {
	document.calvalue.screen.value+="*";
  }
  
  function run4() {
	document.calvalue.screen.value+="4";
  }
  
  function run5() {
	document.calvalue.screen.value+="5";
  }
  
  function run6() {
	document.calvalue.screen.value+="6";
  }
  
  function runminus() {
	document.calvalue.screen.value+="-";
  }
  
  function run1() {
	document.calvalue.screen.value+="1";
  }
  
  function run2() {
	document.calvalue.screen.value+="2";
  }
  
  function run3() {
	document.calvalue.screen.value+="3";
  }
  
  function runplus() {
	document.calvalue.screen.value+="+";
  }
  
  function run0() {
	document.calvalue.screen.value+="0";
  }
  
  function rundot() {
	document.calvalue.screen.value+=".";
  }
  
  function runequal() {
	x=eval(document.calvalue.screen.value);
	calvalue.screen.value=x;
  }