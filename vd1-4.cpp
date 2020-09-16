// tinh tong cac chu so cua N
#include <iostream>
using namespace std;
int main() {
	long N, Sum;
	int d;
	cout << "N = ";
	cin >> N;
	Sum = 0;
	do 
	{
		d = N % 10;   // lay chu so hang don vi cua N
		Sum = Sum + d;
		N = N / 10;   // giam N di 1 chu so
	} while (N != 0);
	cout << "Tong cac chu so la: " << Sum << endl;
	return 0;
}



