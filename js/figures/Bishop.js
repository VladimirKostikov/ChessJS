class Bishop extends Figure {
    checkBox(row, col, value) {
        let listOfWays = []

        let k=1;
        for(let i=0; i<Chess.MAX; i++) {
            if(row+k > -1 && col+k > -1 && row+k < 8 && col+k < 8) {
                if(value == 0) {
                    if(this.getValueOfArea(row+k, col+k) == value)
                        listOfWays.push([row+k, col+k])
                    else break;    
                }

                if(value != 0) {
                    if(this.getValueOfArea(row+k, col+k) == value) {
                        listOfWays.push([row+k, col+k])
                        break;
                    }
                }
            }
            else break;
            k++;
        }

        k=1
        for(let i=0; i<Chess.MAX; i++) {
            if(row+k > -1 && col-k > -1 && row+k < 8 && col-k < 8) {
                if(value == 0) {
                    if(this.getValueOfArea(row+k, col-k) == value)
                        listOfWays.push([row+k, col-k])
                    else break;    
                }

                if(value != 0) {
                    if(this.getValueOfArea(row+k, col-k) == value) {
                        listOfWays.push([row+k, col-k])
                        break;
                    }
                }
            }
            else break;
            k++;
        }

        k=1
        for(let i=0; i<Chess.MAX; i++) {
            if(row-k > -1 && col-k > -1 && row-k < 8 && col-k < 8){
                if(value == 0) {
                    if(this.getValueOfArea(row-k, col-k) == value)
                        listOfWays.push([row-k, col-k])
                    else break;    
                }

                if(value != 0) {
                    if(this.getValueOfArea(row-k, col-k) == value) {
                        listOfWays.push([row-k, col-k])
                        break;
                    }
                }
            }
            else break;
            k++;
        }

        k=1
        for(let i=0; i<Chess.MAX; i++) {
            if(row-k > -1 && col+k > -1 && row-k < 8 && col+k < 8){ 
                if(value == 0) {
                    if(this.getValueOfArea(row-k, col+k) == value)
                        listOfWays.push([row-k, col+k])
                    else break;    
                }

                if(value != 0) {
                    if(this.getValueOfArea(row-k, col+k) == value) {
                        listOfWays.push([row-k, col+k])
                        break;
                    }
                }
            }
            else break;
            k++;
        }

        return listOfWays
    }

    move() {
        Chess.selected = this.pos
        let el = document.getElementById(this.pos)
        let col = Number(el.dataset.col)
        let row = Number(el.dataset.row)

        let listOfWays = []
        listOfWays = this.checkBox(row, col, 0)

        for(let way of listOfWays)
            this.ways(way[0], way[1])

        let enemy = this.team == 1 ? 2 : 1   
        listOfWays = this.checkBox(row, col, enemy)  
        
        for(let way of listOfWays)
            this.attacks(way[0], way[1])
    }
}