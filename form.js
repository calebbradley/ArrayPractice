var dataCollect = []
var entry
var total 

$(document).ready(function(){

	$('.large').click(function() {


		entry = getInput();

		if (entry.firstName == ""){
			alert ('No First Name')
			$('.firstName').css({background: "red"})
		}

		else if (entry.lastName == "") {
			alert ('No Last Name')
			$('.firstName').css({background: "white"})
			$('.lastName').css({background: "red"})
		}

		else if (entry.email == "")	{
			alert ('No Email Address')
			$('.firstName').css({background: "white"})
			$('.lastName').css({background: "white"})
			$('.email').css({background: "red"})
		}

		else if (entry.homeTown == "") {
			alert ('No Home Town')
			$('.firstName').css({background: "white"})
			$('.lastName').css({background: "white"})
			$('.email').css({background: "white"})
			$('.homeTown').css({background: "red"})
		}

		else if (entry.homeState == "") {
			alert ('No Home State')
			$('.firstName').css({background: "white"})
			$('.lastName').css({background: "white"})
			$('.email').css({background: "white"})
			$('.homeTown').css({background: "white"})
			$('.homeState').css({background: "red"})
		}

		else if (entry.month == "") {
			alert ('No Birth Month')
			$('.firstName').css({background: "white"})
			$('.lastName').css({background: "white"})
			$('.email').css({background: "white"})
			$('.homeTown').css({background: "white"})
			$('.homeState').css({background: "white"})
			$('.month').css({background: "red"})
		}

		else if (entry.date == "") {
			alert ('No Birth Date')
			$('.firstName').css({background: "white"})
			$('.lastName').css({background: "white"})
			$('.email').css({background: "white"})
			$('.homeTown').css({background: "white"})
			$('.homeState').css({background: "white"})
			$('.month').css({background: "white"})
			$('.date').css({background: "red"})
		}

		else if (entry.year == "") {
			alert ('No Birth Year')
			$('.firstName').css({background: "white"})
			$('.lastName').css({background: "white"})
			$('.email').css({background: "white"})
			$('.homeTown').css({background: "white"})
			$('.homeState').css({background: "white"})
			$('.month').css({background: "white"})
			$('.date').css({background: "white"})
			$('.year').css({background: "red"})
		}

		else {
			$('.firstName').css({background: "white"})
			$('.lastName').css({background: "white"})
			$('.email').css({background: "white"})
			$('.homeTown').css({background: "white"})
			$('.homeState').css({background: "white"})
			$('.month').css({background: "white"})
			$('.date').css({background: "white"})
			$('.year').css({background: "white"})
			dataCollect.push(entry);
			updateUserList(dataCollect);
			$('.icon').css({opacity:"1"})
			$('h4').css({opacity:"1"})
		}	



	})


	$('.firstName').keyup(function(event) {
    newText = event.target.value;
    $('#FirstName').text("Name: " + newText);
  });

	$('.lastName').keyup(function(event) {
    newText = event.target.value;
    $('#LastName').text(newText);
  });

	$('.email').keyup(function(event) {
    newText = event.target.value;
    $('#Email').text("Email Address: " + newText);
  });

	$('.homeTown').keyup(function(event) {
    newText = event.target.value;
    $('#HomeTown').text("Location: " + newText + ",");
  });

	$('.homeState').keyup(function(event) {
    newText = event.target.value;
    $('#HomeState').text(" " + newText);
  });

	$('.month').keyup(function(event) {
    newText = event.target.value;
    $('#Month').text("Date of Birth: " + newText);
  });

	$('.date').keyup(function(event) {
    newText = event.target.value;
    $('#Date').text(" " + newText + ",");
  });

	$('.year').keyup(function(event) {
    newText = event.target.value;
    $('#Year').text(" " + newText);
  });
})

function getInput () {

	var firstNameVal = $('.firstName').val();
	var lastNameVal = $('.lastName').val();
	var emailVal = $('.email').val();
	var homeTownVal = $('.homeTown').val();
	var homeStateVal = $('.homeState').val();
	var monthVal = $('.month').val();
	var dateVal = $('.date').val();
	var yearVal = $('.year').val();

	var formData = {
		firstName: firstNameVal,
		lastName: lastNameVal,
		email: emailVal,
		homeTown: homeTownVal,
		homeState: homeStateVal,
		month: monthVal,
		date: dateVal,
		year: yearVal
	};	
	return formData;
};

function updateUserList (list) {

	var ul = $('.userList ul');
	var ut = $('.userTotal ul');

	ul.html('');
	ut.html('');
	var count = 0;


	list.forEach(function(user, index){

		var text = "<li>" + user.firstName + " " + user.lastName + "</li>";
		ul.append(text);


		count = index + 1;
	})


	if (count < 2) {
		ut.append("<li> We have " + count + "  user.  That person is sad and lonely you should join them. </li>");
	}
	else if (count < 5) {
		ut.append("<li> We have " + count + "  users. That is too few users you should join to bolster our ranks. </li>");
	}
	else if (count < 10) {
		ut.append("<li> We have " + count + "  users. </li>");
	}
	else {
		ut.append("<li> We have " + count + "  users.  We are now well on our way to world domination. </li>");
	}

}
