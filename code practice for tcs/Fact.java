public class Fact{
    public static void main(String[] args) {
        
        // System.out.println(factorial(-8));
        System.out.println(factorial(-1));

    }
    static int factorial(int num){

        int fact=1;
        if(num<0){
            throw new IllegalArgumentException("Factorial not possible for -ve.");
           
        }

        if(num==0 || num==1){
            return 1;
        }

        for(int i=num;i>=1;i--){
            fact=fact*i;
        }

        return fact;
    }

    static int factoralRecursion(int num) {

        int fact=1;

        if(num==0 || num==1){
            return 1;
        }

        return fact*factoralRecursion(num-1);

    }

}