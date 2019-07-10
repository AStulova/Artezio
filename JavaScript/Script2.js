function buttonClick() {
    var x1 = parseInt(document.getElementById('x1').value);
    var x2 = parseInt(document.getElementById('x2').value);

    if (Number.isNaN(x1) || Number.isNaN(x2)) {
        alert("Fields x1 and x2 must contain numeric values.")
    }
    else {
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ''; // очистка поля вывода
        if (document.getElementById("sum").checked == true)
        {
            resultDiv.append("x1 + x2 = " + (x1 + x2));
        }
        else if (document.getElementById("sumAll").checked == true)
        {
            var sum = 0;
            for (var i = x1; i <= x2; i++) {
                sum += i;
            }
            resultDiv.append("X1 + ... + X2 = " + sum);
        }
        else if(document.getElementById("op").checked == true)
        {
            resultDiv.append("x1 * x2 = " + (x1 * x2));
        }
        else if (document.getElementById("prime").checked == true)
        {
            for (i = x1; i <= x2; i++)
            {
                var simple = true;
                if (i <= 1)
                {
                    continue;
                }
                for (var j = 2; j < i; j++)
                {
                    if ((i % j) == 0)
                    {
                        simple = false;
                        break;
                    }
                }
                if (simple)
                {
                    resultDiv.append(i + " ");
                }
            }
        }
        else
        {
            alert("Choose an operation.")
        }
    }
}

// Очистка полей ввода
function clearFields()
{
    document.getElementById('x1').value = "";
    document.getElementById('x2').value = "";
}