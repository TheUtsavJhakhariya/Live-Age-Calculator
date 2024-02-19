document.addEventListener('DOMContentLoaded', function() 
        {
            let birthdate = prompt("Please enter your birthdate (YYYY-MM-DD):");

            birthdate = new Date(birthdate);
            if (isNaN(birthdate)) 
            {
                document.getElementById("age").textContent = "Invalid Date";
                return;  
            }

            function calculateAge() 
            { 
                const currentTime = new Date();
                const ageInMilliseconds = currentTime - birthdate;
                const ageInSeconds = ageInMilliseconds / 1000;
                const ageInDecimal = ageInSeconds / 31536000;

                document.getElementById("age").textContent = ageInDecimal.toFixed(10);
            } 

            setInterval(calculateAge, 100);
        });
