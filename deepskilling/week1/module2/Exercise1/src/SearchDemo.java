public class SearchDemo {

    // Linear Search
    public static Product linearSearch(Product[] products, int id) {

        for (int i = 0; i < products.length; i++) {

            if (products[i].productId == id) {
                return products[i];
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int id) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            if (products[mid].productId == id) {
                return products[mid];
            }

            if (products[mid].productId < id) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        Product p1 = linearSearch(products, 103);

        if (p1 != null) {
            System.out.println("Linear Search Found : " + p1.productName);
        }

        Product p2 = binarySearch(products, 104);

        if (p2 != null) {
            System.out.println("Binary Search Found : " + p2.productName);
        }
    }
}
/*
 * Big O Notation:
 * Used to measure the efficiency of an algorithm as input size grows.
 *
 * Linear Search:
 * Best Case    : O(1)
 * Average Case : O(n)
 * Worst Case   : O(n)
 *
 * Binary Search:
 * Best Case    : O(1)
 * Average Case : O(log n)
 * Worst Case   : O(log n)
 *
 * Binary Search is more efficient for large datasets
 * because it eliminates half of the search space in
 * every iteration. The array must be sorted before
 * performing Binary Search.
 */