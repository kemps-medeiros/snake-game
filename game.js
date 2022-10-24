import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsiderGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    if(gameOver) {
       return alert('you lose')
    }

    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    console.log('Render');
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main);

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ' '
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsiderGrid(getSnakeHead()) ||snakeIntersection();
}