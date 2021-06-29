var health = 100;

var enemies = ["Skeleton", "Lich", "Dragon"];

function start()
{
    var enemy = Math.floor(Math.random() * enemies.length);

    var enHealth = 0;

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
    if(sbo == swing)
    {
        eneHealth = eneHealth - 20;
        enemyAttack();
    }
    else if(sbo == block)
    {
        alert("You blocked an attack!");
    }
    else
    {
        alert("You are facing a " +enemy+ " that has " + enHealth + " health left");
        enemyAttack();
    }
    wOl();
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
        health = - 30;
    }
}

function wOl()
{

}
