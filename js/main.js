'use strict'

// Pieces Types
const PAWN_BLACK = '♟'
const ROOK_BLACK = '♜'
const KNIGHT_BLACK = '♞'
const BISHOP_BLACK = '♝'
const QUEEN_BLACK = '♛'
const KING_BLACK = '♚'
const PAWN_WHITE = '♙'
const ROOK_WHITE = '♖'
const KNIGHT_WHITE = '♘'
const BISHOP_WHITE = '♗'
const QUEEN_WHITE = '♕'
const KING_WHITE = '♔'

// The Chess Board
var gBoard
var gSelectedElCell = null

function restartGame() {
    gBoard = buildBoard()
    renderBoard(gBoard)
}

function buildBoard() {
    var board
    // TODO: build the board 8 * 8
    // console.table(board)
    return board

}

function renderBoard(board) {
    var strHtml = ''
    for (var i = 0; i < board.length; i++) {
        var row = board[i]
        strHtml += '<tr>'
        for (var j = 0; j < row.length; j++) {
            var cell = row[j]
            // TODO: figure class name
            var className = 'white'
            var tdId = `cell-${i}-${j}`
            strHtml += `<td id="${tdId}" onclick="cellClicked(this)" class="${className}">${cell}</td>`
        }
        strHtml += '</tr>'
    }
    var elMat = document.querySelector('.game-board')
    elMat.innerHTML = strHtml
}


function cellClicked(elCell) {

    // TODO: if the target is marked - move the piece!
    cleanBoard()

    elCell.classList.add('selected')
    gSelectedElCell = elCell

    // console.log('elCell.id: ', elCell.id)
    var cellCoord = getCellCoord(elCell.id)
    var piece = gBoard[cellCoord.i][cellCoord.j]

    var possibleCoords = []
    switch (piece) {
        case ROOK_BLACK:
        case ROOK_WHITE:
            possibleCoords = getAllPossibleCoordsRook(cellCoord)
            break
        case BISHOP_BLACK:
        case BISHOP_WHITE:
            possibleCoords = getAllPossibleCoordsBishop(cellCoord)
            break
        case KNIGHT_BLACK:
        case KNIGHT_WHITE:
            possibleCoords = getAllPossibleCoordsKnight(cellCoord)
            break
        case PAWN_BLACK:
        case PAWN_WHITE:
            possibleCoords = getAllPossibleCoordsPawn(cellCoord, piece === PAWN_WHITE)
            break

    }
    markCells(possibleCoords)
}

function movePiece(elFromCell, elToCell) {
    // TODO: use: getCellCoord to get the coords, move the piece
    // update the MODEl, update the DOM
}

function markCells(coords) {
    // TODO: query select them one by one and add mark 
}

// Gets a string such as:  'cell-2-7' and returns {i:2, j:7}
function getCellCoord(strCellId) {
    var coord = {}
    var parts = strCellId.split('-')
    coord.i = +parts[1]
    coord.j = +parts[2]
    return coord
}

function cleanBoard() {
    var elTds = document.querySelectorAll('.mark, .selected')
    for (var i = 0; i < elTds.length; i++) {
        elTds[i].classList.remove('mark', 'selected')
    }
}

function getSelector(coord) {
    return `#cell-${coord.i}-${coord.j}`
}

function isEmptyCell(coord) {
    return gBoard[coord.i][coord.j] === ''
}

function getAllPossibleCoordsPawn(pieceCoord, isWhite) {
    var res = []
    // TODO: handle PAWN use isEmptyCell()
    return res
}

function getAllPossibleCoordsRook(pieceCoord) {
    var res = []

    return res
}

function getAllPossibleCoordsBishop(pieceCoord) {
    var res = []

    return res
}

function getAllPossibleCoordsKnight(pieceCoord) {
    var res = []

    return res
}
