import java.util.Arrays;

class bubbleSort{
    public static void main(String[] args) {
        int []arr={4,1,6,2,5,9,7,11};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }
    static void sort(int [] arr){

        boolean isSwapped=false;

        for(int i=0;i<arr.length;i++){ // different passes(iteration)
            for(int j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    int temp=arr[j+1];
                    arr[j+1]=arr[j];
                    arr[j]=temp;
                    isSwapped=true;
                }
            }
            // 1st iteration me swapping nhi hui, that means array is already sorted; optimized for best case
            if(!isSwapped)return;
        }
    }
}