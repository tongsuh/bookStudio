//搜索键功能执行
$(function() {
        $(".btn").click(function(){
            $(this).button('loading').delay(1000).queue(function() {
		    $(this).button('reset');
            $(this).dequeue(); 
            });
        });
    });  

//默认附近的书店
	var map = new BMap.Map("map");      
	// 创建地图实例
	var mPoint = new BMap.Point(104.196092,30.657197);  
	// 创建点坐标
	map.enableScrollWheelZoom(true);
	// 滚动缩放
	map.centerAndZoom(mPoint,15);

	var circle = new BMap.Circle(mPoint,1500,{fillColor:"sliver", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
    map.addOverlay(circle);
	//搜索范围显示
    var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});  
    local.searchNearby('书店',mPoint,1500);
	
	
//click后搜索的成都区域
	function myfunction(){
		var name = document.getElementById("name").value;
	//var temp=document.form1.name.value;//.value;
	var map = new BMap.Map("map");          
	map.centerAndZoom(new BMap.Point(104.196092,30.657197), 11);
	var local = new BMap.LocalSearch(map, {
		renderOptions:{map: map}
	});
	local.search(name);
	}
	
作
	function delayShow(){
setTimeout(delay1,1000)
function delay1(){
myfunction()
}
}
