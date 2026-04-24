installiamo le dipendenze

creiamo cartelle varie
nella pagina principale (app.jsx) creiamo l'instradamento /homepage /books /books/:id con il browserouter



creiamo il layout (header e footer) così che quando cambiamo pagina l'header e il footer rimangono invariati
  
 -HEADER: contiene una nav bar con HOMEPAGE E BOOKS con un logo
 -FOOTER: contiene semplici link ecc


nella cartella PAGES andimao ad inserie tutte le pagine della webapp
 - per l'hompeepage (HomePage.jsx)
    - un semplice benvenuto

 - per la visualizzazione dei film (Movies.jsx)
    - chiamata AJAX dell'api creata in back end
    - mappatura di tutti i film
    - aggiunta di decorazioni varie (esempio : stelline)

 - per la visualizzazone del singolo film (SingleMovies.jsx)
    - chiamata AJAX per la visualizzazione di un singolo film utilizzando come parametro l'ID
    - parte di pagina dedicata alle recensione che andremo ad estrapolare dal database
    - aggiunta di un form per il postaggio di una recensione

poi si esporta tutto e si mette in app.jsx

andando nella backend si avvia il tutto dal terminale per andare a visualizzare i film

### DA FARE ANCORA:
  - Predisporre una pagina Admin dove mostrare una tabella con l'elenco dei film

  - Nella pagina di elenco films, quando l'utente e' in hover sull'immagine del film appare un'icona di un occhio 👁️, cliccando l'immagine si apre una modale con all'interno i dettagli del film completi + il pulsante per visitare il singolo film

  - Aggiungere un form statico allla pagine del singolo FILM per l'invio di una recensione

