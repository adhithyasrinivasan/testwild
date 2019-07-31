
public class Hexa {

	public static void main(String[] args) {
		for(int i=72;i<73;i++)
		{String s = "";
	
        for (int n = i; n > 0; n /= 36) {
            int r = n % 36;
            //System.out.println(r);
            s = r < 10 ? r + s : (char) ('A' - 10 + r) + s;
            //s = (char) ('A' - 10 + r) + s;
        }
        if(!s.matches(".*[0-9].*"))
        	System.out.println(s);
        }
	}
	
	
}
