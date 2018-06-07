////////////////////////////
////////////////////////////
// Reakcja na zdarzenia

// Ta cecha HTML DOM jest bardzo użyteczną funkcją. Pozwala na wywołanie określonego przez nas kodu
// JavaScript gdy nastapi jakieś zdarzenie, głównie wywołane przez użytkownika.
// Na przykład:
// gdy użytkownik kliknie w przycisk,
// gdy użytkownik najedzie myszką na jakiś element HTML,
// gdy użytkownik wprowadzi tekst w pole tekstowe,
// gdy użytkownik naciśnie przycisk na klawiaturze,
// gdy załaduje się strona,
// gdy załaduje się obrazek na stronie.
// itd. Ilość możliwych zdarzeń jakie mogą być rejestrowane w celu odpowiedniej reakcji
// przez JavaScript jest bardzo dużo. Na stronie w3school znajduje się lista z możliwymi zdarzeniami.

// W celu wywołania kodu JavaScript w momencie kiedy nastąpi odpowiednie zdarzenie musimy
// umieścić w atrybucie interesującego nas elementu / znacznika HTML odpowiedni atrybut.

// Ogólna postać atrybutu:

eventHandler=JavaScriptCode
onlick = "Wstawiany tekst";

// Możemy rownież za pomocą HTML DOM i JavaScript dodać do elementu / znacznika odpowiednie zdarzenie.
// Dostajemy sie do niego za pomocą znanych już metod a nastepnie za pomocą metod
// których nazwy pochodzą od rodzaju zdarzenia i po znaku równa sie dodajemy kod JavaScript
// wykonywany podczas zdarzenia.

// Ogólna postać dodawania zdarzenia za pomocą metod:

document.getElementById("ID")."eventHandler" = JavaScriptCode
document.getElementById("ID").onfocus = this.style.background = "yellow";

// Możemy po znaku równa się napisać cały kod JavaScript który ma się wykonać.
// Jednak najlepszym sposobem będzie po prostu stworzyć w pliku z kodem JS
// odpowiednią funkcję. Funkcję tę będziemy wywpływać po znaku równa sie w atrybutu zdarzenia
// tak aby nie pisać całego kodu jaki ma się wykonać w momencie zdarzenia.
// Kod ten będzie zapisany w funcko w pliku JS. Warto kozystać z możliwości przekazywania do tej naszej
// funkcji argumentów. Mogą być nimi właściwości, atrybuty znacznika HTML na którym
// wykonujemy zdarzenie. To tylko przykład oczywiście.

// Przykład z umieszczeniem kodu JavaScript w atrybucie zdarzenia:
<h1 onclick="this.innerHTML = 'Ooops!'">Kliknij w ten tekst!</h1> // Na naszej stronie
// będzie wyświeltony nagłówek z treścią "Kliknij w ten tekst!". Po kliknięciu
// w tekst, a tak naprawde w nagłówek zostanie wstawiony nowy tekst: "Ooops!"

// Przykład z użyciem funkcji:
<h1 onclick="zmienTekst(this)">Kliknij w ten tekst!</h1> // po kliknięciu w nagłówek
// wywołujemy funkcję i w argumencie funkcji przekazujemy ten obiekt (this) czyli "H1"
// a wraz z nim wszystkie jego argumenty i właściwości itd.,
// dzięki którym będziemy mogli to wszystko zmieniać.
function zmienTekst(obj){ // funkcja wywoływana po kliknieciu w nagłówek
	obj.innerHTML = "Ooops!"; // zamiana treści nagłówka za pomocą metody innerHTML
}

// Przykład z uzyciem przycisku do wywoływania zdarzeń:
<button onclick="displayDate()">The time is?</button> // przycisk z atrybutem
// klikniecia i wywoływaniem funkcji "displayDate()"
<p id="data"></p> // pusty akapit w który będziemy wstrzykiwać treść za pomocą innerHTML
function displayDate(){ // funkcja wywoływana w momencie kliknięcia w przycisk
	document.getElementById('data').innerHTML = Date(); // umieszcze w pustym akapicie
	// aktualnej daty
}

