public class fibo {

    static void fibonacci(int n, int a, int b) {
        if (n == 0) {
            return;
        }

        System.out.print(a + " ");

        fibonacci(n - 1, b, a + b);
    }

    public static void main(String[] args) {
        int n = 10;

        fibonacci(n, 0, 1);
    }
}