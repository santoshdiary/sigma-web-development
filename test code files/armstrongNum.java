class armstrongNum {
    public static void main(String[] args) {
        int num = 163;

        if (isArm(num)) {
            System.out.println("Yes ");
        } else {
            System.out.println("NO it's not Armstrong No. ");
        }

    }

    static boolean isArm(int n) {
        int temp = 0;
        int num = n;
        int digits = totalDigit(num);
        while (num != 0) {
            int currDigit = num % 10;
            temp += (int) Math.pow(currDigit, digits);
            num/=10;
        }

        return (temp == n);
    }

    static int totalDigit(int n) {
        int count = 0;
        while (n != 0) {
            n /= 10;
            count++;
        }
        return count;
    }
}