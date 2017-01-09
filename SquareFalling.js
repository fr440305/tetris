/*
	FallingSquare.js
	fire_rain
	Weishu Tan.
	8/16/2016
*/

var SquareFalling = {
	square_shape: undefined,
	square_position: { row: undefined, col: undefined },
	// Functions: //
	getSquareShape: undefined,
	getSquarePosition: undefined,
	createSquare: undefined,
	moveSquare: undefined,
	rotateSquare: undefined,
	drawFallingSquare: undefined,
	// the three functions below might can be merged into one...//
	isSquareFallen: undefined,
	isSquareLeftest: undefined,
	isSquareRightest: undefined
};
			
SquareFalling.getSquareShape = function () {
	var return_shape = [];
	var i, j;
	// Deep copy the square_position into the 
	// return_shape. //
	for (i = 0; i <= 3; i++) {
		return_shape[i] = [];
		for (j = 0; j <= 3; j++) {
			return_shape[i][j] = SquareFalling.square_shape[i][j];
		}
	}
	return (return_shape);
};

SquareFalling.getSquarePostion = function () {
	var return_position = {
		row: SquareFalling.square_position.row,
		col: SquareFalling.square_position.col
	};
	return (return_position);
};


SquareFalling.createSquare = function () {
	var shape_map = [-7, -4, 0, 1, 4, 7];
	var shape_indicator = Math.floor(Math.random() * 5);
	shape_indicator = shape_map[shape_indicator];
	if (shape_indicator === 0) {
		SquareFalling.square_shape = [
			[0, 0, 0, 0], 
			[0, 1, 1, 0], 
			[0, 1, 1, 0], 
			[0, 0, 0, 0] ];
	} else if (shape_indicator === 1) {
		SquareFalling.square_shape = [
			[0, 1, 0, 0], 
			[0, 1, 0, 0], 
			[0, 1, 0, 0], 
			[0, 1, 0, 0] ];
	} else if (shape_indicator === -7) {
		SquareFalling.square_shape = [
			[0, 0, 0, 0], 
			[0, 1, 1, 0], 
			[0, 1, 0, 0], 
			[0, 1, 0, 0] ];
	} else if (shape_indicator === -4) {
		SquareFalling.square_shape = [
			[0, 0, 0, 0], 
			[0, 0, 1, 0], 
			[0, 1, 1, 0], 
			[0, 1, 0, 0] ];
	} else if (shape_indicator === 4) {
		SquareFalling.square_shape = [
			[0, 0, 0, 0], 
			[0, 1, 0, 0], 
			[0, 1, 1, 0], 
			[0, 0, 1, 0] ];
	} else if (shape_indicator === 7) {
		SquareFalling.square_shape = [
			[0, 0, 0, 0], 
			[0, 1, 1, 0], 
			[0, 0, 1, 0], 
			[0, 0, 1, 0] ];
	}
	SquareFalling.square_position = {row: -4, col: 3};
};

SquareFalling.moveSquare = function (command) {
	// if can, then move it and returns true;
	// if can not, then returns false. //
	if (command === "down") {
		if (SquareFalling.isSquareFallen() === true) {
			return (false);
		} else {
			SquareFalling.square_position.row ++;
		}
	} else if (command === "left") {
		if (SquareFalling.isSquareLeftest() === true) {
			return (false);
		} else {
			SquareFalling.square_position.col --;
		}
	} else if (command === "right") {
		if (SquareFalling.isSquareRightest() === true) {
			return (false);
		} else {
			SquareFalling.square_position.col ++;
		}
	}
	return (true);
};

SquareFalling.rotateSquare = function(command) {
	var tranSq = function (matrix) {
		// use deep copy.
		var return_matrix = []
		var col, row;
		for (row = 0; row <= 3; row ++)
			return_matrix[row] = [];
		for (row = 0; row <= 3; row ++) {
			for (col = 0; col <= 3; col ++) {
				return_matrix[col][row] = matrix[row][col];
			}
		}
		return (return_matrix);
	};
	var invertSq = function (matrix) {
		var return_matrix = [];
		var col, row;
		for (row = 0; row <= 3; row ++) {
			return_matrix[row] = [];
			for (col = 0; col <= 3; col ++) {
				return_matrix[row][col] = matrix[3 - row][col];
			}
		}
		return (return_matrix);
	};
	var rttSq = function (matrix) {
		return (invertSq(tranSq(matrix)));
	};
	var movSq = function (matrix) {
		var abs_row = SquareFalling.square_position.row;
		var abs_col = SquareFalling.square_position.col;
		var squareConflict = function (matrix) {
			var row, col;
			for (row = 0; row <= 3; row ++) {
				for (col = 0; col <= 3; col ++) {
					if (matrix[row][col] !== 0) {
						if (col + abs_col < 0) return (true);
						if (col + abs_col > 9) return (true);
						if (row + abs_row > 15) return (true);
						if (row + abs_row > 0) {
							if (Grid.grid_matrix[row + abs_row][col + abs_col] !== 0)
								return (true);
						}
					}
				}
			}
			return (false);
		};
		if (squareConflict(matrix) === true) {
			return (undefined);
		}
		return (matrix);
	};
	var new_square = movSq(rttSq(SquareFalling.square_shape));
	if (new_square !== undefined) {
		SquareFalling.square_shape = new_square;
	};
};

