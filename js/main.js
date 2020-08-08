var randDimArray = Math.floor(Math.random() * 100) +1;
var randArrayInt = [];

console.log(randDimArray);

for(var i=0; i< randDimArray ; i++){
  var randValueInt = Math.floor(Math.random() * 100000) +1;
  randArrayInt.push(randValueInt);
  console.log(randArrayInt[i]);
}

console.log(randArrayInt);

var divArrayBfr = document.getElementById('myArrayBfr');
divArrayBfr.innerHTML = "<i>Avant du tri:</i>";
divArrayBfr.innerHTML+= "<h5>" + randArrayInt + "</h5>";

randArrayInt = randArrayInt.sort();

var divArrayAftr = document.getElementById('myArrayAftr');
divArrayAftr.style.color = "red";  
divArrayAftr.innerHTML+= "<i>Apres le tri:</i>";
divArrayAftr.innerHTML+= "<h5>" + randArrayInt + "</h5>";