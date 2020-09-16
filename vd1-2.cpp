#include <iostream>
#include <cmath>
using namespace std;
int main()
{
    double a, b, c, p, s;
    cout << "Cho ba canh: ";
    cin >> a >> b >> c;
    //Kiem tra ba canh tam giac
    if ((a>0) && (b>0) && (c>0) && (a + b>c) && (b + c>a) && (c + a>b))
    {
        cout << "Day la ba canh tam giac"
        p = (a + b + c) / 2;
        s = sqrt(p * (p - a) * (p - b) * (p - c));
        cout << "Dien tich = " << s;
    }
    else
        cout << "Day khong phai ba canh tam giac";
}


