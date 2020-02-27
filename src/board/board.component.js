import React from 'react';
import './board.component.css'
export default class Board extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            Squares: Array(8).fill(null),
        }
    }

    handleClick(i) {
        let newState = this.state.Squares.splice();
        newState[i] = 'x';
        this.setState({ Squares: newState });
    }

    renderSquare(i) {
        return <Square Value={this.state.Squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        return (
            <div className="game-board">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.Value}
            </button >
        );
    }
}