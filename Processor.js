/*  file:
				name: Processor.js;
				mker: fire_rain(alone);
*/

var Processor = {
	is_dead: 0,
	eventLoad: function () {
		var square_container = document.getElementById ("_square_container");
		//初始化表格
		var i = 0, j = 0;
		for (i = 0; i <= 14; i++) {
			container_row = square_container.insertRow (i);
			for (j = 0; j <= 9; j++) {
				container_cell = container_row.insertCell (j);
				container_cell.style.width = "20px";
				container_cell.style.height = "20px";
				container_cell.style.backgroundColor = "#000000";

			}
		}
		//再调整一下表格的样式
		square_container.style.margin = "auto";
	},

	eventResize: function () {
		//在body的onload和onresize中都会调用该函数。
		//以后再慢慢写吧。
	},


	gameMainLoop: function () {
		Processor.eventLoad ();
		
	}

};

/* Game - - Start! */

alert("111");
Processor.gameMainLoop ();

