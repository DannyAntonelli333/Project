var health = 100;

var enemies = ["Skeleton", "Lich", "Dragon"];

var enHealth = 0;

var enemy = "";

function start()
{
    enemy = enemies[Math.floor(Math.random() * enemies.length)];

    if(enemy == "Skeleton")
    {
        enHealth = 75;
    }
    else if(enemy == "Lich")
    {
        enHealth = 50;
    }
    else
    {
        enHealth = 200;
    }
}

function turn(sbo)
{
    if(sbo == "swing")
    {
        enHealth = enHealth - 20;
        alert("You attacked!");
        enemyAttack();
        console.log("attack");
    }
    else if(sbo == "block")
    {
        alert("You blocked an attack!");
        console.log("block");
    }
    else
    {
        alert("You are facing a " +enemy+ " that has " + enHealth + " health left");
        enemyAttack();
        console.log("observe");
    }
    wOl();
    update();
}

function enemyAttack()
{
    if(enemy == "Skeleton")
    {
        health = health - 10;
    }
    else if(enemy == "Lich")
    {
        health = health - 20;
    }
    else
    {
        health = health - 30;
    }
}

function wOl()
{
    var win = false;
    var loss = false;
    if(enHealth <= 0)
    {
        win = true;
    }
    else if(health <= 0)
    {
        loss = true;
    }
}

function update()
{
    var en = document.getElementById("enemy");
    en.textContent = enemy;

    var he = document.getElementById("health");
    he.textContent = health + "/100";
}

start();