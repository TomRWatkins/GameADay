import java.util.Scanner;
import java.awt.Color;
import java.util.ArrayList;
import java.util.Random;

public class SpaceInvaders {
	
	public static void main(String[] args) {
		
		GameArena arena = new GameArena(500,500);	
		Rectangle ship = new Rectangle(250, 400, 20, 40, "RED");
		arena.addRectangle(ship);
		ArrayList<Rectangle> invaders = new ArrayList<Rectangle>();		
		double x = 32.5;
		double y = 50;
		for(int i = 0; i < 6; i++) {
			Rectangle r = new Rectangle(x+(i*65),y, 30,30,"YELLOW");
			invaders.add(r);
			arena.addRectangle(r);
		}
		for(int i = 6; i < 12; i++) {
			Rectangle r = new Rectangle(x+((i-6)*65),y+60, 30,30,"YELLOW");
			invaders.add(r);
			arena.addRectangle(r);
		}
		for(int i = 12; i < 18; i++) {
			Rectangle r = new Rectangle(x+((i-12)*65),y+120, 30,30,"YELLOW");
			invaders.add(r);
			arena.addRectangle(r);
		}
		
		
		ArrayList<Rectangle> shots = new ArrayList<Rectangle>();				
		
		boolean waiting = false;
		long startTime = 0;
		int count = 18;
		while(true) {			
			arena.pause();
			for(Rectangle invader: invaders)
				invader.move(0, 0.5);
			
			if(arena.leftPressed()) {
				ship.move(-5, 0);				
			}
			if(arena.rightPressed()) {				
				ship.move(5, 0);				
			}
			if(arena.upPressed()) {				 
				 if(!waiting) {							
					startTime = System.currentTimeMillis();					
					waiting = true;
				}				
			}
			
			if(waiting && arena.upPressed()) {
				long elapsedMillis = System.currentTimeMillis() - startTime;					
				if(elapsedMillis > 100) { 
					Rectangle b = new Rectangle(ship.getXPosition(),ship.getYPosition(),5,5,"GREEN");
					shots.add(b);
					arena.addRectangle(b);
					waiting = false;
				}
			}
			
			for(Rectangle shot: shots) 				
						shot.move(0, -5);
						
						
			for(Rectangle shot: shots)			
				for(Rectangle invader: invaders) 											
					if(shot.collides(invader)) {
						count--;
						shot.move(-1000, -1000);
						invader.move(-1300, -1300);			
					} 	
			
			for(Rectangle invader: invaders)
				if(invader.getYPosition() > 370) {		
					ship.move(1000, 1000);
					//TEXT YOU LOOSE!
					Rectangle box = new Rectangle(0,0,500,500,"RED");
					arena.addRectangle(box);
					arena.pause();
					for(int i = 0; i < 100000; i++) {
						arena.pause();
					}
				}
			if(count == 0) {
				Rectangle box = new Rectangle(0,0,500,500,"GREEN");
				arena.addRectangle(box);
				arena.pause();
				for(int i = 0; i < 100000; i++) {
					arena.pause();
				}
			}
		
		}		
	}
}
