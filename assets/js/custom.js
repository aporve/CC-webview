window.addEventListener('message', function (eventData) {
    console.log("CHECKING FOR EVENT");
    console.log(eventData);
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            console.log(event, 'Event~~~~~~~~~>>')
            let sourceIframe;
            if (event.event_code === 'coke-label') {
                iframe = document.getElementById('ymIframeId');
                var eventData = event.data.data;
                console.log(eventData);
              





            }
        }

    } catch (error) {
        console.log(error, 'Error~~~~~~~~~>>')
        return;
    }
}, false);