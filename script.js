
//arrow function
let praktikan = ['Afif', 'Yahya', 'Atika', 'Fauziyah']; //mengisi variabel string(praktikan) dengan nama praktikan
let jumlahhuruf = praktikan.map (nama => nama.length); //menghitung jumlah huruf nama praktikan kemudian dipetakan menggunakan konsep pengolahan array (map)
console.log(jumlahhuruf); //menampilkan output jumlah huruf pada console

//ternary operator
let num = 5 //memasukkan jumalh huruf praktikan secara manual
let result

result = num%2===0 ? "Genap" : "Ganjil" //menentukan ganjil atau genapnya jumlah huruf praktikan
console.log(result); //menampilkan output result pada console


