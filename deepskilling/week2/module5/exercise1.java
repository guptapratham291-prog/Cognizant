package singletonpatternexample;

public class Logger {

    private static final Logger instance = new Logger();

    private Logger() {
        System.out.println("Initializing new Logger instance...");
    }

    public static Logger getInstance() {
        return instance;
    }

    public void logMessage(String message) {
        System.out.println("LOG >> " + message);
    }
}