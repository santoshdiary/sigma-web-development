import java.util.ArrayList;

public class removeDuplicate {
    public static void main(String[] args) {
        int[] arr = {1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5};
        System.out.println(removeDuplicates(arr));
    }

    static ArrayList<Integer> removeDuplicates(int[] arr) {
        ArrayList<Integer> ans = new ArrayList<>();
        
        if (arr.length == 0) {
            return ans;
        }
        
        // Always add the first element
        ans.add(arr[0]);
        
        // Compare each element with its previous element
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1]) {
                ans.add(arr[i]);
            }
        }
        
        return ans;
    }
}