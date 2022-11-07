window.addEventListener("load", () => 
{
    var input = document.getElementById("enter");
    var button = document.getElementById("btn");
  
    button.addEventListener("click", (event) => {
        event.preventDefault();
        fetch(`http://localhost:8888/info2180-lab4/superheroes.php?query=${input.value}`)
        .then((result) => {
          return result.text();
        })
        .then((result) => {
         printResults(result);
        })
        .catch((event) => {
          alert(event.toString());
        });
    });
  });
  
  function printResults(result) {
      if (result !==""){
        document.getElementById("result").innerHTML = result;

      }
    }

