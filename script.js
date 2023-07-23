const calculateTemp =()=>{

    let tempInput = document.getElementById('tempInput').value;
    
    let fromTemp = document.getElementById('from');
    let valueFrom = from.options[fromTemp.selectedIndex].value;
    
    let toTemp = document.getElementById('to');
    let valueTo = to.options[toTemp.selectedIndex].value;

    const celToFah=(cel)=>{
        let far=Math.round((cel*9/5)+32);
        return far;
    }
    const celToKel=(cel)=>{
        let kel=Math.round(cel*1+273.15);
        return kel;
    }
    const celToCel=(cel)=>{
        return cel;
    }
    const fahToCel=(fah)=>{
        let cel=Math.round((fah-32)*5/9);
        return cel;
    }
    const fahToKel=(fah)=>{
        let kel=Math.round(((fah-32)*5/9)+273.15);
        return kel;
    }
    const fahToFah=(fah)=>{
        return fah;
    }
    const kelToKel=(kel)=>{
        return kel;
    }
    const kelToFah=(kel)=>{
        let fah=Math.round((kel*9/5)-459.67);
        return fah;
    }
    const kelToCel=(kel)=>{
        let cel = Math.round(kel-273.15);
        return cel;
    }

    let result;

    if(valueFrom=='cel1' && valueTo=='far2'){
        result=celToFah(tempInput);
        document.getElementById('result').innerHTML=`${result}°F`;
    }
    else if(valueFrom=='cel1' && valueTo=='kel2'){
        result=celToKel(tempInput);
        document.getElementById('result').innerHTML=`${result}°K`;
    }
    else if(valueFrom=='cel1' && valueTo=='cel2'){
        result=celToCel(tempInput);
        document.getElementById('result').innerHTML=`${result}°C`;
    }
    else if(valueFrom=='far1' && valueTo=='cel2'){
        result=fahToCel(tempInput);
        document.getElementById('result').innerHTML=`${result}°C`;
    }
    else if(valueFrom=='far1' && valueTo=='kel2'){
        result=fahToKel(tempInput);
        document.getElementById('result').innerHTML=`${result}°K`;
    }
    else if(valueFrom=='far1' && valueTo=='far2'){
        result=fahToFah(tempInput);
        document.getElementById('result').innerHTML=`${result}°K`;
    }
    else if(valueFrom=='kel1' && valueTo=='cel2'){
        result=kelToCel(tempInput);
        document.getElementById('result').innerHTML=`${result}°C`;
    }
    else if(valueFrom=='kel1' && valueTo=='far2'){
        result=kelToFah(tempInput);
        document.getElementById('result').innerHTML=`${result}°F`;
    }
    else{
        result=kelToKel(tempInput);
        document.getElementById('result').innerHTML=`${result}°K`;
    }
}
