function processData(input) {
    //Enter your code here
    let output;
    const inputSplited = input.split(';');
    let target = inputSplited[2];
    // return 1;
    if (inputSplited[0]==='S') {
        let targetArray = target.split('');
        switch(inputSplited[1]) {     
            case 'M':
                
                target = target.slice(0, -2);
                
                for (let i = 0; i < targetArray.length; i++) {
                    if (targetArray[i] === targetArray[i].toUpperCase()) {
                        targetArray[i] = targetArray[i].toLowerCase();
                        targetArray.splice(i, 0, ' ');
                    }
                }
                output = targetArray.join('');
                return output;
                
            case 'C':
                targetArray[0] = targetArray[0].toLowerCase();
                for (let i = 1; i < targetArray.length; i++) {
                    if (targetArray[i] === targetArray[i].toUpperCase()) {
                        targetArray[i] = targetArray[i].toLowerCase();
                        targetArray.splice(i, 0, ' ');
                    }
                }
                output = targetArray.join('');
                return output;  
            case 'V':
                
                for (let i = 0; i < targetArray.length; i++) {
                    if (targetArray[i] === targetArray[i].toUpperCase()) {
                        targetArray[i] = targetArray[i].toLowerCase();
                        targetArray.splice(i, 0, ' ');
                    }
                }
                output = targetArray.join('');
                return output;
          
      }  
    } else if (inputSplited[0]==='C') {
        let targetArray = target.split('');
        switch(inputSplited[1]) {
            case 'M':
                for (let i = 0; i < targetArray.length; i++) {
                    if (targetArray[i] === ' ') {
                        targetArray.splice(i, 1);
                        targetArray[i] = targetArray[i].toUpperCase();
                    }
                }
                
                targetArray.splice(targetArray.length, 0, '(', ')');
                output = targetArray.join('');
                return output;

            case 'C':
                targetArray[0] = targetArray[0].toUpperCase();
                for (let i = 1; i < targetArray.length; i++) {
                    if (targetArray[i] === ' ') {
                        targetArray.splice(i, 1);
                        targetArray[i] = targetArray[i].toUpperCase();
                    }
                }
               
                output = targetArray.join('');
                return output;
            case 'V':
                for (let i = 0; i < targetArray.length; i++) {
                    if (targetArray[i] === ' ') {
                        targetArray.splice(i, 1);
                        targetArray[i] = targetArray[i].toUpperCase();
                    }
                }
                output = targetArray.join('');
                return output;
        }
    } 
} 

let result = processData('S;V;iPad');
console.log(result);
