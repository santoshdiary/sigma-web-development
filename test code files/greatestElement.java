import java.util.ArrayList;
import java.util.Arrays;

public class greatestElement {
    public static void main(String[] args) {
        int [] num={2,4,1,6,9,11,17,878,12,22};

        System.out.println(largest(num));
        // Scanner sc =new Scanner(System.in); object of scanner class
        ArrayList<String> list =new ArrayList<>();
    }

    public static int largest(int[] arr) {
     
        Arrays.sort(arr); //inplace sort karta hai, void return karta hai
        
        return arr[arr.length-1]; // return last (highest no) of the arr
        // since array is sorted so, i can return second largest no, least no and many more;
       
    }

}
