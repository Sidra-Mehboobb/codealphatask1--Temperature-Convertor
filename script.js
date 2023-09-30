 document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');

    convertBtn.addEventListener('click', function() {
        const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
         const inputScale = document.getElementById('inputScale').value;
         const outputScale = document.getElementById('outputScale').value;
         let convertedTemperature;

         if (inputScale === 'celsius' && outputScale === 'fahrenheit') {
             convertedTemperature = (inputTemperature * 9/5) + 32;
         } else if (inputScale === 'fahrenheit' && outputScale === 'celsius') {
             convertedTemperature = (inputTemperature - 32) * 5/9;
         } else if(inputScale ==='celcius' && outputScale === 'kelvin')
         {
            convertedTemperature = (inputTemperature  + 273.15);
         }
         else if(inputScale === 'fahrenheit' && outputScale === 'kelvin')
         {
            convertedTemperature = (inputTemperature * 5/9) + 273.15;
         }
         else if(inputScale == 'kelvin' && outputScale == 'celcius')
         {
            convertedTemperature = (inputTemperature - 273.15);
         }
         else if(inputScale == 'kelvin' && outputScale == 'fahrenheit')
         {
            convertedTemperature = (inputTemperature - 273.15) * 9/5 + 32;
         }
         else {
             convertedTemperature = inputTemperature; // No conversion needed
         }

         document.getElementById('outputTemperature').value = convertedTemperature.toFixed(2);
     });
 });
