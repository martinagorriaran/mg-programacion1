export default class Area{

    radio;
    base;
    altura;
    basesup;
    baseinf;
    altura_tra;

    constructor(r,b,a,bs,bi,at){
        this.radio = r;
        this.base = b;
        this.altura = a;
        this.basesup = bs;
        this.baseinf = bi;
        this.altura_tra = at;
    }

    calcular_areac(){
        const resultadoradio = 3.14*(Math.pow(this.radio,2))
        return resultadoradio;
    }

    calcular_areatriangulor(){
        const resultadoareatriangulo = (this.base*this.altura)/2;
        return resultadoareatriangulo;
       
    }

    calcular_areatrapecio(){
        const resultadotrapecio = ((this.basesup+this.baseinf)*this.altura_tra)/2;
        return resultadotrapecio;

    }
}