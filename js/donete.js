document.getElementById('donate-btn1')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donateMoney = getInputFieldValueById('noakhali-donate');
        if(isNaN(donateMoney)){
            alert('Please Enter a Amount')
            return;
        }

        if(donateMoney){
            const donateBalance = getTextFieldValueById('donate-balance1');
            const newDonateBalance = donateBalance + donateMoney;

            document.getElementById('donate-balance1')
                .innerText = newDonateBalance;

            if(donateMoney){
                const mainBalance = getTextFieldValueById('main-balance');
                if(donateMoney > mainBalance){
                    alert('Your balance is low');
                    return;
                }
                const newMainBalance = mainBalance - donateMoney;
        
                document.getElementById('main-balance')
                    .innerText = newMainBalance;
            }
            
            const div = document.createElement('div');
            div.classList.add('text-lime-500');
            div.innerHTML = `<p>${donateMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</p>`

            document.getElementById('history-container')
                .appendChild(div);
        }

        
    })