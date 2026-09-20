

class printFibonacci{

    public static void main(String[] args) {
        int a=0;
        int b=1;
        int sum;
        int idx=3;

        for(int i=0;i<=idx;i++){
            System.out.print(a+ " ");
            sum=a+b;
            a=b;
            b=sum;

        }
    }
}