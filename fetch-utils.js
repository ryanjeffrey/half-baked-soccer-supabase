const SUPABASE_URL = 'https://nxtckliabtixkexceffw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dGNrbGlhYnRpeGtleGNlZmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2Mzg5MTgsImV4cCI6MTk3NTIxNDkxOH0.cjq0XpKdcTVMbEd38x6tI54kqPmiTVNNM5zI8-p7k5c';

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
    const response = await client.from('games').insert(game).single();
    return checkError(response);
}

export async function getGames() {
    // select all games from the games table
    const response = await client.from('games').select('*');
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
