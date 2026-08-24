
class Animal{
    void eat(){
        System.out.println("Animal Eating..");
    }
    void run(){
        System.out.println("Animal running");
    }
}
class Dog extends Animal{
    @Override
    void eat(){
        System.out.println("dog is eating");
    }
    void burk(){
        System.out.println("Dog is burking");
    }


}
public class polymorphism {
    Dog dog=new Dog();
    
}