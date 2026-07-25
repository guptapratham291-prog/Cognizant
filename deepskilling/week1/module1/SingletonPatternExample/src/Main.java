public class Main {
    public static void main(String[] args) {

        Logger first = Logger.getLogger();
        Logger second = Logger.getLogger();

        first.printLog("Application Started");
        second.printLog("User Login Successful");

        System.out.println(first);
        System.out.println(second);

        if (first == second) {
            System.out.println("Same object is used.");
        } else {
            System.out.println("Different objects are created.");
        }
    }

}
