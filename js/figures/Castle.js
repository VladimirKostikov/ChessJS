class Castle extends Figure {
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

    
    move() {
        Chess.selected = this.pos
        let el = document.getElementById(this.pos)
        let col = Number(el.dataset.col)
        let row = Number(el.dataset.row)

        let horizontal = []
        let vertical = []
        let k

        horizontal = this.horizontal(row, col, 0)
        vertical = this.vertical(row,col, 0)
        
        for(let hor of horizontal) {
            this.ways(hor[0],hor[1])
        }

        for(let ver of vertical) {
            this.ways(ver[0], ver[1])
        }

        horizontal = this.horizontal(row, col, this.team == 1 ? 2 : 1)
        vertical = this.vertical(row,col, this.team == 1 ? 2 : 1)

        for(let hor of horizontal) {
            this.attacks(hor[0],hor[1])
        }

        for(let ver of vertical) {
            this.attacks(ver[0], ver[1])
        }
    }
}