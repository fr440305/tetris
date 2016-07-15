# Don_t Read Me . Markdown

patterns:
mm/dd/yyyy:

<the body blocks>

#Okay, here we go:


07/14/2016:
怎么样，这个文件名是不是很有新意啊？

哈哈哈。

好了，开玩笑的。

如名字所见，这就是一个俄罗斯方块的项目，用前端的一些技术所实现，用Git作
项目管理，除此之外，也并没有什么奇怪的东西了。

总而言之就是这样吧。然后这就是开发日志了。随便写写就好了啊，这一块不需要
太认真。不过该认真的地方还是要认真起来的。

那么该项目的具体架构是怎样的呢？首先是文件列表：
./index.html
./style/style.js
./js/这里还没想好啊。

喂，等一下，那我不就相当于几乎什么都没有想了吗？！

总觉得我现在越来越懒了。

要尝试着不用纸笔去思考工程的架构了。尝试着把思绪转化为关键词，然后输入到
电脑里去吧。

总有种不好的预感。这开发日志是要被我写成轻小说的节奏了啊。

不过这样好像也挺萌的，不是吗？

今天就到这里。咱们，明(hou)天(hui)再(wu)见(qi)。


07/15/2016

开发技巧：
一。VISUAL IT NOW。尽量地可视化你的代码里的数据。在独立开发的时候，这招
肯定是很有用的。真正地看到你的代码正常运行之后，你自然会有更多的信心嘛。

二。以文件为基本单位。每个源文件都尽量地简洁。每个源文件尽量地只实现一个
功能。

关键词：
对象：方块。方块群。是否下落完成：做属性。
# square.ifFallen = {true, false};
接口要定义得尽量简洁。

界面层。

今天要把一周目的开发计划做好。


var square # // should be a constructor.
function as a constructor.

::square = {
	.shape_code;
	.ifFallen;    #方块是否已经下落完毕？
	.position = {x: x, y: y};
	.
	
};
::eventProcessor = {
	//这里是消息处理器。玩家做出的各种操作都会在此处被转化为具体的，
	//可被controller识别的消息。
	//等一下我们就要对消息的种类进行讨论。
};
::controller = {
	//这里是控制器。玩家生成的消息都会被发送到这里。
	.squareContainer = #一个10X15的二维数组。
	.squareSequence = #一个以square为元素的元组.
	.getContainer() = #一个get函数。访问器吧。
	.pushNewSquare() = #向squareSequence中推送一个新的方块。
	.getIndexOfFallingSquare() = 
	.gameMainLoop() = #游戏主循环啊！！！
	.
};
::square_shape = {
	//该对象专门储存俄罗斯方块的各种可能的形状。这样一来，我们就
	//只需把代号而不用把具体
	//的形状储存到方块对象里面了。
	//这里储存了大量的4X4二维数组。
}
