function Wed() {
	var S1_4 = new google.maps.LatLng(36.6262133,127.45669939999993);
	var Part_Time_Job = new google.maps.LatLng(36.628885, 127.456305);
	var Pond = new google.maps.LatLng(36.628885, 127.456305);
	var E8_7 = new google.maps.LatLng(36.625570, 127.457579);
	var E8_10 = new google.maps.LatLng(36.623990, 127.458117);
	var Dorm = new google.maps.LatLng(36.623761, 127.459984);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: E8_7, zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP   
	};
    var flightPath = new google.maps.Polyline({
		path: [Dorm,E8_10,Dorm,E8_7,S1_4,Dorm,S1_4],
		strokeColor: "rgb(47,213,208)",
		strokeOpacity: 1,
		strokeWeight: 3
	});
	var map = new google.maps.Map(mapCanvas, mapOptions);

	var marker_Dorm = new google.maps.Marker({
		position:Dorm,
		//animation: google.maps.Animation.BOUNCE
	});
	var marker_S1_4 = new google.maps.Marker({
		position:S1_4,
	});
	var marker_E8_7 = new google.maps.Marker({
		position:E8_7,
	});
	var marker_E8_10 = new google.maps.Marker({
		position:E8_10,
	});

	marker_S1_4.setMap(map);
	marker_E8_7.setMap(map);
	marker_E8_10.setMap(map);
	marker_Dorm.setMap(map);

	var infowindow_S1_4 = new google.maps.InfoWindow({
		content: "S1_4 16:00-18:00 미래 설계"+"<br>"+
				"19:00-01:00 동아리 방에서 과제"
	});
	var infowindow_E8_7 = new google.maps.InfoWindow({
		content: "E8_7 14:00-16:00 OS 수업"
	});
	var infowindow_E8_10 = new google.maps.InfoWindow({
		content: "E8_10 10:00-12:00 객설"+"<br><br><br><br>"
	});
	var infowindow_Dorm = new google.maps.InfoWindow({
		content: "충북대학교 양진재 9:00 일어나서 씻고 식사"+"<br>"+
				"12:00-13:00 점심 식사"+"<br>"+
				"18:00-19:00 저녁 식사"+"<br>"+
				"01:00-01:30 씻고 취침"
	});
	infowindow_E8_10.open(map,marker_E8_10);
	infowindow_Dorm.open(map,marker_Dorm);
	infowindow_S1_4.open(map,marker_S1_4);
	infowindow_E8_7.open(map,marker_E8_7);

	flightPath.setMap(map);
}