// Model DOM
//
// Model DOM pozwala na integrację JavaScript z elemntami wchodzącymi w skład
// składni HTML oraz CSS. Zapewnia on językowi JavaScript dostęp do zawartości
// strony internetowej, ponieważ przeglądarki wykorzystują DOM do śledzenia na stronie
// znaczników HTML. Dzieje się to za pomocą części medelu DOM jakim jest HTML DOM.
// Co oznacza, że podczas wczytywania strony przeglądarki definiują elementy HTML
// jako obiekty, właściwości do wszystkich elementów HTML, metody dostępowe do elementów HTML
// oraz zdarzenia do wszystkich elementów HTML.
// Dzięki HTML DOM, JavaScript pozwala nam na tworzenie dynamicznego kodu HTML:
// - JavaScript może zmieniać wszystkie elementy HTML na stronie,
// - JavaScript może zmieniać wszystkie atrybuty HTML na stronie,
// - JavaScript może zmieniać wszystkie style CSS na stronie,
// - JavaScript może usuwać istenijące elementy i atrybuty HTML na stronę,
// - JavaScript może dodawać nowe elementy i atrybuty HTML na stronę,
// - JavaScript może reagować na ustawione istniejące zdarzenia HTML na stronie,
// - JavaScript może tworzyć nowe zdarzenia HTML na stronie.

// Model DOM opiera się na zasadzie hierarchi / drzewka.
// W drzewku tym elementem głównym (rootem) będzie znacznik <HTML>.
// Każdy element wchodzący wskład strony internetowej będzie się z wywodził z <HTML>.
// Co oznacza, że element ten będzie głębokim rodzicem (dziadkiem) każdego innego elementu.
// Oczywiści elementy bardziej zagnieżdżone takie jak na przykład akapit <P> będzie
// posiadał płytszego rodzica jakim będzie znacznik <BODY>. Natomiast sam akapit <P> będzie
// posiadał dzieci w postaci tekstu umieszczonego w tym akapicie oraz osobnym
// dzieckiem też będzie sposób formatowania tego tekstu czy atrybut w postaci identyfikatora
// bądź klasy itd.
// Do każdego rodzica i dziecka w modelu DOM mamy dostęp za pomocą JavaScript,
// przez co możemy go zmieniać bądź dodawać nowe dzieci rodzica.

// Patrz obrazek Model_DOM.jpg

// Bardzo pomocnym narzędziem developerskim w poruszaniu się i możliwościach jakie
// dają nam dane elementy strony w kontekście DOM jest polecenie:

colnsole.dir(domcument)

// Polecenie to wpisujemy w konsoli przeglądarki na otwartej interesującej nas stronie.
// Po wywołaniu dostajemy listę zbiór informacji o danej stronie internetowej w kontekście
// modelu DOM. Możemy tam znaleźć jakie dany element posiada on dzieci. Co jest jego pierwszym dzieckiem,
// a co ostanim. Kto jest jego rodzicem. Co możemy wykonać na inrteresującym nas elemencie.
// Jakie zdarzenia wywołać. Co możemy zmodyfikować. I tak dalej.
// To polecenie pozwala nam zorientować się w strukturze DOM znacznika HTML, jakiejś
// jego właściwości, atrybutu. A w konsekwencji dotrzeć później do tego co nasz interesowało
// za pomocą JavaScript.

////////////////////////////
////////////////////////////
// Dostęp do istniejących znaczników HTML i manipulacja nimi

// Metody HTML DOM to akcje które można wykonać na jakimkolwiek elemencie HTML.
// Jak na przykład dodawanie lub usuwanie treści wysietlanych na stronie poprzez
// elementy HTML, bądź zmiana atrybutów tych elementów znajdujących się wewnątrz znaczników.

// Dostęp do elementu jednocześnie czyni z niego obiekt.

// UWAGA !!!
// Przyczym, to bardzo ważne, że ten znacznik który będzie wyświetlać
// treść, bądź ten którego chcemy zmienić atrybut MUSI już istnieć.

