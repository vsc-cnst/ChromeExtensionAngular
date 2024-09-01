import constants from "../constants";


chrome.runtime.onInstalled.addListener(() => {
    console.log(`[${constants.ProjectName}][service-worker] Service Worker installed.`)
});
