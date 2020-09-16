// tinh dien tich tam giac theo cong thuc Heron
#include <iostream>
#include <cmath>
using namespace std;
int main()
{
  double a, b, c, p, s;
  cout << "Cho ba canh: ";
  cin >> a >> b >> c;
  p = (a + b + c) / 2;
  s = sqrt(p * (p - a) * (p - b) * (p - c));
  cout << "Dien tich = " << s;
}



