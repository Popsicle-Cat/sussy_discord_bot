import axios from 'axios';

// gets a random gif from tenor based on the search query and sends it to the channel from which the command was sent.
async function gif (msg, args) {
    if (args.length <= 0) {
        msg.channel.send("You need to enter a search query!"); 
    } else {
        let keywords = args.join(" "); //gets the search query from the message.
        let url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`; //gets the url for the search query from tenor.

        try {
            let response = await axios.get(url); //gets the response from the url.
            const results = response.data.results;
            
            if (results.length > 0) {
                const index = Math.floor(Math.random() * results.length); //gets a random gif from the results.
                msg.channel.send(results[index].url); //sends the random gif to the channel from which the command was sent.
            } else {
                msg.channel.send("No gifs found for the given search query.");
            }
        } catch (error) {
            console.error("Error fetching data from Tenor:", error.message);
            msg.channel.send("An error occurred while fetching the gif.");
        }
    }
}

export { gif };