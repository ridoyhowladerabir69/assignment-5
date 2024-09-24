document.getElementById('donate-btn1')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donateMoney = getInputFieldValueById('noakhali-donate');
        if(isNaN(donateMoney) || donateMoney === ''){
            alert('Please Enter a Amount')
            return;
        }

        if(donateMoney){
            const mainBalance = getTextFieldValueById('main-balance');
            if (donateMoney > mainBalance) {
                alert('Your balance is low');
                return;
            }
            const donateBalance = getTextFieldValueById('donate-balance1');
            const newDonateBalance = donateBalance + donateMoney;
            document.getElementById('donate-balance1')
                .innerText = newDonateBalance;

            const newMainBalance = mainBalance - donateMoney;
            document.getElementById('main-balance')
                .innerText = newMainBalance;
            
            const currentDate = new Date();
            const date = currentDate.toLocaleDateString();
            const time = currentDate.toLocaleTimeString();

            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg', 'py-2', 'px-2', 'text-xl', 'font-bold', 'mb-3');
            div.innerHTML = `<p>${donateMoney} Taka is Donated for Flood Relief in Noakhali, Bangladesh</p>
            <small class="text-gray-500">Date: ${date} at ${time}</small>`
            
            document.getElementById('history-container')
                .appendChild(div);

                // alert
            alert('You Have Donated for Humankind')
        }

    })

    // function step 2

    document.getElementById('donate-btn2')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donateMoney = getInputFieldValueById('feni-donate');
        if(isNaN(donateMoney) || donateMoney === ''){
            alert('Please Enter a Amount')
            return;
        }

        if(donateMoney){
            const mainBalance = getTextFieldValueById('main-balance');
            if (donateMoney > mainBalance) {
                alert('Your balance is low');
                return;
            }
            const donateBalance = getTextFieldValueById('donate-balance2');
            const newDonateBalance = donateBalance + donateMoney;
            document.getElementById('donate-balance2')
                .innerText = newDonateBalance;

            const newMainBalance = mainBalance - donateMoney;
            document.getElementById('main-balance')
                .innerText = newMainBalance;
            
            const currentDate = new Date();
            const date = currentDate.toLocaleDateString();
            const time = currentDate.toLocaleTimeString();

            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg', 'py-2', 'px-2', 'text-xl', 'font-bold', 'mb-3');
            div.innerHTML = `<p>${donateMoney} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
            <small class="text-gray-500">Date: ${date} at ${time}</small>`
            
            document.getElementById('history-container')
                .appendChild(div);

                // alert
            alert('You Have Donated for Humankind')
        }

    })


    // function part 3

    document.getElementById('donate-btn3')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donateMoney = getInputFieldValueById('quota-donate');
        if(isNaN(donateMoney) || donateMoney === ''){
            alert('Please Enter a Amount')
            return;
        }

        if(donateMoney){
            const mainBalance = getTextFieldValueById('main-balance');
            if (donateMoney > mainBalance) {
                alert('Your balance is low');
                return;
            }
            const donateBalance = getTextFieldValueById('donate-balance3');
            const newDonateBalance = donateBalance + donateMoney;
            document.getElementById('donate-balance3')
                .innerText = newDonateBalance;

            const newMainBalance = mainBalance - donateMoney;
            document.getElementById('main-balance')
                .innerText = newMainBalance;
            
            const currentDate = new Date();
            const date = currentDate.toLocaleDateString();
            const time = currentDate.toLocaleTimeString();

            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg', 'py-2', 'px-2', 'text-xl', 'font-bold', 'mb-3');
            div.innerHTML = `<p>${donateMoney} Taka is Donated for Flood Relief in Quota, Bangladesh</p>
            <small class="text-gray-500">Date: ${date} at ${time}</small>`
            
            document.getElementById('history-container')
                .appendChild(div);

                // alert
            alert('You Have Donated for Humankind')
        }

    })