// Dostep do jakiegokolwiek znacznika na stronie HTML (a jednocześnie do jego właściwości) odbywa się poprzez HTML DOM.
// Najczęściej używane metody dostępowe do elementów HTML:

document.getElementById('#ID'); // w miejscu ID podajemy identyfokator jaki nadaliśmy znacznikowi podczas tworzenia kodu HTML,
// wiadomo, że ID jest unikatowe i może być przyporządkowane tylko do jdnego znacznika HTML.

document.getElementsByClassName('#CLASS'); // w miejscu CLASS podanejmy nazwę klasy
// nadanej znacznikowi podczas tworzenia kodu HTML, klasa z kolei może być przyporządkowana do kilku znaczników.
// Metoda ta zwraca kolekcje / listę obiektów, tj. znaczników którym została nadana ta sama klasa.
// Będą one uporządkowane od wystepowania na stronie. Pierwszy znacznik bedzie
// w tej liście pod indeksem 0. Należy pamiętać, że mimo zwracana jest nam lista
// to nie możemy na niej wykonać metod takie jakie wykonujemy normalnie w kodzie JavaScript.

document.getElementsByTagName('#TAG'); //poprzez tą metodę odwołujemy się ogólnie do znacznika HTML,
// jezeli jest tych znaczników kilka w kodzie HTML to za jendnym razem odwołamy się do wszystkich.
// A dokładniej to metoda ta zwraca nam listę wszystkich tych samych znaczników.
// Będą one uporządkowane od wystepowania na stronie. Pierwszy znacznik bedzie
// w tej liście pod indeksem 0. Należy pamiętać, że mimo zwracana jest nam lista
// to nie możemy na niej wykonać metod takie jakie wykonujemy normalnie w kodzie JavaScript.
// Na przykład:
<p>Czesc</p>
<p>Jestem Tomek</p>
<p>Lubię motocykle</p>
var x = document.getElementsByTagName("p");
y[2].innerHTML == "Lubię motocykle" // odnośimy się do zawartości 3 z kolei akapitu.

document.querySelectorAll("znacznik.ID/className/typ/atrybut/war"); // metoda ta
// pozwala dostać się do elementu HTML za pomoca formuly jaka jest używana
// w plikach CSS, tj.:
znacznikHTML(.ID/className/typ/atrybut/war) // ID, CLASSNAME podajemy jeżeli zostały one
// nadane interesującym nas znacznikom.
p.intro
// Metoda ta zwraca kolekcje / listę obiektów, tj. znaczników (bez klasy lub
// którym została nadana ta sama klasa / ID itd.)
// Po prostu tak jakbyśmy je znajdowali w CSS.
// Będą one uporządkowane od wystepowania na stronie. Pierwszy znacznik bedzie
// w tej liście pod indeksem 0. Należy pamiętać, że mimo zwracana jest nam lista
// to nie możemy na niej wykonać metod takie jakie wykonujemy normalnie w kodzie JavaScript.

// Powyższe metody pozwalają na dostęp do elementów HTML, ale aby coś z nimi zrobić
// musimy wywołać na nich kolejne metody.
// Wywo0łujemy je tak samo jak w przypadku wywoływania metod na obiektach.
// Ponieważ jeżeli wywołamy metodę powołującą się na jakiś znacznik to staje sie on obiektem.
// Więc wówczas znowu djaemy kropkę i wpisujemy metodę która coś dokonuje z obiektem.
// Często warto przypisać do zmiennej nasz obiekt i poźniej na nim wywoływać metody HTML DOM.
// Najczęściej używane metody do manipulowania elementami HTML:

var element1 = document.getElementById('#ID');
var element2 = document.getElementsByClassName('#CLASS');
var element3 = document.getElementsByTagName('#TAG');

