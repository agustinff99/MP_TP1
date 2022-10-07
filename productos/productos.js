let span = document.getElementsByClassName('buttonsx');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}





	
	let span2 = document.getElementsByClassName('buttons2');
	let product2 = document.getElementsByClassName('product2')
	let product_page2 = Math.ceil(product2.length/4);
	let l2 = 0;
	let movePer2 = 25.34;
	let maxMove2 = 203;
	// mobile_view	
	let mob_view2 = window.matchMedia("(max-width: 768px)");
	if (mob_view2.matches)
	 {
	 	movePer2 = 50.36;
	 	maxMove2 = 504;
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
		for(const i of product2){
			if (product_page2>1){
				j.style.left = '-' + l2 + '%';
			}
		}
	}
	span2[1].onclick = ()=>{right_mover2();}
	span2[0].onclick = ()=>{left_mover2();}
