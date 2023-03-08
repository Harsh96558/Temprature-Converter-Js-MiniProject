const Cel=document.getElementById('cel')

const Fah=document.getElementById('fah')
const Kel=document.getElementById('kel')



function computeTemp(event){
    const currentValue= (event.target.value)
   
    
   

    switch(event.target.name){
        case "celsius":
            Kel.value=(currentValue+273.32)
            Fah.value=(currentValue*1.8+32)
        break;

        case "fahrenheit":
            Kel.value=((currentValue-32)/1.8+273.32)
            Cel.value=((currentValue-32)/1.8)
        break;

        case "kelvin":
            Cel.value=(currentValue-273.32)
            Fah.value=((currentValue-273.32)*1.8+32)
        break;

        default:
            break;
    }
}