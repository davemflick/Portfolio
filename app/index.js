$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});


const picCont = document.getElementById('picCont');
const mePic = document.getElementById('profileImg');
const notMe = document.getElementById('profileImg2');

picCont.addEventListener('click', (e)=> {
	let dis = e.target.style.display;
	if(e.target == mePic){
	 mePic.style.display = 'none';
	 notMe.style.display = 'inline-block'
	} else if (e.target == notMe) {
		mePic.style.display = 'inline-block';
	 	notMe.style.display = 'none'
	}

})
//mePic.addEventListener('mouseleave', (e)=> {e.target.style.display= "block"})