
class primeN {

    public static void main(String[] args) {

        /*
        int num = 8; 
       if(checkPrimeOptimized(num)){
        System.out.println("Prime no hai !");
       }
       else {
         System.out.println("Prime no Nahi hai !");
       }

       */

      printPrime(1, 100); //print all prime no in specific range
        

    }
   
    static boolean checkPrime(int num) { // brutefoce approach; time complexity O(n)
        int range = num - 1;
        while (range > 1) {
            if (num % range == 0) {
                return false;
            }
            range--;
        }
        return true;
    }
    static boolean checkPrimeOptimized(int num){ // TC- O(root-num)
        if(num<2) return false;
        if(num==2) return true;
        if(num%2==0) return false; //check even divisor; agar 2 se divisible hoga to 2 ke multiple se bhi

        int squareRoot=(int) Math.sqrt(num);
        // System.out.println(squareRoot);

        for(int i=3; i<=squareRoot;i+=2 ){ // least even prime no only 2 hota hai, i.e. 2 ke baad koi bhi even no prime nhi hota
            if(num%i==0) return false; // prime hai
        }

        return true;
    }
    static void printPrime(int lRange, int uRange){
            
            for(int i=lRange;i<=uRange;i++){
                if(checkPrimeOptimized(i)){ //if it will return true then, print that no.
                    System.out.print(i+" ,");
                }
            }
    }
}
