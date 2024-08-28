function hasil(bilangan){
    if ( bilangan >= 0) {
        // cek, jika number di modulus 2 == 0
        if (bilangan % 2 === 0) {
          console.log("Genap"); // maka genap
        } else {
          console.log("Ganjil"); // maka ganjil
        }
      } else { // jika inputan salah
        console.log("Input salah");
      }
}