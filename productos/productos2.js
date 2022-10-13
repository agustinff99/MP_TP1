let span2 = document.getElementsByClassName('buttons2');
	let product2 = document.getElementsByClassName('product2')
	let product_page2 = Math.ceil(product2.length/4);
	let l2 = 0;
	let movePer2 = 25.34;
	let maxMove2 = 25.34*6;
	// mobile_view	
	let mob_view2 = window.matchMedia("(max-width: 768px)");
	if (mob_view2.matches)
	 {
	 	movePer2 = 50.36;
	 	maxMove2 = Infinity;
	 }

	let right_mover2 = ()=>{
		l2 = l2 + movePer2;
		if (product2 == 1){l2 = 0; }
		for(const j of product2)
		{
			if (l2 > maxMove2){l2 = l2 - movePer2;}
			j.style.left = '-' + l2 + '%';
		}

	}
	let left_mover2 = ()=>{
		l2 = l2 - movePer2;
		if (l2<=0){l2 = 0;}
		for(const j of product2){
			if (product_page2>1){
				j.style.left = '-' + l2 + '%';
			}
		}
	}
	span2[1].onclick = ()=>{right_mover2();}
	span2[0].onclick = ()=>{left_mover2();}