// Przykład z niebezpośrednim umieszczeniem atrybutu zdarzenia w elemencie / znaczniku HTML:
<button id="btn">The time is?</button> // przycisk tylko z atrybutem ID
<p id="data"></p> // pusty akapit w który będziemy wstrzykiwać treść za pomocą innerHTML
document.getElementById("btn").onclick = displayDate(); // dostępo do przrzycisku i
// przy użyciu metody "onclick" dopisanie mu atrybutu zdarzenia.
// JAK WIDAĆ ROBIMY TO POŚREDNIO.
function displayDate(){ // funkcja wywoływana w momencie kliknięcia w przycisk
	document.getElementById('data').innerHTML = Date(); // umieszcze w pustym akapicie
	// aktualnej daty
}

// Bardzo pomocnym zdarzeniem jest wykrycie najechania / zjechania myszą (bez klikania)
// na element / znacznik HTML. Przykład:
<h2 onmouseover="mOver(this)" onmouseout="mOut(this)">Najedź na mnie</h2> // nagłówek 2 stopnia
// z atrybutem najechania i zjechania i wywołania funkcji odpowiednio mOver i mOut,
// z jednoczesnym przekazaniem do funckji argumentu jakim jest ten obiekt (this) czyli H2.
// a wraz z nim wszystkie jego argumenty i właściwości itd.,
// dzięki którym będziemy mogli to wszystko zmieniać.
function mOver(obj) { // funkcja wywoływana podczas najechania myszką na nagłówek
    obj.innerHTML = "Blebleble" // podmiana treści w nagłówku
}
function mOut(obj) { // funkcja wywoływana podczas zjechania myszą z nagłówka
    obj.innerHTML = "Najedź na mnie" // podmiana treści w nagłówku
}

// Kolejnym pomocnym zdarzeniem jest naciśniecię przycisku myszki / puszczenie
// przycisku myszki na elemencie / znaczniku HTML. Poniższy przykład jest analogiczny
// do tego z najechaniem i zjechaniem myszki, więc nie będzie opisywany.
// Przykład:
<h2 onmousedown="mDown(this)" onmouseup="mUp(this)">Kliknij mnie i przytrzymaj</h2>
function mDown(obj) {
    obj.innerHTML = "aaaa To boli ;( Puść mnie, proszę !!!";
}
function mUp(obj) {
    obj.innerHTML="Dziękuje ;*";
}
// Przykład podobny jak powyższy tylko z podmiana obrazka przy naciśnięciu i przytrzymaniu przycisku
// oraz puszczeniu przycisku:
<img id="myimage" onmouseover="lighton()" onmouseout="lightoff()" src="zarowka_wylaczona.gif" width="100" height="180" />
function lighton() {
    document.getElementById('myimage').src = "zarowka_wlaczona.gif";
}
function lightoff() {
    document.getElementById('myimage').src = "zarowka_wylaczona.gif";
}

// Pomocnym zdarzeniem jest również, zdarzenie polegające na wejściu na stronę
// przez użytkownika bądź jej opuszczeniu.
// Zdarzenie wejści na stronę (onload) może być wykorzystywane do sprawdzenia
// z jakiej przeglądarki korzysta użytkownik i na podstawie tej informacji załadowanie
// wersji strony przystosowanej do takiej przeglądarki. To tylko przykład.
// TEN TYP ZDARZENIA UMIESZCZAMY JAKO ARGUMENT ZNACZNIKA BODY.
// Zdarzenia onload i unload można wykorzystywac do obsługi plików cookie.
// Przykład z cookie:
<body onload="checkCookies()">
<p id="demo"></p>
function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("demo").innerHTML = text;
}

// Event listener (nasłuchiwacz zdarzeń)

// Event Listener jest bardzo podobnym roziwązaniem do metod pochodzących od
// słowa określonego zdarzenia na dodawanie / usuwanie z elementów / znaczników HTML zdarzeń.
// A w zasadzie Event Listener jest również metodą do dodawania / usuwania zdarzeń z
// elementów / znaczników HTML z poziomu HTML DOM.

// A więc mamy metodę do dodawania zdarzeń do obiektu. Jej składnia jest nastepująca:

