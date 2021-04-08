module.exports = async(client) => {

    let statuses = [
        `Remplit les contracts`,
        `Boit du Café`,
        `Frappe les élèves`
    ]
    
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "PLAYING"});
    
    }, 5000);
    
    };