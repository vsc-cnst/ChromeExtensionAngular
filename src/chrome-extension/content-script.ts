import constants from "../constants";


console.log(`[${constants.ProjectName}][content-script] Content script has started`)


chrome.runtime.onMessage.addListener(
    function (message: any, sender, sendResponse: Function) {
        console.log(`[${constants.ProjectName}][content-script] message received`, message)
        sendResponse({'content-script': "content-script says ping"})
    }
);
