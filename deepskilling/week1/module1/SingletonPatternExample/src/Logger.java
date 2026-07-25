public class Logger {
    private static Logger logObj;

    private Logger() {
        System.out.println("Logger Created");
    }

    public static Logger getLogger() {

        if (logObj == null) {
            logObj = new Logger();
        }

        return logObj;
    }

    public void printLog(String msg) {
        System.out.println("LOG : " + msg);
    }

}
