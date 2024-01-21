function newChessBoard(num) {
    let result = "";

    for (let i = 0; i <= num - 1; i++) {

        for (let j = 0; j < num; j++) {
            result += (i + j) % 2 === 0 ? "black " : "white " ;
        }
        result += "\n";
        
    }
    console.log(result);
    
}
newChessBoard(5);
