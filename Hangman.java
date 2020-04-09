import java.util.Scanner;
import java.util.Random;

public class Hangman {
	public static void printGuess(char emptyWord[], int lives, char guesses[]) {
		//Print guesses chars and underscores to screen
		for(int i = 0; i < emptyWord.length; i++) 
			System.out.print(emptyWord[i]+"  ");			
		
		System.out.println();
		for(int i = 0; i < emptyWord.length; i++) {				
			System.out.print("__ ");
		}
		System.out.print("     Lives: "+lives);
		System.out.print("                Guesses [ ");
		for(int i = 0; i < guesses.length; i++) {
			if(guesses[i] != ' ') {
				System.out.print(guesses[i] + "  ");
			}
		}
		System.out.print(" ]");
		
	}
	public static void printSpace(int spaces) {
		for(int i = 0; i < spaces; i++)
			System.out.println();
	}
	
	public static void main(String[] args) {		
		Random r = new Random();		
		Scanner s = new Scanner(System.in);
		String words[] = {"DOG", "CAT", "TOM", "TASH", "WILL"};
		char guess;
		int lives = 5;
		
		//Choose random word from words array
		char word[] = words[r.nextInt(words.length)].toCharArray();
		//Create Empty word char array to print
		char emptyWord[] = new char[word.length];
				
		//Create guesses array
		char guesses[] = new char[26];
		for(int i = 0; i < guesses.length; i++) {
			guesses[i] = ' ';
		}
		
		boolean correct = false;
		//Game loop
		while(!correct && lives > 0) {
			printSpace(3);
			
			printGuess(emptyWord, lives, guesses);
			
			//Take user guess
			printSpace(2);
			System.out.print("Enter Guess: ");
			guess = s.next().charAt(0);
			printSpace(2);
			
			//Add to guesses array
			for(int i = 0; i < guesses.length; i++) {
				if(guesses[i] == ' ') {
					guesses[i] = guess;
					break;
				}
			}
			
			boolean inWord = false;			
			for(int i = 0; i < emptyWord.length; i++) {
				if(guess == word[i]) {
					emptyWord[i] = guess;
					inWord = true;
				}
			}
			if(!inWord) {
				lives--;
			}
			
			
			
			for(int i = 0; i < emptyWord.length; i++) {				
				if(emptyWord[i] != word[i]) {
					correct = false;
					break;
				}				
				correct = true;			
			}
			if(correct) {			
				printGuess(emptyWord, lives, guesses);
				printSpace(2);
				System.out.println("CORRECT!");
			}
			if(lives == 0) {
				printGuess(emptyWord, lives, guesses);
				printSpace(2);
				System.out.println("YOU LOOOOSE!");
			}
			
		}
		
		
		
		
	}	
}
