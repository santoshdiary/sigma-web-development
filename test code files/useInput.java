
import java.util.Scanner;

class useInput{
    public static void main(String[] args) {
        System.out.println("Enter a Number:");
        Scanner input =new Scanner(System.in);
        int value= input.nextInt();
        System.out.println(value);
    }
}