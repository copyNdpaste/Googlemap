function Tue() {
	var Dorm = new google.maps.LatLng(36.623761, 127.459984);
	var S1_4 = new google.maps.LatLng(36.6262133,127.45669939999993);
	var HS = new google.maps.LatLng(36.632840, 127.455988);
	var Lunch = new google.maps.LatLng(36.632137, 127.459833);
	var Cen = new google.maps.LatLng(36.629719, 127.468585);
	//var Pond = new google.maps.LatLng(36.628885, 127.456305);

	var Cafe = new google.maps.LatLng(36.632755, 127.456950);//커피베이
	var GH = new google.maps.LatLng(36.624801, 127.484293);//SomeWhere
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: Cen, zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP   
	};
    var flightPath = new google.maps.Polyline({
		path: [Dorm,S1_4,HS,Lunch,Cafe,GH,Dorm,S1_4,Dorm],
		strokeColor: "rgb(47,213,208)",
		strokeOpacity: 1,
		strokeWeight: 3
	});
	var map = new google.maps.Map(mapCanvas, mapOptions);

	var marker_Dorm = new google.maps.Marker({
		position:Dorm,
		//icon:'pinkball.png' // 아이콘 바꾸기
	});
	var marker_S1_4 = new google.maps.Marker({
		position:S1_4,
	});
	var marker_HS = new google.maps.Marker({
		position:HS,
	});
	var marker_Lunch = new google.maps.Marker({
		position:Lunch,
	});
	var marker_Cafe = new google.maps.Marker({
		position:Cafe,
	});
	var marker_GH = new google.maps.Marker({
		position:GH,
	});
	var Lunch_Range = new google.maps.Circle({
		center: Lunch,
		radius: 200,
		strokeColor: "rgb(255,174,201)",
		strokeOpacity: 0.5,
		strokeWeight: 5,
		fillColor: "rgb(255,174,201)",
		fillOpacity: 0.4
	});
	var GH_Range = new google.maps.Circle({
		center: GH,
		radius: 200,
		strokeColor: "rgb(255,174,201)",
		strokeOpacity: 0.5,
		strokeWeight: 5,
		fillColor: "rgb(255,174,201)",
		fillOpacity: 0.4
	});
	Lunch_Range.setMap(map);
	GH_Range.setMap(map);
	marker_Dorm.setMap(map);
	marker_S1_4.setMap(map);
	marker_HS.setMap(map);
	marker_Lunch.setMap(map);
	marker_Cafe.setMap(map);
	marker_GH.setMap(map);
	var infowindow_Dorm = new google.maps.InfoWindow({
		content: "9:00-9:30 충북대학교 양진재 : 일어나서 씻고 식사"+"<br>"+
				"16:00-17:00 밥 먹기"+"<br>"+
				"01:00-01:30 씻고 취침"
	});
	var infowindow_S1_4 = new google.maps.InfoWindow({
		content: "10:00 - 12:00 S1_4: 웹기반 수업"+"<br>"+
				"18:00-01:00 동아리 방에서 과제하기"
	});
	var infowindow_HS = new google.maps.InfoWindow({
		content: "12:00 형설관 : Meeting "
	});
	var infowindow_Lunch = new google.maps.InfoWindow({
		content: "12:15 중문 어딘가 : 점심 식사"
	});
	var infowindow_Cafe = new google.maps.InfoWindow({
		content: "13:00-16:00 카페 : 대화와 사진 찍기"
	});
	var infowindow_GH = new google.maps.InfoWindow({
		content: "16:00-17:00 여자친구 집 바래다주기"
	});
	infowindow_Dorm.open(map,marker_Dorm);
	infowindow_S1_4.open(map,marker_S1_4);
	infowindow_HS.open(map,marker_HS);
	infowindow_Lunch.open(map,marker_Lunch);
	infowindow_Cafe.open(map,marker_Cafe);
	infowindow_GH.open(map,marker_GH);
	flightPath.setMap(map);
}
