
class isPalindromN{
   
    public static void main(String [] args){

    int num=121;
    if(isPalindrom(num)){
        System.out.print("Number is palindrom");

    }else{
        System.out.print("Number is Not palindrom");
    }
        
    }
     static boolean check (int n) {
        int reverse=0;
        int temp=Math.abs(n);

        while(temp!=0){
            reverse=(reverse*10)+(temp%10);
            temp=temp/10;
        }
        return (reverse==Math.abs(n));
    }
    static boolean isPalindrom(int n){ //using String Property
        String num= String.valueOf(n);
        int sIdx=0;
        int eIdx=num.length()-1;
        while(sIdx<=eIdx){
            if(num.charAt(sIdx)!=num.charAt(eIdx)) return false;
            sIdx++;
            eIdx--;

        }

        return true;
    }
}