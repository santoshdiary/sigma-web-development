class charPermution{

static int permution(int r, int g, int y, char last){
    int total=0;

    //base case
    if(r==0 && g==0 && y==0 ){
        return 1;
    }

    if(r>0 && last!='r'){
        total+=permution(r-1, g, y, 'r');
    }
    if(g>0 && last!='g'){
        total+=permution(r, g-1, y, 'g');
    }
    if(y>0 && last!='y'){
        total+=permution(r, g, y-1, 'y');
    }

    return total;

}


    public static void main(String[] args) {
        int r=1;
        int y=1;
        int g=1;
        char last=' ';
        int a=permution(r,g,y,last);
        System.out.println(a);
    }
}