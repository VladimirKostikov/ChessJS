const Field = new Chess();

const Figures = {
    blacks: {
        King: new King(4, 'K', 1),
        Quenn: new Queen(3, 'Q', 1),
        Knights: {
            Knight_1: new Knight(1, 'Kn1', 1),
            Knight_2: new Knight(6, 'Kn2', 1)
        },
        Bishops: {
            Bishop_1: new Bishop(2, 'B1', 1),
            Bishop_2: new Bishop(5, 'B2', 1)
        },
        Castles: {
            Castle_1: new Castle(0, 'C1', 1),
            Castle_2: new Castle(7, 'C2', 1)
        },
        Pawns: {
            Pawn_1: new Pawn(8, 'P0', 1),
            Pawn_2: new Pawn(9, 'P1', 1),
            Pawn_3: new Pawn(10, 'P2', 1),
            Pawn_4: new Pawn(11, 'P3', 1),
            Pawn_5: new Pawn(12, 'P4', 1),
            Pawn_6: new Pawn(13, 'P5', 1),
            Pawn_7: new Pawn(14, 'P6', 1),
            Pawn_8: new Pawn(15, 'P7', 1),
        }
    },
    whites: {
        King: new King(60, 'K', 2),
        Quenn: new Queen(59, 'Q', 2),
        Knights: {
            Knight_1: new Knight(57, 'Kn1', 2),
            Knight_2: new Knight(62, 'Kn2', 2)
        },
        Bishops: {
            Bishop_1: new Bishop(58, 'B1', 2),
            Bishop_2: new Bishop(61, 'B2', 2)
        },
        Castles: {
            Castle_1: new Castle(56, 'C1', 2),
            Castle_2: new Castle(63, 'C2', 2)
        },
        Pawns: {
            Pawn_1: new Pawn(48, 'P0', 2),
            Pawn_2: new Pawn(49, 'P1', 2),
            Pawn_3: new Pawn(50, 'P2', 2),
            Pawn_4: new Pawn(51, 'P3', 2),
            Pawn_5: new Pawn(52, 'P4', 2),
            Pawn_6: new Pawn(53, 'P5', 2),
            Pawn_7: new Pawn(54, 'P6', 2),
            Pawn_8: new Pawn(55, 'P7', 2),
        }
    }
}

