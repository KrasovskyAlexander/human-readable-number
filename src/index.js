module.exports = function toReadable (number) {
    if(number==0) return 'zero';
    const units = {
        
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen'
    };
    const twoВigit = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    }




    if(number<20){
        for(let [key,value] of  Object.entries(units)){
            if(number==key) return value;
        }
    }
    let numArr = (''+number).split('');
    let res='';
    let a = '';
    if(number>19&&number<100){
        for (let i = 0; i < numArr.length; i++) {
            if(i==0){
                for(let [key,value] of Object.entries(twoВigit)){
                    if(key==numArr[i]){
                        res+= numArr[1]==0? value+'':value+' ';
                    }
                }
            }else{
                for(let [key,value] of Object.entries(units)){
                    if(key==numArr[i]){
                        res+=value;
                    }
                }
            }
        }
        return res;
    }else{
        for (let i = 0; i < numArr.length; i++) {
            if(i==0){
                for(let [key,value] of Object.entries(units)){
                    if(key==numArr[i]){
                        res+=value+' hundred'
                    }
                }
            }else if(i==1){
                if(numArr[i]==1){
                    a= ''+numArr[i]+numArr[i+1];
                    for(let [key,value] of Object.entries(units)){
                        if(key==a){
                            res+=' '+value;
                        }
                    }
                }else{
                    for(let [key,value] of Object.entries(twoВigit)){
                        if(key==numArr[i]){
                            res+=' '+value;
                        }
                    }
                }
            }else if(i==2 && numArr[1]!=1){
                for(let [key,value] of Object.entries(units)){
                    if(key==numArr[i]){
                        res+=' '+value;
                    }
                }
            }
        }
        console.log(res)
        return res;
    }
    

}