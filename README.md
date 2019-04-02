# LIRI BOT

The user can access various information based on the type of command they input.
*API referenced in this project:*
* Bands in Town
* Spotify
* IMDB



### Prerequisites

You will need your own spofity key and secret to input in an .env file
![](image/envfile.PNG)


## Getting Started

To access the LIRI BOT, download the package and open the Terminal

Navigate towards the appropriate folder by using cd commands:


![](image/1.PNG)

The following command input will respond with the following API

**concert-this = Bands in Town**

information printed will include:

* Name of the Venue
* Venue location
* Date of the Event


*example*
```
node liri.js concert-this <artist/band name here>  
```
This would be the results:

![](image/2.PNG)


**spotify-this-song = Spotify**

information printed will include:

* Artist(s)
* The song's name
* A preview link of the song from Spotify


*example*

```
node liri.js spotify-this-song '<song name here>' 
```

This would be the results:
![](image/3.PNG)

* Title of the movie
* Year the movie came out
* IMDB Rating of the movie.* Rotten Tomatoes Rating of the movie
* Country where the movie was produced
* Language of the movie
* Plot of the movie
* Actors in the movie


**movie-this = IMDB**

information printed will include:


*example*

```
node liri.js movie-this '<movie name here>' 
```
This would be the results:
![](image/4.PNG)


NOTE:  If the user does not enter a movie name, the default movie searched will be Mr. Nobody

This would be the results:
![](image/5.PNG)


**do-what-it-says** 

the command will take the text inside of random.txt and then use it to call one of LIRI's commands.

*example*
```
node liri.js do=what-it-says 
```

The text file referenced

![](image/6.PNG)


The result in the terminal

![](image/7.PNG)

## Video Demonstration

(https://drive.google.com/file/d/1SLDawY40DxncYyKjV9n-unL5caId0WL3/view)


## Authors

* **Tiffany Lin** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Adrian Pearman for fixing my .env
