let span3 = document.getElementsByClassName('buttons3');
	let product3 = document.getElementsByClassName('product3')
	let product_page3 = Math.ceil(product3.length/4);
	let l3 = 0;
	let movePer3 = 25.34;
	let maxMove3 = 203;
	// mobile_view	
	let mob_view3 = window.matchMedia("(max-width: 768px)");
	if (mob_view3.matches)
	 {
	 	movePer3 = 50.36;
	 	maxMove3 = Infinity;
	 }

	let right_mover3 = ()=>{
		l3 = l3 + movePer3;
		if (product3 == 1){l3 = 0; }
		for(const k of product3)
		{
			if (l3 > maxMove3){l3 = l3 - movePer3;}
			k.style.left = '-' + l3 + '%';
		}

	}
	let left_mover3 = ()=>{
		l3 = l3 - movePer3;
		if (l3<=0){l3 = 0;}
		for(const k of product3){
			if (product_page3>1){
				k.style.left = '-' + l3 + '%';
			}
		}
	}
	span3[1].onclick = ()=>{right_mover3();}
	span3[0].onclick = ()=>{left_mover3();}