SquareFalling.drawFallingSquare = function () {
	var _Table = document.getElementById("_square_container");
	var tab_row_0 = SquareFalling.square_position.row;
	var tab_col_0 = SquareFalling.square_position.col;
	var i, j;
	// clean the grids before drawing... 
	// more elegant solution is needed... //
	for (i = 0; i <= 15; i++) {
		for (j = 0; j <= 9; j++) {
			_Table.rows[i].cells[j].innerHTML = "P";
		}
	}
	// drawing... //
	for (i = (tab_row_0 < 0) ? (-tab_row_0) : 0; i <= 3; i++) {
		for (j = 0; j <= 3; j++) {
			if ( SquareFalling.square_shape[i][j] !== 0 ) {
				_Table.rows[tab_row_0 + i].cells[tab_col_0 + j].innerHTML = "Q";
			}
		}
	}
};
			
SquareFalling.isSquareFallen = function () {
	var m_sq = SquareFalling.square_shape;
	var m_gr = Grid.getGrid();
	var sq_col, sq_row;
	var gr_col, gr_row;
	var isBottomBlock = function (Matrix, row, col) {
		if (Matrix[row][col] === 0) return (false);
		if (row === 3) return (true);
		if (Matrix[row + 1][col] === 0) return (true);
		return (false);
	};
	var isFallenBlock = function (Matrix, row, col) {
		if (row <= 0) return (false);
		if (row === 15) return (true);
		if (Matrix[row + 1][col] !== 0) return (true); 
		return (false);
	};
	// Execution : //
	for (sq_row = 0; sq_row <= 3; sq_row ++) {
		for (sq_col = 0; sq_col <= 3; sq_col ++) {
			if (isBottomBlock(m_sq, sq_row, sq_col)) {
				gr_row = sq_row + SquareFalling.square_position.row;
				gr_col = sq_col + SquareFalling.square_position.col;
				if (isFallenBlock(m_gr, gr_row, gr_col)) {
					return (true);
				}
			}
		}
	}
	return (false);
};

SquareFalling.isSquareLeftest = function () {
	var m_sq = SquareFalling.square_shape;
	var m_gr = Grid.getGrid();
	var sq_col, sq_row;
	var gr_col, gr_row;
	var isLeftestBlock = function (Matrix, row, col) {
		if (Matrix[row][col] === 0) return (false);
		if (col === 0) return (true);
		if (Matrix[row][col - 1] === 0) return (true);
		return (false);
	};
	var isBlockedOnGrid = function (Matrix, row, col) {
		if (col <= 0) return (true);
		if (col >= 9) return (false);
		if (row >= 0 && row <= 15) {
			if (Matrix[row][col - 1] !== 0) return (true); 
		}
		return (false);
	};
	// Execution : //
	for (sq_row = 0; sq_row <= 3; sq_row ++) {
		for (sq_col = 0; sq_col <= 3; sq_col ++) {
			if (isLeftestBlock(m_sq, sq_row, sq_col)) {
				gr_row = sq_row + SquareFalling.square_position.row;
				gr_col = sq_col + SquareFalling.square_position.col;
				if (isBlockedOnGrid(m_gr, gr_row, gr_col)) {
					return (true);
				}
			}
		}
	}
	return (false);
};

SquareFalling.isSquareRightest = function () {
	var m_sq = SquareFalling.square_shape;
	var m_gr = Grid.getGrid();
	var sq_col, sq_row;
	var gr_col, gr_row;
	var isRightestBlock = function (Matrix, row, col) {
		if (Matrix[row][col] === 0) return (false);
		if (col === 3) return (true);
		if (Matrix[row][col + 1] === 0) return (true);
		return (false);
	};
	var isBlockedOnGrid = function (Matrix, row, col) {
		if (col <= 0) return (false);
		if (col >= 9) return (true);
		if (row >= 0 && row <= 15) {
			if (Matrix[row][col + 1] !== 0) return (true); 
		}
		return (false);
	};
	// Execution : //
	for (sq_row = 0; sq_row <= 3; sq_row ++) {
		for (sq_col = 0; sq_col <= 3; sq_col ++) {
			if (isRightestBlock(m_sq, sq_row, sq_col)) {
				gr_row = sq_row + SquareFalling.square_position.row;
				gr_col = sq_col + SquareFalling.square_position.col;
				if (isBlockedOnGrid(m_gr, gr_row, gr_col)) {
					return (true);
				}
			}
		}
	}
	return (false);
};
