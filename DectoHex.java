
public class DectoHex {
public static void main(String[] args) {
	
	
	convertToHex(500);
	convertToBin(500);
	
}
static void convertToHex(int n)
{
	String rem="";
	while(n>0)
	{
		int remn=n%16;
		if(remn>=10 && remn<=15)
		{
			char a=(char)('A'+remn-10);
			rem=a+rem;
		}
		else
			rem=remn+rem;
		n=n/16;
	}
	System.out.println(rem);
}
static void convertToBin(int n)
{
	String rem="";
	while(n>0)
	{
		int remn=n%2;
		rem=remn+rem;
		n=n/2;
	}
	System.out.println(rem);
}


}
