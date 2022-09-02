let valores = [5,4,6,10,12,15]

/*for (let i = 0; i < valores.length; i++) {
   
    console.log(`A posição ${i} tem o valor ${valores[i]} `)
    
}
*/

for(let i in valores)
    console.log(`A posição ${i} tem o valor ${valores[i]} `)
