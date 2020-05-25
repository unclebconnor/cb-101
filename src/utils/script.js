(function( $ ) {
	var hamburgerDrop = $('#hamburger-button')
	var lpDrop = $('#lp-dropdown');
	var formCountDrop = $('#form-count-dropdown');
	var formClose = $('#form-close');
	var cmUp = $('#cm-up');
	var cmDn = $('#cm-dn');
	var cwUp = $('#cw-up');
	var cwDn = $('#cw-dn');
	var countMen = $('#count-men');
	var countWomen = $('#count-women');
	var countTotal = $('#count-total');
	var countMenDisp = $('#count-men-display');
	var countWomenDisp = $('#count-women-display');
	var countTotalDisp = $('#count-total-display');
	var calcMen = parseInt(countMen.attr('value'));
	var calcWomen = parseInt(countWomen.attr('value'));
	var calcTotal = calcMen + calcWomen;
	var formPg1 = $('#form-page-1');
	var formPg2 = $('#form-page-2');
	var formPg3 = $('#form-page-3');
	var iconPg1 = $('#icon-pg-1');
	var iconPg2 = $('#icon-pg-2');
	var iconPg3 = $('#icon-pg-3');
	var toPg1 = $('.to-pg-1');
	var toPg2 = $('.to-pg-2');
	var toPg3 = $('.to-pg-3');
	var pageName= $('#page-name').text();
	var pg2Error = $('#pg-2-error');
	var pg3Error = $('#pg-3-error');
	var firstName = $('#first-name')[0];
	var nameWarningIcon = $('#name-warning-icon');
	var phone = $('#phone')[0];
	var phoneWarningIcon = $('#phone-warning-icon');
	var email = $('#email')[0];
	var emailWarningIcon = $('#email-warning-icon');
	var arrivalDate = $('#arrival-date');
	var arrivalWarningIcon = $('#arrival-warning-icon');
	var departureDate = $('#departure-date');
	var departureWarningIcon = $('#departure-warning-icon');
	var submitButton = $('#submit-button');
	let form = $("form[name='contact-form']");

	
	(function(){
		$('#choose-a-city').find($('#' + pageName)).attr('selected','selected');
	})()

	var validatePg2 = function(){
		//jquery doesn't like checkValidity()...shrugs
		let validCount=0;
		nameWarningIcon.addClass('is-invisible');
		phoneWarningIcon.addClass('is-invisible');
		emailWarningIcon.addClass('is-invisible');
		pg2Error.empty();
    	
    	if (!firstName.checkValidity()) {
        	nameWarningIcon.removeClass('is-invisible');
    	} else {
    		validCount +=1;
    	}

    	if (!phone.checkValidity()){
    		phoneWarningIcon.removeClass('is-invisible');
    	} else {
    		validCount +=1;
    	} 

    	if (!email.checkValidity()){
			emailWarningIcon.removeClass('is-invisible');
    	} else {
    		validCount +=1;
    	}

    	if(validCount==3){
    		pg2Error.empty();
    		return true;
    	}
    	else {
    		pg2Error.html("Please Enter Required Fields");
    		return false;
    	}
	}

	var validatePg3 = function(){
		//jquery doesn't like checkValidity()...shrugs
		let validCount=0;
    	
    	if (!arrivalDate.checkValidity()) {
        	pg3Error.innerHTML = "Please Enter Required Fields";
        	arrivalWarningIcon.toggleClass('is-invisible');
    	} else {
    		pg3Error.innerHTML = "";
    		validCount +=1;
    	}

    	if (!departureDate.checkValidity()){
    		pg3Error.html("Please Enter Required Fields");
    		departureWarningIcon.toggleClass('is-invisible');
    	} else {
    		pg3Error.innerHTML = "";
    		validCount +=1;
    	} 

    	if(validCount==2){return true;}
    	else {return false;}
	}


	var goToPg1 = function(){
		formPg1.show();
		formPg2.hide();
		formPg3.hide();
		iconPg1.css('opacity',1.0);
		iconPg2.css('opacity',0.3);
		iconPg3.css('opacity',0.3);
	}

	var goToPg2 = function(){
		formPg1.hide();
		formPg2.show();
		formPg3.hide();
		iconPg1.css('opacity',0.3);
		iconPg2.css('opacity',1.0);
		iconPg3.css('opacity',0.3);
	}

	var goToPg3 = function(){
		formPg1.hide();
		formPg2.hide();
		formPg3.show();
		iconPg1.css('opacity',0.3);
		iconPg2.css('opacity',0.3);
		iconPg3.css('opacity',1.0);
	}

	goToPg2(); //defaults to Pg2 on landing


	var updateCounts = function(){
		countMen.val(calcMen);
		countWomen.val(calcWomen);
		countTotal.val(calcTotal)
		countMenDisp.text(calcMen);
		countWomenDisp.text(calcWomen);
		countTotalDisp.text(calcTotal);
	}

	//go to pages based on clicks
	toPg1.click(function(){goToPg1();});
	toPg2.click(function(){goToPg2();});
	toPg3.click(function(){if(validatePg2()){goToPg3();}});
	submitButton.click(function(e){
		e.preventDefault();
		if(validatePg3()){
			$("form[name='contact-form']").submit();
		}
	})


	//increase count of men
	cmUp.click(function(){
		calcMen += 1;
		calcTotal += 1;
		updateCounts();
	});

	cmUp.hover(function() {
        $(this).css('cursor','pointer');
    });

	//increase count of women
    cwUp.click(function(){
		calcWomen += 1;
		calcTotal += 1;
		updateCounts();
	});

	cwUp.hover(function() {
        $(this).css('cursor','pointer');
    });

	//decrease count of men
    cmDn.click(function(){
    	if(calcMen>0){
    		calcMen -= 1;
    		calcTotal -= 1;
			updateCounts();
    	}
	});

	cmDn.hover(function() {
        $(this).css('cursor','pointer');
    });

	//decrease count of women
    cwDn.click(function(){
    	if(calcWomen>0){
    		calcWomen -= 1;
    		calcTotal -= 1;
			updateCounts();
    	}
	});

	cwDn.hover(function() {
        $(this).css('cursor','pointer');
    });

	//dropdown menus
	hamburgerDrop.on('click', function(){
		hamburgerDrop.parent().toggleClass('is-active');
	});

	lpDrop.on('click', function(){
		lpDrop.toggleClass('is-active');
		lpDrop.find(".dropdown-trigger button span svg").toggleClass('upside-down');
	});

	formCountDrop.on('click', function(e){
		e.preventDefault();
		formCountDrop.parent().toggleClass('is-active');
		formCountDrop.find("button .level-right span svg").toggleClass('upside-down');
	});

	formClose.on('click', function(e){
		e.preventDefault();
		formCountDrop.parent().toggleClass('is-active');
	}); 

	var dateSettings = {
		today: '',
  		clear: '',
	}

	//datepicker settings
	arrivalDate.pickadate({
		today: '',
  		clear: '',
  		format: 'm/d/yy',
  		min: new Date(),
  		klass:{
  			header: 'picker__header arr-pick-header'
  		},
  		onSet: function(context) {
    		departureDate.focus();
  		}
	});
	departureDate.pickadate({
		today: '',
  		clear: '',
  		format: 'm/d/yy',
  		klass:{
  			header: 'picker__header dep-pick-header'
  		},
  		min: new Date()
	});

	$( ".arr-pick-header" ).before( "<div class='is-size-3 has-text-centered has-text-weight-semibold' style='padding:13px; border-bottom:1px solid lightgray;'>Arrival Date</div>" );
	$( ".dep-pick-header" ).before( "<div class='is-size-3 has-text-centered has-text-weight-semibold' style='padding:13px; border-bottom:1px solid lightgray;'>Departure Date</div>" );



	$('body').on('keydown', 'input, select, textarea', function(e) {
    var self = $(this)
      , form = self.parents('form:eq(0)')
      , focusable
      , next
      ;
    if (e.keyCode == 13) {
        focusable = form.find('input,a,select,button,textarea').filter(':visible');
        next = focusable.eq(focusable.index(this)+1);
        if (next.length) {
            next.focus();
        } else {
            form.submit();
        }
        return false;
    }
});



}) (jQuery);

