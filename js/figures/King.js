class King extends Figure {
    checkBoxes(row, col, value) {
        let boxes = [];

        for(let i=0; i<8; i++) {
            switch(i) {
                case 0:
                    if(row+1 < 8)
                        if(this.getValueOfArea(row+1, col) == value)
                            boxes.push([row+1, col])
                    break;
                case 1:
                    if(row+1 < 8 && col+1 < 8)
                        if(this.getValueOfArea(row+1, col+1) == value)
                            boxes.push([row+1, col+1])
                    break;
                case 2:
                    if(row+1 < 8 && col-1 > -1)
                        if(this.getValueOfArea(row+1, col-1) == value)
                            boxes.push([row+1, col-1])
                    break;
                case 3:
                    if(col+1 < 8)
                        if(this.getValueOfArea(row, col+1) == value)
                            boxes.push([row, col+1])
                    break;
                case 4:
                    if(col-1 > -1)
                        if(this.getValueOfArea(row, col-1) == value)
                            boxes.push([row, col-1])
                    break;
                case 5:
                    if(row-1 > -1)
                        if(this.getValueOfArea(row-1, col) == value)
                            boxes.push([row-1, col])
                    break;
                case 6:
                    if(row-1 > -1 && col+1 < 8)
                        if(this.getValueOfArea(row-1, col+1) == value)
                            boxes.push([row-1, col+1])
                    break;
                case 7:
                    if(row-1 > -1 && col-1 > -1)
                        if(this.getValueOfArea(row-1, col-1) == value)
                            boxes.push([row-1, col-1])
                    break;       
            }
        }

        return boxes
    }


    move() {
        Chess.selected = this.pos
        let el = document.getElementById(this.pos)
        let col = Number(el.dataset.col)
        let row = Number(el.dataset.row)
        

        let boxes = this.checkBoxes(row, col, 0)

        for(let box of boxes)
            this.ways(box[0], box[1])

        boxes = this.checkBoxes(row, col, this.team == 1 ? 2 : 1)

        for(let box of boxes)
            this.attacks(box[0], box[1])
    }
}