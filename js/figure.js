class Figure extends Chess {
    
    // Writes data about Figure
    constructor(pos, type, team) {
        super()
        this.pos = pos
        this.type = type
        this.team = team
    }

    // Calculate step
    step(box) {
        let el = document.getElementById(Chess.selected)
        let row = Number(el.dataset.row)
        let col = Number(el.dataset.col)

        let newPos = document.getElementById(box)
        let newRow = Number(newPos.dataset.row)
        let newCol = Number(newPos.dataset.col)

        this.pos = box
        this.row = newRow
        this.col = newCol

        this.editArea(row, col, 0)
        this.editArea(newRow, newCol, this.team)
        this.setPiece(Chess.selected, "0", 0)
        this.setPiece(box, this.type, this.team)

        this.clearSelected()
        this.update()
        this.changeStep()
        this.updateInfoBar()

        Chess.selected = 0
    }

    // Calculate attack
    attack(box) {
        let el = document.getElementById(Chess.selected)
        let row = Number(el.dataset.row)
        let col = Number(el.dataset.col)

        let newPos = document.getElementById(box)
        let newRow = Number(newPos.dataset.row)
        let newCol = Number(newPos.dataset.col)

        if(newPos.dataset.piece == "K") {
            alert("End")
            location.reload()
        }

        this.pos = box
        this.row = newRow
        this.col = newCol

        this.editArea(row, col, 0)
        this.editArea(newRow, newCol, this.team)
        this.setPiece(Chess.selected, "0", 0)
        this.setPiece(box, this.type, this.team)

        this.clearSelected()
        this.update()

        if(this.team == 1)
            Chess.score_second -= 1;
        else
            Chess.score_first -= 1;

        Chess.selected = 0
        this.changeStep()
        this.updateInfoBar()

    }
}
