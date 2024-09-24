document.getElementById('btn2')
    .addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('history-container')
            .classList.remove('hidden')
        document.getElementById('main')
            .classList.add('hidden')
            document.getElementById('btn2')
            .classList.add('bg-lime-400')
            document.getElementById('btn1')
                .classList.remove('bg-lime-400')
        
    })

    document.getElementById('btn1')
    .addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('history-container')
            .classList.add('hidden')
        document.getElementById('main')
            .classList.remove('hidden')
            document.getElementById('btn1')
            .classList.add('bg-lime-400')
            document.getElementById('btn2')
                .classList.remove('bg-lime-400')
        
    })