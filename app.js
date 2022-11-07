window.addEventListener("load", () => 
{
    var input = document.getElementById("enter");
    var button = document.getElementById("btn");
  
    button.addEventListener("click", (event) => {
        event.preventDefault();
        fetch(`http://localhost/info2180-lab4/superheroes.php?query=${input.value}`)
        .then((r) => {
          return r.text();
        })
        .then((r) => {
         printResults(r);
        })
        .catch((event) => {
          alert(event.toString());
        });
    });
  });
  
  function printResults(result) {
      if (result !==""){
        document.getElementById("results").innerHTML = result;

      }
    }