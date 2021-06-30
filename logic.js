var health = 100;

var shHealth = 50;

var damage = 20;

var heals = 3;

var enemies = ["Skeleton", "Lich", "Dragon"];

var whichEn = 0;

var enHealth = 0;

var enHealthT = 0;

var enemy = "";

var seen = false;

var wins = 0;

var isBlocking = false;

function start()
{
    enemy = enemies[whichEn];

    if(enemy == "Skeleton")
    {
        enHealthT = 75;
        enHealth = enHealthT
    }
    else if(enemy == "Lich")
    {
        enHealthT = 50;
        enHealth = enHealthT
    }
    else
    {
        enHealthT = 200;
        enHealth = enHealthT
    }
    var en = document.getElementById("enemy");
        en.textContent = "????";

    seen = false;
}

function turn(sbo)
{
    if(sbo == "swing")
    {
        enHealth = enHealth - damage;
        var text = document.getElementById("record");
        text.textContent += "You attacked! \r\n";
        enemyAttack();
    }
    else if(sbo == "block")
    {
        if(shHealth > 0)
        {
            if(isBlocking == false)
            {
                isBlocking = true;
                var text = document.getElementById("record");
                text.textContent += "You are now blocking! \r\n";
            }
            else
            {
                isBlocking = false;
                var text = document.getElementById("record");
                text.textContent += "You stopped blocking! \r\n";
            }
        }
        else
        {
            var text = document.getElementById("record");
            text.textContent += "Your shield is broken! \r\n";
        }
    }
    else if(sbo == "heal")
    {
        if(heals > 0)
        {
        var text = document.getElementById("record");
        text.textContent += "You drank a potion and gained health! \r\n";
        health += 50;
        heals--;
        }
        else
        {
            var text = document.getElementById("record");
            text.textContent += "You are out of potions! \r\n";
        }
    }
    else
    {
        var text = document.getElementById("record");
        text.textContent += "You are facing a " +enemy+ " that has " + enHealth + " health out of a total of " + enHealthT +" \r\n";
        show();
        seen = true;
        enemyAttack();
        console.log("observe");
    }
    wOl();
    update();
}

function enemyAttack()
{
    if(isBlocking == false)
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
    if(isBlocking == true)
    {
        if(enemy == "Skeleton")
        {
            shHealth = shHealth - 10;
        }
        else if(enemy == "Lich")
        {
            shHealth = shHealth - 10;
        }
        else
        {
            shHealth = shHealth - 10;
        }
    }
    if(shHealth == 0)
    {
        isBlocking = false;
        var text = document.getElementById("record");
        text.textContent += "Your shield just broke! \r\n";
    }
}

function wOl()
{
    var win = false;
    var loss = false;
    if(enHealth <= 0)
    {
        win = true;
        wins++;
        alert("You Won!");
        whichEn++;
        if(wins == 3)
        {
            $("#win").html("<a href=\"win.html\">You Win!</a>");
        }
        else
        {
            var play = confirm("Continue on to the next fight?");
            if(play)
            {
                start();
                heals++;
                damage += 10;
                shHealth += 20;
                var text = document.getElementById("record");
                text.textContent += "Your sword and shield are upgraded, and you found another potion! \r\n";
            }
        }
    }
    else if(health <= 0)
    {
        loss = true;
        alert("You Lost!");
        whichEn = 0;
        var play = confirm("Play again?");
        if(play)
        {
            health = 100;
            start();
            update();
        }
    }
    
}

function show()
{
    var enP = document.getElementById("enemyPic");
    enP.textContent = "";
    if(enemy == "Skeleton")
    {
        enP.textContent += "                .-. \r\n";
        enP.textContent += "               (o.o) \r\n";
        enP.textContent += "                |=| \r\n";
        enP.textContent += "               __|__ \r\n";
        enP.textContent += "             //.=|=.\\\\ \r\n";
        enP.textContent += "            // .=|=. \\\\ \r\n";
        enP.textContent += "            \\\\ .=|=. // \r\n";
        enP.textContent += "             \\\\(_=_)// \r\n";
        enP.textContent += "              (:| |:) \r\n";
        enP.textContent += "               || || \r\n";
        enP.textContent += "               () () \r\n";
        enP.textContent += "               || || \r\n";
        enP.textContent += "               || || \r\n";
        enP.textContent += "              ==' '== \r\n";
    }
    else if(enemy == "Lich")
    {
        enP.textContent += "                 /\\ \r\n";
        enP.textContent += "                 || \r\n";
        enP.textContent += "   ____ (((+))) _||_ \r\n";
        enP.textContent += "  /.--.\  .-.  /.||.\\ \r\n";
        enP.textContent += " /.,   \\(0.0)// || \\\\ \r\n";
        enP.textContent += "/;` ;/\\ \\|m|//  ||  ;\\ \r\n";
        enP.textContent += "|:   \\ \\__`:`____||__:| \r\n";
        enP.textContent += "|:    \\__ \\T/ (@~)(~@)| \r\n";
        enP.textContent += "|:    _/|     |\\_\\/  :| \r\n";
        enP.textContent += "|:   /  |     |  \\   :| \r\n";
        enP.textContent += "|'  /   |     |   \\  '| \r\n";
        enP.textContent += " \\_/    |     |    \\_/  \r\n"
        enP.textContent += "        |     |        \r\n"
        enP.textContent += "        |_____| \r\n"
        enP.textContent += "        |_____| \r\n"
    }
    else
    {
        enP.textContent += "                    /     \\  \r\n";
        enP.textContent += "                   ((     )) \r\n";
        enP.textContent += "               ===  \\\\_v_//  === \r\n";
        enP.textContent += "                 ====)_^_(==== \r\n";
        enP.textContent += "                 ===/ O O \\=== \r\n";
        enP.textContent += "                 = | /_ _\\ | = \r\n";
        enP.textContent += "                =   \\/_ _\\/   = \r\n";
        enP.textContent += "                     \\_ _/ \r\n";
        enP.textContent += "                     (o_o) \r\n";
        enP.textContent += "                      VwV \r\n";
    }
}

function update()
{
    var he = document.getElementById("health");
    he.textContent = health + "/100";

    if(seen)
    {
        var enH = document.getElementById("enHealth");
        enH.textContent = enHealth + "/" + enHealthT;
    }
    else
    {
        var enP = document.getElementById("enemyPic");
        enP.textContent = "";
        var enH = document.getElementById("enHealth");
        enH.textContent = "????";
    }
}


start();