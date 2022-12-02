class Pawn extends Figure {

    checkAttacks(row, col) {
        if(this.team == 1) {
            if(this.getValueOfArea(row+1, col+1) == 2)
                this.attacks(row+1, col+1)
            if(this.getValueOfArea(row+1, col-1) == 2)
                this.attacks(row+1, col-1)
        }
        if(this.team == 2) {
            if(this.getValueOfArea(row-1, col+1) == 1)
                this.attacks(row-1, col+1)
            if(this.getValueOfArea(row-1, col-1) == 1)
                this.attacks(row-1, col-1)
        }
    }
    move() {
        Chess.selected = this.pos
        let el = document.getElementById(this.pos)
        let col = Number(el.dataset.col)
        let row = Number(el.dataset.row)
        let boxes;

        if(this.team == 1) {
            this.checkAttacks(row, col)
            if(row+1 != 8 && row+2 != 8 && row == 1) {
                boxes = [
                    this.getValueOfArea(row+1, col),
                    this.getValueOfArea(row+2, col)
                ]
                if(boxes[0] == 0 && boxes[1] == 0) {
                    this.ways(row+1, col)
                    this.ways(row+2, col)
                }
                else {
                    if(boxes[0] == 0)
                        this.ways(row+1, col)
                }
            }
            else {
                if(row+1 != 8) {
                    boxes = this.getValueOfArea(row+1, col)
                    if(boxes == 0)
                        this.ways(row+1, col)
                }
            }
        }
        else {
            if(this.team == 2) {
                this.checkAttacks(row, col)
                if(row-1 != 8 && row-2 != 8 && row == 6) {
                    boxes = [
                        this.getValueOfArea(row-1, col),
                        this.getValueOfArea(row-2, col)
                    ]
                    if(boxes[0] == 0 && boxes[1] == 0) {
                        this.ways(row-1, col)
                        this.ways(row-2, col)
                    }
                    else {
                        if(boxes[0] == 0)
                            this.ways(row-1, col)
                    }
                }
                else {
                    if(row-1 != 8) {
                        boxes = this.getValueOfArea(row-1, col)
                        if(boxes == 0)
                            this.ways(row-1,col)
                    }
                }
            }
        }
    }
}