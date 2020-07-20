		//声明全局步数变量step;
		var step = null;
		/* 
		 1、此函数为单元格单击事件函数
		 2、参数意义
			op:选择的难度标识变量
			cell:触发单击事件的单元格对象
			s:已经移动单元格的次数变量
		3、函数逻辑:通过判断cell对象上，下，左，右是否存在其他单元格对象，如果存在则调用函数setContentAndStep();不存在则不进行任何操作，判断结束后
			则调用setColor()函数,再调用judgeNumSuccess()并判断返回值,返回值为true则弹出确认框告知通过成功，并再判断确认框的返回值，(true则回到主界面，
			false则移除单元格的单击事件函数，)返回值为false则不执行任何操作
		 */
		function tdNumberClick(op, cell, s) {
			//重新加载点击单元格的音效
			$("audio")[0].load();
			//播放音效
			$("audio")[0].play();
			//判断当前的单元格是否有后一个同级元素
			if (cell.next()[0] != null) {
				//是，声明后一个同级元素对象rightCell
				var rightCell = cell.next();
				//调用函数交换内容
				setContentAndStep(cell, rightCell, s, op);

			}
			//同理判断是否有前一个同级元素(与后一个同级元素逻辑相同)
			if (cell.prev()[0] != null) {
				var leftCell = cell.prev();
				setContentAndStep(cell, leftCell, s, op);

			}
			//判断当前单元格的id属性值减去列数是否大于零,来得出上面是否有单元格
			if (cell.attr("id") - op > 0) {
				//是,声明上面的单元格对象
				var topCell = $("tr td").eq(cell.attr("id") - op - 1);
				//调用函数交换内容
				setContentAndStep(cell, topCell, s, op);

			}
			//判断当前单元格的id属性值加上列数是否小于等于总单元格数,来得出下面是否有单元格
			if (Number(cell.attr("id")) + Number(op) <= Number(op * op)) {
				var bottomCell = $("tr td").eq(Number(cell.attr("id")) + Number(op) - 1);
				//调用函数交换内容
				setContentAndStep(cell, bottomCell, s, op);

			}
			//设置颜色
			setColor($("tr td"));
			//调用函数判断是否通关
			if (judgeNumSuccess($("tr td"))) {
				if (confirm("恭喜你通关,所用步数为:" + step + ",是否回到主界面")) {
					//点击是则触发返回主界面按钮单击事件
					$("#returnStage").click();
				} else {
					//否，则移除单元格的点击事件函数
					$("td").off();
				}
			}
			//返回变量step的值
			return step;
		}
		/* 
		1、函数作用:控制游戏是否通关的函数----数字
		2、参数意义
			tds:所有的单元格对象集合
		3、算法逻辑:算法逻辑为判断每个单元格的内容是否与id值相同，有一个不同则返回false即没有通关，反之返回true通关
		*/
		function judgeNumSuccess(tds) {
			var isSuccess = true;
			for (var i = 0; i < tds.length - 1; i++) {
				if (tds.eq(i).attr("id") != tds.eq(i).html()) {
					isSuccess = false;
				}
			}
			return isSuccess;
		}
		/* 
		 1、函数作用:控制单元格颜色的函数
		 2、参数意义
				tds:所有的单元格对象集合
		 3、算法逻辑:筛选出单元格内容为空的对象，再筛选出单元格内容不为空的对象，分别设置不同颜色
		 */
		function setColor(tds) {
			//筛选出单元格内容为空字符串的单元格元素对象
			var nullTd = tds.filter(function() {
				return $(this).html() == "";
			});
			//筛选出除nullTd之外的所有单元格对象数组
			var notNullTd = tds.not(nullTd);
			//设置notNullTd的样式
			notNullTd.css({
				"backgroundColor": "black",
				"color": "red",
				"borderColor": "black"
			});
			//设置nullTd的样式
			nullTd.css({
				"backgroundColor": "#FFFAE8",
				"color": "red",
				"borderColor": "black"
			});
		}
		/* 
		1、函数作用:控制数字移动和控制步数变化的函数
		2、参数意义
			cell0：触发单击事件的单元格对象
			cell1：其他某个单元格对象
			s:已经移动单元格的次数变量
			option:选择的难度标识变量
		3、算法逻辑:判断当前点击的单元格周围的单元格的内容是否有为空，有则与内容为空的单元格交换内容来达到移动的效果，没有则不执行任何操作
		*/
		function setContentAndStep(cell0, cell1, s, option) {
			if (cell1.html() == "") {
				step = s;
				//步数变量step加1
				step++;
				//判断step变量是否达到某个值，并根据结果更改其样式
				if (step == 14 * option) {
					$(".step").filter("b").css({
						"color": "yellow"
					});
				} else if (step == 20 * option) {
					$(".step").filter("b").css({
						"color": "red"
					});
				}
				//显示当前step变量，即移动次数
				$(".step").filter("b").html(step);
				//
				cell1.html(cell0.html());
				cell0.html("");
			}
		}
