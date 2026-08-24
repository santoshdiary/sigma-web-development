//Brute force approach;

// HCF - HIGHEST NO, JO DONO NO KO DIVIDE KARE
// Note - hcf alaways smallest no ke equal ya less hota hai
class hcf{
    public static void main(String[] args) {
       
        int num1=25;
        int num2=10;

         /*
        int min=(num2 < num1)? num2:num1;

        int hcf=0;

        for(int i=min ;i>=1;i--){
            if(num1 % i==0 && num2 % i==0){
                    hcf=i;
                    break;//to stop iteration
            }

        }

        System.out.println(hcf);
    */

   //----------------Optimized approach-----------
   // using Euclide's Algo

    System.out.println(hcf(num1, num2));


        
    }

    static int hcf(int x, int y){
        //base case- when x completely divisible by y 
        if(y%x==0){
            return x; // x se divide kiye to ans wahi hoga
        }

      return  hcf(y, x%y);

        
    }
}