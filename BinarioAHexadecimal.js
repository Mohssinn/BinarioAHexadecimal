function hexa() {
    var n="11111111111111111111111111100000001001010101010101";
 
    var l = n.length-1; // desde que posicion empieza a recorrer el array
    var a = [];
    var r = []; //array del resultado
    var tamGrupo = 0; //aqui se ira guardando el tamaño del grupo restante del binario
    
    var e = l+1; //e es la longitud del numero binario (se coloca en la ultima posicion)
    for(i=0; i<=(l/4);i++){ //i se ejecuta tantas veces como grupos de 4 tengamos
        tamGrupo = n.length; //cada vez que ejecutamos el bucle guardamos el tamaño del binario restante
        
        if((l+1)%4 && tamGrupo < 4){ //en el caso de que el binario no sea exactos grupos de 4 & el tamaño del grupo restante sea menor que 4
            if(n.length == 1){
                a.push("000"+n);
            }
            else if (n.length == 2){
                a.push("00"+n);
            }
            else if(n.length == 3){
                a.push("0"+n);
            }
        }
        else{
            
            a.push(n.substr(e-4,e)); //cogemos los 4 ultimos numeros, desde e-4 hasta e
            n = n.slice(0, e-4); //quitamos de n los numeros ya añadidos
            e = e-4; //retrasamos la posicion 4 posiciones
        }
        
    }
    
    print(a);
    
    for(i=0;i<=l/4;i++){ 
        if(a[i]=='0000'){ //0
            r.push(0);
        }
        if(a[i]=='0001'){ //1
            r.push(1);
        }

        if(a[i]=='0010'){ //2
            r.push(2);
        }
        if(a[i]=='0011'){ //3
            r.push(3);
        }
        if(a[i]=='0100'){ //4
            r.push(4);
        }
        if(a[i]=='0101'){ //5
            r.push(5);
        }
        if(a[i]=='0110'){ //6
            r.push(6);
        }
        if(a[i]=='0111'){ //7
            r.push(7);
        }
        if(a[i]=='1000'){ //8
            r.push(8);
        }
        if(a[i]=='1001'){ //9
            r.push(9);
        }
        if(a[i]=='1010'){ //A
            r.push('A');
        }
        if(a[i]=='1011'){ //B
            r.push('B');
        }
        if(a[i]=='1100'){ //C
            r.push('C');
        }
        if(a[i]=='1101'){ //D
            r.push('D');
        }
        if(a[i]=='1110'){ //E
            r.push('E');
        }
        if(a[i]=='1111'){ //F
            r.push('F');
          }
    }
    print(r.reverse());
}

hexa();