element1.innerHTML = // metoda innerHTML pozwala nam na umieszcze treści
// widocznej na stronie internetowej, dokładnie tak jakbyśmy umieścili treść pomiędzy
// znacznikami w kodzie HTML, np.:
<p id="x">Cześć jestem Tomek</p>
document.getElementById("x").innerHTML = "Nie cześć i nie jestem Tomkiem"
// Wkorzystywany właśnie po to aby dodać, zmienić jakiś tekst na strone poprzez wstrzyknięcie tego tekstu
// za pomocą JavaScript i HTML DOM.

element2.attribute(.property) = nowa wartość // metoda ta pozwala dostać się do
// właściwości jakie posiada znacznik HTML i manipulować nimi.
// Oczywiście w miejscu słowa "attribute" wpisujemy odpowiedni atrybut znacznika HTML.
// Mając na myśli atrybut to są to wszystkie pola które nadajemy znacznikowi
// i znajdują się one jeszcze pomiędzy oznaczeniem znacznika a nawiasem ostrym,
// np.:
<img id="myImg" alt="Flower" src="fikus.jpg">
element3[0].id == "myImg" // zwróci nazwę ID elementu / znacznika obrazek
element3[0].src = "fiolek.jpg" // podmieni nazwę pliku z obrazkiem, a co za tym idzie,
// zmieni się obrazek wyświetlany na naszej stronie.
// atrybutami są:
// id, alt, src.
// Należy dodać, że jeżeli zamiast konkretnej właściwości wybierzemy ogólnie słówko
// "attribute" odwołujące się do wszystkich właściwości naraz to potem mamy możliwość odwołania się
// do wszystkich właściwości poprzez metody np.: name, length.
// Wykorzystywany jest na przykład do zmiany wielkości obrazka po najechaniu myszką,
// bądź podmiany obrazka na inny poprzez zmianę adresu obrazka w src itd.
// Bardzo ważnym atrybutem jest "value". Za jego pomocą możemy przechwycić
// z pola formularza wartość którą wpisał użytkownik i dalej coś z nią robić,
// na przykład:
Enter your name: <input type="text" id="fname" onchange="myFunction()"> // pole formularza
// do wpisywania przez użytkownika, atrybutem jest zdarzenie które reaguje na zmianę,
// w tym wypadku zmiana polega na wpisaniu czegoś do pola formularza i wywołuje funkcję myFunction()
function myFunction() { // funkcja wywoływana przez atrybut w polu formularza
    var x = document.getElementById("fname"); // zapisanie w zmiennej obiektu jakim jest pole formularza
    x.value = x.value.toUpperCase(); // zamiana wartości wpisanej przez użytkownika
		// czyli liter na wielkie
}

