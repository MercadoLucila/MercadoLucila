$array = ['pera','manzana','frutilla','durazno','uva'];

for (i=0; i < $array.length; i ++) {
    console.log ($array[i])
}

console.log (' ')

let frutas = ['pera','manzana','frutilla','durazno','uva'];

    frutas.forEach (fruta => {
        console.log(fruta);
    })
    
console.log (' ')

for (const fru of frutas) {

    if (fru =='manzana')
    console.log(fru)

}