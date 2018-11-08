
public class DectoHex {
public static void main(String[] args) {
	
	for(int i=11000;i<1100000;i++)
		convertToHex(i);
	
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

}
