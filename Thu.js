function Thu() {
	var S1_4 = new google.maps.LatLng(36.6262133,127.45669939999993);
	var N14 = new google.maps.LatLng(36.631052, 127.456503);
	var Pond = new google.maps.LatLng(36.630904, 127.457022);
	var HYS = new google.maps.LatLng(36.625191, 127.457138);
	var Dorm = new google.maps.LatLng(36.623761, 127.459984);
	var Part_Time_Job = new google.maps.LatLng(36.628885, 127.456305);

	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: Pond, zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP   
	};
    var flightPath = new google.maps.Polyline({
		path: [Dorm,HYS,Dorm,Part_Time_Job,N14,Dorm,S1_4,Dorm],
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
	var marker_HYS = new google.maps.Marker({
		position:HYS,
	});
	var marker_N14 = new google.maps.Marker({
		position:N14,
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
	marker_S1_4.setMap(map);
	marker_HYS.setMap(map);
	marker_N14.setMap(map);
	marker_Part_Time_Job.setMap(map);
	marker_Dorm.setMap(map);

	var infowindow_S1_4 = new google.maps.InfoWindow({
		content: "S1_4 19:00-01:00 동아리 방에서 과제"
	});
	var infowindow_N14 = new google.maps.InfoWindow({
		content: "N14 14:00-17:00 발토"
	});
	var infowindow_HYS = new google.maps.InfoWindow({
		content: "학연산 09:00-11:00 객설"
	});
	var infowindow_Part_Time_Job = new google.maps.InfoWindow({
		content: "학내 대부분의 구역 13:00-14:00 알바"
	});
	var infowindow_Dorm = new google.maps.InfoWindow({
		content: "충북대학교 양진재 9:00 일어나서 씻고 식사"+"<br>"+
				"12:00-13:00 점심 식사"+"<br>"+
				"18:00-19:00 저녁 식사"+"<br>"+
				"01:00-01:30 씻고 취침"
	});
	infowindow_N14.open(map,marker_N14);
	infowindow_Dorm.open(map,marker_Dorm);
	infowindow_S1_4.open(map,marker_S1_4);
	infowindow_HYS.open(map,marker_HYS);
	infowindow_Part_Time_Job.open(map,marker_Part_Time_Job);
	
	flightPath.setMap(map);
}