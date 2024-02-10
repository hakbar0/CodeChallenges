public class CodeWars {
  public static int strCount(String str, char letter) {
    String letterAsString = String.valueOf(letter);
    int occurences = str.split(letterAsString, -1).length - 1;
    return occurences;
  }
}