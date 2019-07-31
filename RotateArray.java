
public class RotateArray {
	
	public static void main(String[] args) {
		int a[]={1,2,3,4,5};
		System.out.println("Before rotate");
		for(Integer b:a)
		{
			System.out.println(b);
		}
		System.out.println("After rotate");
		for(int i=0;i<a.length-1;i++)
		{
			int temp=0;
			temp=a[i];
			a[i]=a[i+1];
			a[i+1]=temp;
		}
		for(Integer b:a)
		{
			System.out.println(b);
		}
		
	}

}

