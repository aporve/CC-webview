window.addEventListener('message', function (eventData) {
    console.log("CHECKING FOR EVENT");
    console.log(eventData);
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            console.log('Event~~~~~~~~~>>',event)
            console.log('Coke Event~~~~~~>>',event.data.code)
            console.log('coke Data~~~~~~~~~~>>',event.data.data)


            // let cEvent = event.data.code;
            // let cEventData = event.data.data

            // if (cEvent == 'coke-label') {
            //     config = cEventData
            //     loadPageContent("homepage");
            // }
            
        }

    } catch (error) {
        console.log(error, 'Error~~~~~~~~~>>')
        return;
    }

}, false);