window.onclick = e => {
    if(e.target.classList.contains("chess-block")) {
        if(e.target.classList.contains("way")) {
            if(Field.getSelected().dataset.team == 1 && Chess.step == 1) {
                switch(Field.getSelected().dataset.piece) {
                    case 'P0': Figures.blacks.Pawns.Pawn_1.step(e.target.id); break;
                    case 'P1': Figures.blacks.Pawns.Pawn_2.step(e.target.id); break;
                    case 'P2': Figures.blacks.Pawns.Pawn_3.step(e.target.id); break;
                    case 'P3': Figures.blacks.Pawns.Pawn_4.step(e.target.id); break;
                    case 'P4': Figures.blacks.Pawns.Pawn_5.step(e.target.id); break;
                    case 'P5': Figures.blacks.Pawns.Pawn_6.step(e.target.id); break;
                    case 'P6': Figures.blacks.Pawns.Pawn_7.step(e.target.id); break;
                    case 'P7': Figures.blacks.Pawns.Pawn_8.step(e.target.id); break;
    
                    case 'C1': Figures.blacks.Castles.Castle_1.step(e.target.id); break;
                    case 'C2': Figures.blacks.Castles.Castle_2.step(e.target.id); break;
    
                    case 'Kn1': Figures.blacks.Knights.Knight_1.step(e.target.id); break;
                    case 'Kn2': Figures.blacks.Knights.Knight_2.step(e.target.id); break;
    
                    case 'B1': Figures.blacks.Bishops.Bishop_1.step(e.target.id); break;
                    case 'B2': Figures.blacks.Bishops.Bishop_2.step(e.target.id); break;
    
                    case 'Q': Figures.blacks.Quenn.step(e.target.id); break;
                    
                    case 'K': Figures.blacks.King.step(e.target.id); break;
                }
            }
            if(Field.getSelected().dataset.team == 2 && Chess.step == 2) {
                switch(Field.getSelected().dataset.piece) {
                    case 'P0': Figures.whites.Pawns.Pawn_1.step(e.target.id); break;
                    case 'P1': Figures.whites.Pawns.Pawn_2.step(e.target.id); break;
                    case 'P2': Figures.whites.Pawns.Pawn_3.step(e.target.id); break;
                    case 'P3': Figures.whites.Pawns.Pawn_4.step(e.target.id); break;
                    case 'P4': Figures.whites.Pawns.Pawn_5.step(e.target.id); break;
                    case 'P5': Figures.whites.Pawns.Pawn_6.step(e.target.id); break;
                    case 'P6': Figures.whites.Pawns.Pawn_7.step(e.target.id); break;
                    case 'P7': Figures.whites.Pawns.Pawn_8.step(e.target.id); break;
    
                    case 'C1': Figures.whites.Castles.Castle_1.step(e.target.id); break;
                    case 'C2': Figures.whites.Castles.Castle_2.step(e.target.id); break;
    
                    case 'Kn1': Figures.whites.Knights.Knight_1.step(e.target.id); break;
                    case 'Kn2': Figures.whites.Knights.Knight_2.step(e.target.id); break;
    
                    case 'B1': Figures.whites.Bishops.Bishop_1.step(e.target.id); break;
                    case 'B2': Figures.whites.Bishops.Bishop_2.step(e.target.id); break;
    
                    case 'Q': Figures.whites.Quenn.step(e.target.id); break;
    
                    case 'K': Figures.whites.King.step(e.target.id); break;
                }
            }
        }
        else {
            if(e.target.classList.contains("attack")) {
                if(Field.getSelected().dataset.team == 1 && Chess.step == 1) {
                    switch(Field.getSelected().dataset.piece) {
                        case 'P0': Figures.blacks.Pawns.Pawn_1.attack(e.target.id); break;
                        case 'P1': Figures.blacks.Pawns.Pawn_2.attack(e.target.id); break;
                        case 'P2': Figures.blacks.Pawns.Pawn_3.attack(e.target.id); break;
                        case 'P3': Figures.blacks.Pawns.Pawn_4.attack(e.target.id); break;
                        case 'P4': Figures.blacks.Pawns.Pawn_5.attack(e.target.id); break;
                        case 'P5': Figures.blacks.Pawns.Pawn_6.attack(e.target.id); break;
                        case 'P6': Figures.blacks.Pawns.Pawn_7.attack(e.target.id); break;
                        case 'P7': Figures.blacks.Pawns.Pawn_8.attack(e.target.id); break;
    
                        case 'C1': Figures.blacks.Castles.Castle_1.attack(e.target.id); break;
                        case 'C2': Figures.blacks.Castles.Castle_2.attack(e.target.id); break;
    
                        case 'Kn1': Figures.blacks.Knights.Knight_1.attack(e.target.id); break;
                        case 'Kn2': Figures.blacks.Knights.Knight_2.attack(e.target.id); break;
    
                        case 'B1': Figures.blacks.Bishops.Bishop_1.attack(e.target.id); break;
                        case 'B2': Figures.blacks.Bishops.Bishop_2.attack(e.target.id); break;
    
                        case 'Q': Figures.blacks.Quenn.attack(e.target.id); break;
    
                        case 'K': Figures.blacks.King.attack(e.target.id); break;
                    }
                }
                if(Field.getSelected().dataset.team == 2 && Chess.step == 2) {
                    switch(Field.getSelected().dataset.piece) {
                        case 'P0': Figures.whites.Pawns.Pawn_1.attack(e.target.id); break;
                        case 'P1': Figures.whites.Pawns.Pawn_2.attack(e.target.id); break;
                        case 'P2': Figures.whites.Pawns.Pawn_3.attack(e.target.id); break;
                        case 'P3': Figures.whites.Pawns.Pawn_4.attack(e.target.id); break;
                        case 'P4': Figures.whites.Pawns.Pawn_5.attack(e.target.id); break;
                        case 'P5': Figures.whites.Pawns.Pawn_6.attack(e.target.id); break;
                        case 'P6': Figures.whites.Pawns.Pawn_7.attack(e.target.id); break;
                        case 'P7': Figures.whites.Pawns.Pawn_8.attack(e.target.id); break;
    
                        case 'C1': Figures.whites.Castles.Castle_1.attack(e.target.id); break;
                        case 'C2': Figures.whites.Castles.Castle_2.attack(e.target.id); break;
    
                        case 'Kn1': Figures.whites.Knights.Knight_1.attack(e.target.id); break;
                        case 'Kn2': Figures.whites.Knights.Knight_2.attack(e.target.id); break;
    
                        case 'B1': Figures.whites.Bishops.Bishop_1.attack(e.target.id); break;
                        case 'B2': Figures.whites.Bishops.Bishop_2.attack(e.target.id); break;
    
                        case 'Q': Figures.whites.Quenn.attack(e.target.id); break;
                        
                        case 'K': Figures.whites.King.attack(e.target.id); break;
    
                        
                    }
                }
            }
            else {
                Field.clearSelected()
                e.target.classList.add("selected")
    
                if(e.target.dataset.team == 1 && Chess.step == 1) {
                    switch(e.target.dataset.piece) {
                        case 'P0': Figures.blacks.Pawns.Pawn_1.move(); break;
                        case 'P1': Figures.blacks.Pawns.Pawn_2.move(); break;
                        case 'P2': Figures.blacks.Pawns.Pawn_3.move(); break;
                        case 'P3': Figures.blacks.Pawns.Pawn_4.move(); break;
                        case 'P4': Figures.blacks.Pawns.Pawn_5.move(); break;
                        case 'P5': Figures.blacks.Pawns.Pawn_6.move(); break;
                        case 'P6': Figures.blacks.Pawns.Pawn_7.move(); break;
                        case 'P7': Figures.blacks.Pawns.Pawn_8.move(); break;
    
                        case 'C1': Figures.blacks.Castles.Castle_1.move(); break;
                        case 'C2': Figures.blacks.Castles.Castle_2.move(); break;
    
                        case 'Kn1': Figures.blacks.Knights.Knight_1.move(); break;
                        case 'Kn2': Figures.blacks.Knights.Knight_2.move(); break;
    
                        case 'B1': Figures.blacks.Bishops.Bishop_1.move(); break;
                        case 'B2': Figures.blacks.Bishops.Bishop_2.move(); break;
    
                        case 'Q': Figures.blacks.Quenn.move(e.target.id); break;
    
                        case 'K': Figures.blacks.King.move(); break;
                    }
                }
                if(e.target.dataset.team == 2 && Chess.step == 2) {
                    switch(e.target.dataset.piece) {
                        case 'P0': Figures.whites.Pawns.Pawn_1.move(); break;
                        case 'P1': Figures.whites.Pawns.Pawn_2.move(); break;
                        case 'P2': Figures.whites.Pawns.Pawn_3.move(); break;
                        case 'P3': Figures.whites.Pawns.Pawn_4.move(); break;
                        case 'P4': Figures.whites.Pawns.Pawn_5.move(); break;
                        case 'P5': Figures.whites.Pawns.Pawn_6.move(); break;
                        case 'P6': Figures.whites.Pawns.Pawn_7.move(); break;
                        case 'P7': Figures.whites.Pawns.Pawn_8.move(); break;
    
                        case 'C1': Figures.whites.Castles.Castle_1.move(); break;
                        case 'C2': Figures.whites.Castles.Castle_2.move(); break;
    
                        case 'Kn1': Figures.whites.Knights.Knight_1.move(); break;
                        case 'Kn2': Figures.whites.Knights.Knight_2.move(); break;
    
                        case 'B1': Figures.whites.Bishops.Bishop_1.move(); break;
                        case 'B2': Figures.whites.Bishops.Bishop_2.move(); break;
    
                        case 'Q': Figures.whites.Quenn.move(e.target.id); break;
    
                        case 'K': Figures.whites.King.move(); break;
                    }
                }
            }
        }
    }
} 

