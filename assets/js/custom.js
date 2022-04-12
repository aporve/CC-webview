window.addEventListener('message', function (eventData) {
    console.log("CHECKING FOR EVENT");
    console.log(eventData);
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            console.log(event, 'Event~~~~~~~~~>>')
            let sourceIframe;
            if (event.event_code === 'coke-label') {
                console.log(event.event_code, 'Event code~~~~~~~~~~>>')
                var data = event.event_code;
                console.log(data, 'Data~~~~~~~')
                console.log(data.data, 'Data of Data~~~~>>')




            }
        }

    } catch (error) {
        console.log(error, 'Error~~~~~~~~~>>')
        return;
    }
}, false);