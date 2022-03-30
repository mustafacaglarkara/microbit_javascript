//fonksiyon tanimlanir number tipinde degisken parametre olarak alir. ön tanimli olarak 5 verilmiş
const say =(sayi:number=5)=>{
    // baslangic adinda degisken tanimlanir.
    let baslangic = 0;
    // sifirdan belirtilen değişkene kadar ileri sayar
    while(baslangic < sayi){
        baslangic += 1;
        basic.showNumber(baslangic);
    }
    // belirtilen değişkenden sifira kadar geri sayar
    while(baslangic >= 0){
        basic.showNumber(baslangic);
        baslangic -= 1;
    }
}
say(5);
say();
