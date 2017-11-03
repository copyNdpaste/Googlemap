function Fri() {
	var Dorm = new google.maps.LatLng(36.623761, 127.459984);
	var S1_4 = new google.maps.LatLng(36.6262133,127.45669939999993);
	var Part_Time_Job = new google.maps.LatLng(36.628885, 127.456305);
	var Pond = new google.maps.LatLng(36.628885, 127.456305);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: Pond, zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP   
	};
    var flightPath = new google.maps.Polyline({
		path: [Dorm,S1_4,Part_Time_Job,S1_4],
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
	var marker_Part_Time_Job = new google.maps.Marker({
		position:Part_Time_Job,
	});

	var Part_Time_Job_Range = new google.maps.Circle({
		center: Part_Time_Job,
		radius: 400,
		strokeColor: "rgb(255,174,201)",
		strokeOpacity: 0.5,
		strokeWeight: 5,
		fillColor: "rgb(255,174,201)",
		fillOpacity: 0.4
	});
	Part_Time_Job_Range.setMap(map);
	marker_Dorm.setMap(map);
	marker_S1_4.setMap(map);
	marker_Part_Time_Job.setMap(map);


	var infowindow_Dorm = new google.maps.InfoWindow({
		content: "충북대학교 양진재 9:00 일어나서 씻고 식사"+"<br>"+
				"12:00-13:00 점심 식사"+"<br>"+
				"18:00-19:00 저녁 식사"+"<br>"+
				"01:00-01:30 씻고 취침"
	});
	var infowindow_S1_4 = new google.maps.InfoWindow({
		content: "S1_4 208호 10:00-12:00 펌웨어 수업"+"<br>"+
				"16:00-18:00 웹기반 수업"+"<br>"+
				"19:00-01:00 동아리 방에서 과제"
	});
	var infowindow_Part_Time_Job = new google.maps.InfoWindow({
		content: "학내 대부분의 구역 13:00-16:00 알바"
	});

	infowindow_Dorm.open(map,marker_Dorm);
	infowindow_S1_4.open(map,marker_S1_4);
	infowindow_Part_Time_Job.open(map,marker_Part_Time_Job);
	flightPath.setMap(map);
}