public class Main {
    public static void main(String[] args) {
        // Hello, World!
        System.out.println("Hello, World!");

        // Variables and types
        String name = "Victor";
        int age = 22;
        int height = 190;
        int weight = 55;

        System.out.printf("\n%s is %dcm tall and weighs %dkg.\n", name, height, weight);

        // For loop
        System.out.println("\nFor loop:");
        for (int i = 0; i < 5; i++) {
            System.out.printf("Count: %d\n", i);
        }

        // While loop
        System.out.println("\nWhile loop:");
        int count = 0;
        while (count < 3) {
            System.out.printf("Count: %d\n", count);
            count++;
        }

        // Conditionals
        System.out.println("\nConditionals:");
        if (age < 18) {
            System.out.println("You're a minor.");
        } else if (age >= 18 && age < 65) {
            System.out.println("You're an adult.");
        } else {
            System.out.println("You're a senior.");
        }

        // Functions
        System.out.println("\nFunctions:");
        System.out.println(greet("Victor"));
    }

    // Define the greet() method
    static String greet(String name) {
        return "Hello, " + name + "!";
    }
}