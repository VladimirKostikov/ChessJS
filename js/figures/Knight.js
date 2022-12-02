class Knight extends Figure {
    checkBox(col, row, value) {
        let listOfWays = []
        for(let i=0; i<8; i++) {
            switch(i) {
                case 0:
                    if(row+2 > -1 && row+2 < 8 && col+1 > -1 && col+1 < 8)
                        if(this.getValueOfArea(row+2, col+1) == value)
                            listOfWays.push([row+2, col+1])
                    break;
                case 1:
                    if(row+2 > -1 && row+2 < 8 && col-1 > -1 && col-1 < 8)
                        if(this.getValueOfArea(row+2, col-1) == value)
                            listOfWays.push([row+2, col-1])
                    break;
                case 2:
                    if(row+1 > -1 && row+1 < 8 && col+2 > -1 && col+2 < 8)
                        if(this.getValueOfArea(row+1, col+2) == value)
                            listOfWays.push([row+1, col+2])
                    break;    
                case 3:
                    if(row+1 > -1 && row+1 < 8 && col-2 > -1 && col-2 < 8)
                        if(this.getValueOfArea(row+1, col-2) == value)
                            listOfWays.push([row+1, col-2])
                    break;
                case 4:
                    if(row-1 > -1 && row-1 < 8 && col+2 > -1 && col+2 < 8)
                        if(this.getValueOfArea(row-1, col+2) == value)
                            listOfWays.push([row-1, col+2])
                    break;
                case 5:
                    if(row-1 > -1 && row-1 < 8 && col-2 > -1 && col-2 < 8)
                        if(this.getValueOfArea(row-1, col-2) == value)
                            listOfWays.push([row-1, col-2])
                    break;
                case 6:
                    if(row-2 > -1 && row-2 < 8 && col-1 > -1 && col-1 < 8)
                        if(this.getValueOfArea(row-2, col-1) == value)
                            listOfWays.push([row-2, col-1])
                    break;
                case 7:
                    if(row-2 > -1 && row-2 < 8 && col+1 > -1 && col+1 < 8)
                        if(this.getValueOfArea(row-2, col+1) == value)
                            listOfWays.push([row-2, col+1])
                    break;
            }
        }

        return listOfWays
    }

    move() {
        Chess.selected = this.pos
        let el = document.getElementById(this.pos)
        let col = Number(el.dataset.col)
        let row = Number(el.dataset.row)

        let listOfWays = this.checkBox(col, row, 0)

        for(let obj of listOfWays)
            this.ways(obj[0], obj[1])

        let enemy = this.team == 1 ? 2 : 1

        listOfWays = this.checkBox(col, row, enemy)

        for(let obj of listOfWays)
            this.attacks(obj[0], obj[1])
    }
}