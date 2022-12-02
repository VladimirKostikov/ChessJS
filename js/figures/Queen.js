class Queen extends Figure {
    vertical(row, col, value) {
        let vertical = []
        let k
        for(let i=1; i<Chess.MAX-row; i++) {
            if(value == 0) {
                if(this.getValueOfArea(row+i,col) == value) {
                    let arr = [row+i,col]
                    vertical.push(arr)
                }
                else break;
            }
            else {
                if(this.getValueOfArea(row+i,col) != 0)
                    if(this.getValueOfArea(row+i,col) == value) {
                        let arr = [row+i,col]
                        vertical.push(arr)
                        break;
                    }
                else break;
            }
        }

        k=1
        for(let i=row; i>0; i--) {
            if(value == 0) {
                if(this.getValueOfArea(row-k,col) == value) {
                    let arr = [row-k,col]
                    vertical.push(arr)
                    k++
                }
                else break;
            }
            else {
                if(this.getValueOfArea(row-k,col) != 0)
                    if(this.getValueOfArea(row-k,col) == value) {
                        let arr = [row-k,col]
                        vertical.push(arr)
                        break;
                    }
                else break;
                k++
            }
        }

        return vertical
    }

    horizontal(row, col, value) {
        let horizontal = []
        let k
        for(let i=1; i<Chess.MAX-col; i++) {
            if(value == 0) {
                if(this.getValueOfArea(row,col+i) == value) {
                    let arr = [row, col+i]
                    horizontal.push(arr)
                }
                else break;
            }
            else {
                if(this.getValueOfArea(row,col+i) != 0)
                    if(this.getValueOfArea(row,col+i) == value) {
                        let arr = [row, col+i]
                        horizontal.push(arr)
                        break;
                    }
                else break;
            }
        }

        k=1;
        for(let i=col; i>0; i--) {
            if(value == 0) {
                if(this.getValueOfArea(row,col-k) == value) {
                    let arr = [row, col-k]
                    horizontal.push(arr)
                    k++
                }
                else break;
            }
            else {
                if(this.getValueOfArea(row,col-k) != 0)
                    if(this.getValueOfArea(row,col-k) == value) {
                        let arr = [row, col-k]
                        horizontal.push(arr)
                        break;
                    }
                else break;
                k++
            }
        }

        return horizontal
    }

    diagonal(row, col, value) {
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
            (col-k)
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

        let horizontal = this.horizontal(row, col, 0)
        let vertical = this.vertical(row,col,0)

        for(let hor of horizontal) {
            this.ways(hor[0],hor[1])
        }

        for(let ver of vertical) {
            this.ways(ver[0], ver[1])
        }

        let listOfWays = []
        listOfWays = this.diagonal(row, col, 0)

        for(let way of listOfWays)
            this.ways(way[0], way[1])

        let enemy = this.team == 1 ? 2 : 1   
        listOfWays = this.diagonal(row, col, enemy)  

        for(let way of listOfWays)
            this.attacks(way[0], way[1])

        horizontal = this.horizontal(row, col, this.team == 1 ? 2 : 1)
        vertical = this.vertical(row, col, this.team == 1 ? 2 : 1)

        for(let hor of horizontal) {
            this.attacks(hor[0],hor[1])
        }

        for(let ver of vertical) {
            this.attacks(ver[0], ver[1])
        }
    }
}

