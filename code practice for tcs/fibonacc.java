

class fibonacc{
    public static void main(String[] args) {

        /*
        int a=0;
        int b=1;
        int index=6;
        int next;

        for(int i=1;i<=index;i++){
            System.out.print(a+", ");
            next=a+b; //next num calculate karo
            a=b;    // next iteration ke liye a and b ko swap karo
            b=next;  //again next ko b se swap

        }

        */

       int index=10;
       for(int i=0;i<=index-1;i++){
        System.out.print(fibonacci(i)+", ");
       }

       // Note - bas each index ke value vo function se calculate karke 
       // for loop ke through print kara lenge;

    }

    static int fibonacci(int index){
        //base case
        if(index==0 || index==1 ){
            
            return index ;
        }
        int leftCall=fibonacci(index-1);
        int rightCall=fibonacci(index-2);

        return leftCall + rightCall;

        
    }

    
}