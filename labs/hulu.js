/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/

let hulu = {
    id: 1,
    movies: [
        {
            title: "The Hobbit",
            genre: ['one', 'two', 'three'],
            rating: "PG",
            "run time": 60,
            year: 2000,
        },
        {
            title: "The Hobbit Strikes Back",
            genre: ['one', 'two', 'three'],
            rating: "PG",
            "run time": 60,
            year: 2000,
        }

    ],
    shows: [
        {
            title: "title",
            SeasonsCount: 2,
            season: [
                {
                    season: 1,
                    numberOfEp: 2,
                    episodes: [
                        {
                            title: "Episode One",
                            airDate: "01-01-2020"
                        },
                        {
                            title: "Episode Two",
                            airDate: "01-01-2020"
                        }
                    ]
                },
                {
                    season: 2,
                    numberOfEp: 2,
                    episodes: [
                        {
                            title: "Episode OneTwo",
                            airDate: "01-01-2020"
                        },
                        {
                            title: "Episode Two_Two",
                            airDate: "01-01-2020"
                        }
                    ]
                }

            ]

        }
    ],
}

// - After the hulu object has been created:
// - write 3 console logs
//     - detail the array of movies
//     - show the title of the first show
//     - show the title of episode 1 of the second season of the first show.

console.log(hulu)