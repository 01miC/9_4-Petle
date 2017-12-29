

function drawTree(r) {
    
    for (i = 1; i <= r; i++) {
        var star = ' ';
        var space = '';

        //spacer
        for (k=0; k <= r-i; k++) {
            space += ' ';
        }
        //fill
        for (j = 1; j <= i; j++) {
            
            star += '* ';
            
        }
        //display
        console.log(space+star); 
        
        }

        var log = '';
            for (x=1;x<2; x++) {
                for (t=1; t <= r-1; t++ ) {
                    log += ' ';
                }
                if (r<=7) {
                    console.log(log+'Choinka');
                } else if (r>7 && r<15) {
                    console.log(log+'|  |');
                    console.log(log+'Choinka');
                } else {
                    console.log(log+'|  |');
                    console.log(log+'|  |');
                    console.log(log+'Choinka');
                }                
            }
        

}

var howBig = prompt('Jak duża ma być choinka?');
drawTree(howBig);

