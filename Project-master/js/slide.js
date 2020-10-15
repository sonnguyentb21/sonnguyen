var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = KichThuoc * (Img.length-1);
var AnimeSlide = document.getElementsByClassName("anime-slide")[0];
var AnimePlay = AnimeSlide.getElementsByTagName("a");
var Chuyen = 0;
function Next() {
    if(Chuyen<Max){
    Chuyen+=KichThuoc;
    }
    else Chuyen=0;
    ChuyenSlide.style.marginLeft = '-' + Chuyen +'px';
}

function Back() {
    if (Chuyen==0) {
        Chuyen=Max;
    }
    else Chuyen-=KichThuoc;
    ChuyenSlide.style.marginLeft = '-' + Chuyen +'px';
}

function Play() {
        let i = Chuyen/1000;
        window.location = AnimePlay[i];
}
