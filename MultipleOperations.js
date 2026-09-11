function add() {
    console.log("Addition Operation");
}

function subtract() {
    console.log("Subtraction Operation");
}

function execute(operation) {
    operation();
}

execute(add);
execute(subtract);