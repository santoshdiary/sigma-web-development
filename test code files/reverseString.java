public class reverseString {
    //since in java Strings are immutable that means we can't modify the acutal array
    public static void main(String[] args) {

        String name="Santosh";
        System.out.println(reverse(name));
        
    }
    static String reverse(String str){

        //convert string into character array for swapping
        char [] charArray=str.toCharArray();
        
        //swapping
        int sIdx=0;
        int eIdx=charArray.length-1;

        while(sIdx<eIdx){
            char temp;
            temp=charArray[sIdx];
            charArray[sIdx]=charArray[eIdx];
            charArray[eIdx]=temp;

            sIdx++;
            eIdx--;

        }
        //again convert back into string from char array;
        String ans= new String(charArray);
        return ans;

        
        

    
    }
    
}
