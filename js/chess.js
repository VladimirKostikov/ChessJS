class Chess {
    // Static properties
    static MAX = 8;
    static selected = 0;
    static area = 0;
    static score_first = 16;
    static score_second = 16;
    static name_first = prompt("Enter name of the first player");
    static name_second = prompt("Enter name of the second player");
    static step = 2;

    // Game area. Fixed positions of pieces. 1 - blacks, 2 - whites
    makeArea() {
        Chess.area = [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
        ]
    }

    // Get selected element
    getSelected() {
        return document.getElementById(Chess.selected)
    }

    // Edit game area
    editArea(row, col, value) {
        Chess.area[row][col] = value
    }

    // Switch step to another player
    changeStep() {
        Chess.step = Chess.step == 1 ? 2 : 1
    }

    // Get value in box
    getValueOfArea(row, col) {
        return Chess.area[row][col]
    }

    // Init black pieces
    initBlackPieces() {
        for(let i=0; i<8; i++)
            switch(i) {
                case(0):
                case(7):
                    this.setPiece(0, 'C1', 1)
                    this.setPiece(7, 'C2', 1)
                    this.editArea(0,0,1)
                    this.editArea(0,7,1)
                    break;
                case(1):
                case(6):
                    this.setPiece(1, 'Kn1', 1)
                    this.setPiece(6, 'Kn2', 1)
                    this.editArea(0,1,1)
                    this.editArea(0,6,1)
                    break;
                case(2):
                case(5):
                    this.setPiece(2, 'B1', 1)
                    this.setPiece(5, 'B2', 1)
                    this.editArea(0,2,1)
                    this.editArea(0,5,1)
                    break;
                case(3):
                case(4):
                    this.setPiece(4, 'K', 1)
                    this.setPiece(3, 'Q', 1)
                    this.editArea(0,4,1)
                    this.editArea(0,3,1)
                    break;

            }
        let k = 0
        for(let i=8; i<16; i++) {
            this.setPiece(i, 'P'+k, 1) 
            this.editArea(1,i-8,1)
            k++
        }
    }
    // Init white pieces
    initWhitePieces() {
        for(let i=56; i<64; i++)
            switch(i) {
                case(56):
                case(63):
                    this.setPiece(56, 'C1', 2)
                    this.setPiece(63, 'C2', 2)
                    this.editArea(7,0,2)
                    this.editArea(7,7,2)
                    break;
                case(57):
                case(62):
                    this.setPiece(57, 'Kn1', 2)
                    this.setPiece(62, 'Kn2', 2)
                    this.editArea(7,1,2)
                    this.editArea(7,6,2)
                    break;
                case(58):
                case(61):
                    this.setPiece(58, 'B1', 2)
                    this.setPiece(61, 'B2', 2)
                    this.editArea(7,2,2)
                    this.editArea(7,5,2)
                    break;
                case(59):
                case(60):
                    this.setPiece(60, 'K', 2)
                    this.setPiece(59, 'Q', 2)
                    this.editArea(7,3,2)
                    this.editArea(7,4,2)
                    break;

            }
        let k = 0;
        for(let i=48; i<56; i++) {
            this.setPiece(i, 'P'+k, 2)  
            this.editArea(6, k, 2);
            k++  
        }
    }


    // Set piece to block
    setPiece(element, type, team) {
        let el = document.getElementById(element)
        el.dataset.piece = type
        el.dataset.team = team
    }

    // Clear all selected boxes
    clearSelected() {
        let divs = document.getElementsByTagName("div")
        
        for(let i = 0; i < divs.length; i++){
            divs[i].classList.remove("selected")
            divs[i].classList.remove("way")
            divs[i].classList.remove("attack")
        }
    }

    // Updating desk
    update() {
        for(let i=0; i<64; i++) {
            let el = document.getElementById(i)
            
            if(el.dataset.piece != 0)
                el.innerHTML = el.dataset.piece
            else
                el.innerHTML = ""
        }
    }

    // Init figures
    init() {
        // Black pieces  
        this.initBlackPieces()

        // White pieces
        this.initWhitePieces()
    }

    // Change div element
    ways(row, col) {
        row = String(row)
        col = String(col)
        let el = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
        el.classList.add('way')
    }

    // Change div element for attack
    attacks(row, col) {
        row = String(row)
        col = String(col)
        let el = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
        el.classList.add('attack')
        (el)
    }

    // Update information about match
    updateInfoBar() {
        if(Chess.step == 1) {
            document.getElementById('first_player').innerHTML = Chess.name_first + " | Alive: " + Chess.score_first + " | <b style='color: red'>Step</b>"
            document.getElementById('second_player').innerHTML = Chess.name_second + " | Alive: " + Chess.score_second
        }
        else {
            document.getElementById('first_player').innerHTML = Chess.name_first + " | Alive: " + Chess.score_first
            document.getElementById('second_player').innerHTML = Chess.name_second + " | Alive: " + Chess.score_second + " | <b style='color: red'>Step</b>"
        }
    }

    constructor() {
        this.makeArea()
        this.init()
        this.update()
        this.updateInfoBar()
    }

}