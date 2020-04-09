import java.util.Scanner;
import java.util.Random;

public class BattleShips {
	//Global variables
	public static int rows = 6;
	public static int cols = 6;
	public static boolean board[][] = new boolean[rows][cols];	
	public static char boardShow[][] = new char[rows][cols];
	public static ship ships[] = new ship[3];
	public static Scanner s = new Scanner(System.in);		
	public static Random r = new Random();
	public static int sinks = ships.length;
	
	//Ship Class
	public static class ship {		
		pos positions[];		
		int len;
		ship(pos[] positions, int len) {
			this.len = len;
			this.positions = positions;					
		}		
	}
	
	//Position vector class
	public static class pos {
		int row; 
		int col;
	}
	
	
	//ShowBoard function
	public static void showBoard() {
		for(int row = 0; row < rows; row++) {
			for(int col = 0; col < cols; col++) {				
				System.out.print(boardShow[row][col] + " ");
			}
			System.out.println();
		}
	}
	
	
	
	//CreateShips function
	public static void createShips() {
		//Ship one		
		pos shipOnePos[] = new pos[3];
		for(int i = 0; i < 3; i++) shipOnePos[i] = new pos();
		
		shipOnePos[0].row = r.nextInt(5) + 1;
		shipOnePos[0].col = r.nextInt(3) + 1;
		shipOnePos[1].row = shipOnePos[0].row;
		shipOnePos[1].col = shipOnePos[0].col + 1;
		shipOnePos[2].row = shipOnePos[1].row;
		shipOnePos[2].col = shipOnePos[1].col + 1;		
		ships[0] = new ship(shipOnePos, 3);
		
		//Ship Two
		boolean diff = false;
		pos shipTwoPos[] = new pos[3];
		for(int i = 0; i < 3; i++) shipTwoPos[i] = new pos();
		while(!diff) {		
			diff = true;
			shipTwoPos[0].row = r.nextInt(3) + 1;
			shipTwoPos[0].col = r.nextInt(5) + 1;
			shipTwoPos[1].row = shipTwoPos[0].row + 1;
			shipTwoPos[1].col = shipTwoPos[0].col;
			shipTwoPos[2].row = shipTwoPos[1].row + 1;
			shipTwoPos[2].col = shipTwoPos[1].col;	
			ships[1] = new ship(shipTwoPos, 3);
			
			for(int j = 0; j < ships[0].len; j++) 
				for(int k = 0; k < ships[1].len; k++) 
					if(ships[0].positions[j].col == ships[1].positions[k].col 
						&& ships[0].positions[j].row == ships[1].positions[k].row)  
						diff = false;			
		}		
		
		//Ship Three
		pos shipThreePos[] = new pos[2];
		for(int i = 0; i < 2; i++) shipThreePos[i] = new pos();
		diff = false;
		while(!diff) {	
			diff = true;
			shipThreePos[0].row = r.nextInt(5) + 1;
			shipThreePos[0].col = r.nextInt(4) + 1;
			shipThreePos[1].row = shipThreePos[0].row;
			shipThreePos[1].col = shipThreePos[0].col + 1;				
			ships[2] = new ship(shipThreePos, 2);
			
			for(int j = 0; j < ships[0].len; j++) 
				for(int k = 0; k < ships[2].len; k++) 
					if(ships[0].positions[j].row == ships[2].positions[k].row 
						&& ships[0].positions[j].col == ships[2].positions[k].col) 
						diff = false;
			for(int j = 0; j < ships[1].len; j++) 
				for(int k = 0; k < ships[2].len; k++) 
					if(ships[1].positions[j].row == ships[2].positions[k].row 
						&& ships[1].positions[j].col == ships[2].positions[k].col) 
						diff = false;			
		}			 
	}
	
	
	
	
	//Main driver function
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);		
		Random r = new Random();
		
		//Initiate boardShow to 'emptys'
		for(int row = 1; row < rows; row++) {
			for(int col = 1; col < cols; col++) {
				 boardShow[row][col] = ' ';
			}
		}
		
		//Setup numbers
		boardShow[0][0] = 'X';
		boardShow[0][1] = '1';
		boardShow[0][2] = '2';
		boardShow[0][3] = '3';
		boardShow[0][4] = '4';
		boardShow[0][5] = '5';		
		boardShow[1][0] = '1';
		boardShow[2][0] = '2';
		boardShow[3][0] = '3';
		boardShow[4][0] = '4';
		boardShow[5][0] = '5';		
		showBoard();
		
		createShips();
		
		//Initiate board to all false		
		for(int row = 1; row < rows; row++) 
			for(int col = 1; col < cols; col++) 
				 board[row][col] = false;
			
		
		for(int i = 0; i < ships.length; i++) 
			for(int j = 0; j < ships[i].positions.length; j++)
				board[ships[i].positions[j].row][ships[i].positions[j].col] = true;		
		
		
		while(sinks > 0) {			
			System.out.print("Enter row co ord: ");
			int x = s.nextInt();
			System.out.print("Enter column co ord: ");
			int y = s.nextInt();
			if(board[x][y] == true) {
				boardShow[x][y] = 'X';				
			}
			else {
				boardShow[x][y] = 'O';
			}
			
			//CheckSunk
			for(int i = 0; i < ships.length; i++)
				if(isSunk(ships[i])) {
					sinks--;
					for(int j = 0; j < ships[i].positions.length; j++)
						boardShow[ships[i].positions[j].row][ships[i].positions[j].col] = '*';
				}
			showBoard();
		}
		System.out.println();
		System.out.println("All ships have been sank!");
		
	}
	
	public static boolean isSunk(ship Ship) {		
		for(int i = 0; i < Ship.positions.length; i++) {
			if(boardShow[Ship.positions[i].row][Ship.positions[i].col] != 'X' ) {
				return false;
			}
		}
		
		return true;
	}

}