element3.setAttribute(#attribute, #value) // inny sposób na dostanie się do właściwośi
// znacznika i dokonanie w nim jakiejś zmiany.

element1.style.property = new style // zmiana stylu, formatowania jakiegoś znacznika HTML.
// W ten sposób dostajemy się do formatowania CSS i zmieniamy, nadajemy itd kolejne formatowania.
// "property" wyglada tak jak w normalnym pliku CSS.
// Najpierw podajemy "style", co znaczy, że chcemy ustawić formatowanie, a później
// do jakiego elementu formatowania się odnosimy. Na przykład jeżeli chcemy
// ustawić / zmienić kolor tła to formuła bedzie nastepjująca:
<p id="demo">Uczymy sie HTML DOM</p>
document.getElementById("demo").style.backgroundColor = "yellow";
// Ta cześć polocenie po "..style." jest właśnie zapisywan tak jak w ustawianiu właściwości
// formatowania w pliku CSS, z tą różnicą, że tam mamy ":" zamianas "=".
// Bardzo ważne jest też to, że właściwość zapisujemy pomiędzy cudzysłowem, np.: "yellow".
// Kolejny przykład, nadanie tekstowi wyśrodkowania:
document.getElementById("demo").style.textAlign = "center";
// Bardzo ciekawą możliwościa jaką daje HTML DOM, jest tworzenie prostych animacji.
// Na przykład tworzymy DIVa o jakichś rozmiarachi pewnym kolorze.
// Następnie za pomocą HTML DOM dostajemy sie do jego właściwości odpowiedzialnych za styl,
// a dokładniej do parametrów położenia TOP, LEFT.
// Wszystko to umieszczamy w funckji uruchamianej na zdarzenie ONCLICK jako atrybut przycisku BUTTON.
// Jednocześnie w funkcji tej w pętli inkrementujemy zmienna którą podstawiamy jako
// wartośći połozenia i jezeli dojdzie ona do zadanej jakiejś wartości to kończymy działanie
// pętli.

document.jakiśTagKtóryJestObsługiwany // zwraca nam kolekcję / listę obiektów dzieci
// wchodzących w skład danego obiektu będącego ich rodzicem. Na przykład jeżeli
// odwołamy się do:
document.body // to zwróci nam kolekcję / liste obiektów wchodziących w skład znacnzika HTML BODY.
// Będą one uporządkowane od wystepowania na stronie. Pierwszy znacznik bedzie
// w tej liście pod indeksem 0. Należy pamiętać, że mimo zwracana jest nam lista
// to nie możemy na niej wykonać metod takie jakie wykonujemy normalnie w kodzie JavaScript.
// Oczywiście możemy się do nich później zwracać za pomocą numerów indeksów.
document.forms["ID"] // zwróci kolekcję / liste obiektów wchodziących w skład formularza
// o jakimś konkretnym ID. W przypadku formularza to będą to wszystkie obiekty wchodzące w skład
// znacznika FORM.
ITD. listę

// Zastosowania w konkretnych przypadkach znajdują sie na stronach min. w3school

////////////////////////////
////////////////////////////
// Dodawanie i usuwanie znaczników HTML

// Wcześniejsze metody słuzyły do operacji na już istniejących znacznikach HTML.
// Metoda do dodawania znaczników na stronie internetowej:

document.createElement(element) // stworzenie znacznika HTML. Jaki to będzie znacznik
// zależy od tego co umieścimy w miejscu "element", np.: document.createElement("BUTTON")
// spowoduje stworzenie znacznika typu "button".

// Należy pamietać, że oprócz tego, że stworzymy nowy element to należy go jeszcze
// dodać w kodzie HTML. Na razie on istnieje jakby wirtualnie.
// W tym celu posługujemy się metodami które odnoszą się do konkretnych sekcji kodu HTML.
// A ściślej mówiąc odnoszą się do kolekcji elementów.
// A są to:

document.head // zwraca wszystkie elemnty / znaczniki znajdujące się w sekcji HEAD kodu HTML.
// Zwraca te elementy w postaci listy, gdzie dany element / znacznik przyjmuje taki idneks na liście
// jaką pozycje miał w sekcji oczywiście zaczynajac od 0.

document.body // zwraca wszystkie elemnty / znaczniki znajdujące się w sekcji BODY kodu HTML.
// Czyli miejscu gdzie znajdują się znaczniki odpowiedzialne za wyświetlanie treści
// na naszej stronie.
// Zwraca te elementy w postaci listy, gdzie dany element / znacznik przyjmuje taki idneks na liście
// jaką pozycje miał w sekcji oczywiście zaczynajac od 0.

// UWAGA !!!
// Tych metod zwracających elementy / znaczniki w postaci listy z konkretnej sekcji bądź znacznika
// będącego rodzicem innych, w nim znajdujących się znaczników, jest więcej, np.:
document.forms // zwraca elementy znajdujące się w formularzu, możemy odnieść się do konkretnego formularza
// poprzez ID. Np.:
<form id="frm1" action="/action_page.php"> // mamy w kodzie formularz
  First name: <input type="text" name="fname" value="Donald"><br>
  Last name: <input type="text" name="lname" value="Duck"><br><br>
  <input type="submit" value="Submit">
</form>
document.forms["frm1"].elements[0].value == "Donald" // odnośimy się do wartości pierwszego elementu
// formularza tj. First name.

// Więcej metod zawracających kolekcje elementów z obiektu znajduje się na stronie w3school.

// Powyższe metody nie zwracaja tylko element które występują w danej sekcji, mogą również, w połączeniu z
// kolejnymi metodami dodawać do danej sekcji nowe elementy, tzn. child (dzieci).
// Po wywołaniu jakiejś sekcji stosujemy po kropce metodę która pozwoli nam dodać nowy element.
// Oczywiście istnieja też metody które usuną nam istniejące elementy bądź zamienią na inne, na
// przykad zawierające inne atrybuty itd.
// Najczęściej używane metody do dodawania i usuwania elementów / znacnzików HTML:

var element4 = document.BODY;

element4.appendChild(nowyElement); // dodaje do sekcji nowy element / znacznik.
// Tak jak wcześniej było mówione, ten nowy element / znacznik musi zostać wczęsniej
// stworzony za pomocą document.createElement(element), np.:
btn = document.createElement("BUTTON"); // najpierw tworzymy "wirtualnie" znacznik typu "BUTTON"
document.body.appendChild(btn); // nastepnie dodajemy go do sekcji BODY.
// Należy pamietać, że zostanie dodany on na samym dole, jako ostatni znacznik na stronie.
// Oczywiście musimy pamiętać również o nadaniu tekstu na nasz przycisk itd.

element4.removeChild(elementIstniejący); // usuwa z sekcji / listy istniejący element / znacznik.
// Oczywiście ten element który będziemy chcieli usunąć musi istnieć na naszej stronie.
// Na przykład.:
<ul id="myList"><li>Coffee</li><li>Tea</li><li>Milk</li></ul> // mamy w kodzie nieuporządkowaną listę o ID "myList"
var list = document.getElementById("myList") // dostęp do niej przypisyujemy do zmiennej
element4.removeChild(list) // usuwamy ją z sekcji body

element4.document.replaceChild(nowyElement, elementIstniejący) // zastępuje istenijący element / znacznik
// nowym. Oczywiście najepierw musimy stworzyć wirtualnie nowy element którym bedziemy chcieli zastapić
// elementu już istniejący w sekcji. Podobna sytuacja tutaj wystepuje co w przypakdu tworzenia nowego elementu / znacznika.
// Róznica jest tylko taka, że w tym przypadu nie zwiększy się ilość elementów na stronie, tylko jeden bedzie
// podmieniony w stosunku do oryginalnej wersji, np.:
<p id="oryginalny">Ten akapit zostanie podbmieniony innym</p> // mamy w kodzie akapit oryginalny
var elmnt = document.createElement("p"); // tworzymy "wirtualnie" nowy akapit
var textnode = document.createTextNode("AKAPIT PODMIENIONY"); // tworzymy zmienną z treścia która będzie wyświetlana
// w tym nowo tworzonym akapicie
elmnt.appendChild(textnode); // wstrzykujemy do nowo stworzonego akapitu treść
document.body.replaceChild(elmnt, oryginalny); // podmieniamy stary akapit nowym akapitem razem z treścią.
// Należy pamiętać, że za pomocą HTML DOM możemy też nadawać ID nowym elementom które
// zastępują stare elementy itd. Po prostu pamiętajmy, żeby tworzyć elementy które
// będą zastępowały inne już kompletne.

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
// słowa zdarzenia na dodawania / usuwanie z elementów / znaczników HTML zdarzeń.
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
// Podczas umieszczania zdarzeń jako atrybuty w znaczniku HTML bądź dodawania zdarzenia
// za pomocą metody o nazwie zdarzenai to mielismy możliwość wpisania kody JavaScript.
// W tym przypadku nie możemy.
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


// I mamy też metodę do usuwania zdarzeń z obiektu. Jej składnia jest  następująca:

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
