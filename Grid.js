/* 8/17/2016 
firerian */

var Grid = {
	grid_matrix: [],
	// function: //
	initMatrix: undefined,
	addSquare: undefined,
	drawGrid: undefined,
	isFull: undefined,
	getGrid: undefined
};

Grid.initMatrix = function () {
	var row, col;
	for (row = 0; row <= 15; row ++) {
		Grid.grid_matrix[row] = [];
		for (col = 0; col <= 9; col ++) {
			Grid.grid_matrix[row][col] = 0;
		}
	}
};

Grid.addSquare = function (SquareObject) {
	var abs_row, abs_col;
	var i, j;
	for (i = 0; i <= 3; i ++) {
		for (j = 0; j <= 3; j ++) {
			if ( SquareObject.getSquareShape() [i][j] !== 0 ) {
				abs_row = SquareObject.getSquarePostion().row + i;
				abs_col = SquareObject.getSquarePostion().col + j;
				Grid.grid_matrix [abs_row][abs_col] = 1;
			}
		}
	}
};

Grid.drawGrid = function () {
	var _Table = document.getElementById("_square_container");
	var row, col;
	for (row = 0; row <= 15; row ++) {
		for (col = 0; col <= 9; col ++) {
			if (Grid.grid_matrix[row][col] !== 0) {
				// Draw //
				_Table.rows[row].cells[col].innerHTML = "Q";
			}
		}
	}
};

Grid.isFull = function () {
	var col;
	for (col = 0; col <= 9; col ++) {
		if (Grid.grid_matrix[0][col] === 1) return (true);
	}
	return (false);
};

Grid.getGrid = function () {
	var return_grid = [];
	//deep copy the Grid.grid_matrix into return_grid.//
	var i, j;
	for (i = 0; i <= 15; i++) {
		return_grid[i] = []
		for (j = 0; j <= 9; j ++) {
				return_grid[i][j] = Grid.grid_matrix[i][j];
		}
	}
	return (return_grid);
};

