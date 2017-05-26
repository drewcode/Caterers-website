function changeDisplay(qno) {
	var reqdpara = document.getElementById('q'+qno).childNodes[3];
	var reqdbutton = document.getElementById('q'+qno).childNodes[5];

	if(reqdbutton.innerHTML == 'Get Info') {
		test(qno, reqdpara);
		reqdbutton.innerHTML = 'Clear';
	}
	else {
		reqdpara.innerHTML = '';
		reqdbutton.innerHTML = 'Get Info';
	}

}

function test(qno, p) {

	var queryurl = '/queries/' + qno;
	$.ajax({
		'url': queryurl,
		'method': 'GET',
		'dataType': 'json'
	}).done(function(jsonstring) {
		var string = '<table border = "2"><thead>';

	    var obj = jsonstring[0];
			console.log(obj);
	    for(var key in obj) {
	        var attrName = key;
	    string += '<th>' + attrName + '</th>';
	    }
	    string += '</thead>	<tbody>';

		for(i in jsonstring) {
	        var obj = jsonstring[i];
	        string += '<tr>';
	        for(var key in obj) {
	            var attrName = key;
	            var attrValue = obj[key];
	            string += '<td>' + attrValue + '</td>';
	        }
	    	string += '</tr>';
	    }
	    string += '</tbody></table>';
			//console.log(string);
		p.innerHTML = string;
	});
	//var jsonstring = [ {"id":"6CMI50WM32 ","name":"Louis Stone","email_id":"lstone0@over-blog.com","phone_no":"242-(574)317-8389"},{"id":"3IAGLP5S9L ","name":"Betty Lawrence","email_id":"blawrence1@fema.gov","phone_no":"420-(776)356-2189"} ];


}
