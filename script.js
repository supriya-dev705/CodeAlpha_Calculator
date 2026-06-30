
let operation = "";

function selectOperation(op)
{

    operation = op;

    document.getElementById("calculator").style.display = "block";

    if(op==="+")
        document.getElementById("operationName").innerHTML="Addition";

    else if(op==="-")
        document.getElementById("operationName").innerHTML="Subtraction";

    else if(op==="*")
        document.getElementById("operationName").innerHTML="Multiplication";

    else
        document.getElementById("operationName").innerHTML="Division";

}

function calculate()
{

    let num1=parseFloat(document.getElementById("num1").value);

    let num2=parseFloat(document.getElementById("num2").value);

    let answer;

    if(isNaN(num1)||isNaN(num2))
    {
        alert("Please enter both numbers.");
        return;
    }

    switch(operation)
    {

        case "+":
            answer=num1+num2;
            break;

        case "-":
            answer=num1-num2;
            break;

        case "*":
            answer=num1*num2;
            break;

        case "/":

            if(num2===0)
            {
                answer="Cannot divide by zero";
            }

            else
            {
                answer=num1/num2;
            }

            break;

    }

    document.getElementById("result").innerHTML="Result : "+answer;

}

function clearAll()
{

    document.getElementById("num1").value="";

    document.getElementById("num2").value="";

    document.getElementById("result").innerHTML="Result :";

}

document.addEventListener("keydown",function(event)
{

    if(event.key==="Enter")
    {
        calculate();
    }

    if(event.key==="Escape")
    {
        clearAll();
    }

});