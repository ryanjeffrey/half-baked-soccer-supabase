const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/*
assumptions you can make:

The table name in supabase is `games`

The games are stored in the database using this data model:
{
   name1: ,
   name2: ,
   score1: ,
   score2: ,
}
*/

export async function createGame(game) {
    // create a single new game in the games table using the above object

    return checkError(response);
}

export async function getGames() {
    // select all games from the games table

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
