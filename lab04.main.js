// Update this constant with your ServiceNow credentials
const options = {
    url: 'https://dev92324.service-now.com/',
    username: 'admin',
    password: 'YnykD5ec9IAU',
    serviceNowTable: 'change_request'
};

// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
    // Instantiate an object from class ServiceNowConnector.
    const connector = new ServiceNowConnector(options);
    // Test the object's get and post methods.
    // You must write the arguments for get and post.
    connector.get((data, error) => {
        if (error) {
            console.error(`\nError returned from GET request:\n${JSON.stringify(error)}`);
        }
        console.log(`\nResponse returned from GET request:\n${JSON.stringify(data)}`)
        // var JSONobj = [];
        // if (data.body) {
        //     let myObj = JSON.parse(data.body)
        //     let resultLength = myObj.result.length
        //     for (let i = 0; i < resultLength; i++) {
        //         // console.log(myObj.result[i].number)
        //         JSONobj.push({
        //             "change_ticket_number": myObj.result[i].number,
        //             "active": myObj.result[i].active,
        //             "priority": myObj.result[i].priority,
        //             "description": myObj.result[i].description,
        //             "work_start": myObj.result[i].work_start,
        //             "work_end": myObj.result[i].work_end,
        //             "change_ticket_key": myObj.result[i].sys_id
        //         })
        //     }
        //     // JSONobj.forEach(element => console.log(element))
        //     // JSONobj.forEach(element => console.log(typeof(element)))
        // }
    });
    connector.post((data, error) => {
        if (error) {
            console.error(`\nError returned from POST request:\n${JSON.stringify(error)}`);
        }
        console.log(`\nResponse returned from POST request:\n${JSON.stringify(data)}`)
        // if (data.body) {
        //     let myObj = JSON.parse(data.body).result
        //     let postResult = {
        //         "change_ticket_number": myObj.number,
        //         "active": myObj.active,
        //         "priority": myObj.priority,
        //         "description": myObj.description,
        //         "work_start": myObj.work_start,
        //         "work_end": myObj.work_end,
        //         "change_ticket_key": myObj.sys_id
        //     }
        //     // console.log(postResult)
        //     // console.log(typeof(postResult))
        // }
    });
}

// Call mainOnObject to run it.
mainOnObject();