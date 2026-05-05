let canvas, ctx;
const box = 20;

let snake;
let direction;
let food;
let score;
let game;

function startGame() {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("gameContainer").classList.remove("hidden");

    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    snake = [{ x: 200, y: 200 }];
    direction = "RIGHT";

    food = randomFood();
    score = 0;
    document.getElementById("score").innerText = score;

    document.addEventListener("keydown", changeDirection);

    // velocidade reduzida pela metade (antes era 100)
    game = setInterval(draw, 200);
}

function randomFood() {
    return {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box
    };
}

function changeDirection(event) {
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

function draw() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 400, 400);

    // cobra
    snake.forEach((part, index) => {
        ctx.fillStyle = index === 0 ? "#0f0" : "#0a0";
        ctx.fillRect(part.x, part.y, box, box);
    });

    // comida
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === "UP") headY -= box;
    if (direction === "DOWN") headY += box;
    if (direction === "LEFT") headX -= box;
    if (direction === "RIGHT") headX += box;

    // comer comida
    if (headX === food.x && headY === food.y) {
        score++;
        document.getElementById("score").innerText = score;
        food = randomFood();
    } else {
        snake.pop();
    }

    const newHead = { x: headX, y: headY };

    // colisão
    if (
        headX < 0 || headY < 0 ||
        headX >= canvas.width || headY >= canvas.height ||
        collision(newHead, snake)
    ) {
        clearInterval(game);
        alert("Game Over!");
        location.reload(); // volta ao menu
    }

    snake.unshift(newHead);
}

function collision(head, body) {
    return body.some(part => part.x === head.x && part.y === head.y);
}