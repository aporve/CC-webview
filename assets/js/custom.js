window.addEventListener('message', function (eventData) {
    console.log("CHECKING FOR EVENT");
    console.log(eventData);
    try {
        if (JSON.parse(eventData.data)) {
            let eventData = JSON.parse(eventData.data);
            console.log('Event~~~~~~~~~>>',event)
            console.log('Coke Event~~~~~~>>',event.data.code)
            console.log('coke Data~~~~~~~~~~>>',event.data.data)
            let event = event.data.code; 
            let eventParseData = event.data.data;
            console.log(event, 'Event~~~~>>')
            console.log(eventParseData, 'Event parse data~~~~~~~~>>');

            if(event == 'coke-label') {
                config = event.data.data
                console.error(config, 'Config~~~~>>')
            }

            // if (event.event_code === 'coke-label') {
            //     console.log(event.event_code, 'Event code~~~~~~~~~~>>')
            //     var data = event.event_code;
            //     console.log(data, 'Data~~~~~~~')
            //     console.log(data.data, 'Data of Data~~~~>>')




            // }
        }

    } catch (error) {
        console.log(error, 'Error~~~~~~~~~>>')
        return;
    }
}, false);