import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
public class arraylistSort {
    public static void main(String[] args) {
       ArrayList <Integer> list=new ArrayList<>();
       int [] arr ={2,8,1,5,18,20};
       list.add(3);
       list.add(4);
       list.add(7);
       list.add(2);
       list.add(4);
       list.add(6);

       Collections.sort(list);
       Arrays.sort(arr);
       System.out.println(Arrays.toString(arr));

       System.out.println(list);
    }
}