element.addEventListener(event, functionName, useCapture);
event // rodzaj zdarzenia jaki dodajemy.
// UWAGA!!!
// W przypadku dodawania zdarzenia przez addEventListener nie używamy w nazwie zdarzenia
// prefixu "on". Zamiast "onclick" będzie "click".
functionName // nazwa funkcji jaka ma być wywołana w momencie zajścia zdarzenia.
// UWAGA 1!!!
// Nazwe funkcji NIE kończymy znakiem otwarcie i zamknięcia "()".
// UWAGA 2!!!
// W przypadku dodawania zdarzenia przez addEventListener w drugim parametrze podajemy
// nazwe funkcji. NIE mamy możliwości wpisania tutaj kodu JavaScript.
// Podczas umieszczania zdarzeń jako atrybutu w znaczniku HTML bądź dodawania zdarzenia
// za pomocą metody o nazwie okreslonego zdarzena to mieliśmy możliwość wpisania kodu JavaScript.
// W tym przypadku NIE możemy.
// UWAGA 3!!!
// Jeżeli chcemy przekazać do funkcji jakieś parametry to w związku z tym, że
// nie możemy pisać nazwy funkcji z nawiasami, a więc nie ma możliwości przekazywania
// do niej parametrów to musimy wywołać ją w inny sposób. Oto ten sposób:
function(){ functionName(p1, p2, ..); } // tą całość podstawiamy w miejsce gdzie
// jest functionName.
// UWAGA!!!
// Powyższy zapis pozwala nam wówczas aby w nawiasie "{}" zamiast odwołania sie
// do funkcji poprzez nazwę, możemy również zapisac kod JavaScript.
useCapture // ten parametr jest wartością logiczną true / false i określa czy należy
// używać propagacji zdarzeń typu bubbling czy capturing. Parametr ten jest opcjonalny.
// Domyslnie jest false, czyli uzywana jest progpagacja typu bubbling.

// Metoda addEventListener:
// - dołącza obsługę zdarzeń do okreslonego elementu,
// - dołącza obsługę zdarzeń do elementu bez nadpisywania istniejących procedur
//   obsługi zdarzeń,
// - może dodawać wiele procedur obsługi zdarzeń do jednego elementu,
// - może dodawać wiele takich samych procedur obsługi zdarzeń do jednego elementu,
//   np.: dwa zdarzenia kliknięcia,
// - może dodawać zdarzenia do dowolnego obiektu DOM, nie tylko elementów HTML,
//   na przykład do okna przeglądarki,
// - metoda ta pozwala oddzielic kod JavaScript od znaczników HTML. Dzięki temu
//   zyskujemy czytelniejszy kod,
// - ułatwia kontrolowanie reakcji zdarzenia na propagację.

// O propagacji zdarzeń.
// Propagacja zdarzeń jest sposobem definiowania kolejności elementów w przypadku
// wystąpienia zdarzenia. Jeśli mamy element P w elemencie DIV a zdarzenia są podpięte
// zarówno do elementu P oraz DIV. Mogą to być zdarzenia róznego typu lub tego samego.
// Użytkownik kliknie w element <p>, to które zdarzenie "kliknięcie" elementu powinno zostać obsłużone jako pierwsze?
// Bubbling.
// Podczas tego rodzaju propagacji zdarzenie w najbardziej wewnętrznym elemencie
// jest obługiwane jako pierwsze, a nastepnie to które jest przypisane do zewnętrzego elementu.
// W naszym przypadku najpierw wywołane zostanie zdarzenie przypisane do elementu P,
// a dopiero późnije do elementu DIV.
// Capturing.
// Jest odwrotnością bubbling. Zdarzenie w najbardziej zewnętrznym elemencie jest
// wykonywane jako pierwsze, a nastepnie to które jest przypisane do wewnętrznego elementu.
// W naszym przypadku najpierw wywołane zostanie zdarzenie przypisane do elementu DIV,
// a następnie to które zostało przypisane do elementu P.

// I mamy też metodę do usuwania zdarzeń z obiektu. Jej składnia jest następująca:

element.removeEventListener("event", functionName);
"event" // zapisany w cudzysłowniu rodzaj zdarzenia z którego chcemy usunąć
// reakcje na zdarzenie.
functionName // nazwa funkcji którą była reakcją na zdarzenie a teraz ją usuwamy ze zdarzenia.

// UWAGA!!!
// Niektóre przeglądarki nie obsługują metod
addEventListener
// oraz
removeEventListener.
// Aby jednak móc używać metod doających / usuwających zdarzenia, możemy użyć starszych metod:
// - dodająca:
element.attachEvent(event, function);
// - usuwająca:
element.detachEvent(event, function);
