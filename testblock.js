/* 测试模块 */

var TestBlock = {
	sendMsg: function(s) {
		var test_block = document.getElementById("_test_block");
		//alert("111");
		test_block.innerHTML = test_block.innerHTML + s.toString() + "</br>";
	}
};
