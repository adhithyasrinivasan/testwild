int board [][] = new int [3][3];
int cellWidth, cellHeight;     
int player = 1;
void setup() {
  size (400, 400);
  rectMode(CORNER);
  ellipseMode(CORNER);
  // Divide window in 3 by 3 cells
  cellWidth = width / 3; 
  cellHeight = height / 3;
 
  clearBoard();
}
