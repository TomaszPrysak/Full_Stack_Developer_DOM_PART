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

document.querySelectorAll(".ID/#className/typ/atrybut/war"); // metoda ta
// pozwala dostać się do elementu HTML za pomoca formuly jaka jest używana
// w plikach CSS, tj.:
znacznikHTML(.ID/className/typ/atrybut/war) // ID, CLASSNAME podajemy jeżeli zostały one
// nadane interesującym nas znacznikom.
p.intro
// Metoda ta zwraca kolekcje / listę obiektów, tj. znaczników (bez klasy lub
// którym została nadana ta sama klasa / ID itd.)
// Po prostu tak jakbyśmy się do nich odnosili w CSS.
// Będą one uporządkowane od wystepowania na stronie. Pierwszy znacznik bedzie
// w tej liście pod indeksem 0. Należy pamiętać, że mimo zwracana jest nam lista
// to nie możemy na niej wykonać metod takie jakie wykonujemy normalnie w kodzie JavaScript.
// Należy dodać, że istnieje jeszcze metaoda związana z CSS:
document.querySelector("znacznik.ID/className/typ/atrybut/war"); // jak widać różnica jest
// taka, że nie zawiera słówka "All" w nazwie. A więc nie zwraca wszystkich elementów
// pasujących do zapytania, tylko zwraca pierwszy element.

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
// ITD.

// UWAGA!!! BARDZO WAŻNE !!!
// Powyższe metody do odwoływania się do elementów można łączyć w potoki i dzięki temu,
// na przykład jeżeli w jakimś DIV o ID=DIV1 mamy kilka elementów w tym dwa przyciski BUTTON
// to aby zwrócić listę tylko z tymi przyciskami tworzymy potok z kilku równorzędnych metod.
// Przykład:
<div id="DIV1">
	<button>OK</button>
	<button>Anuluj</button>
</div>
document.getElementById("DIV1").getElementsByTagName("button")

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

element1.innerHTML // metoda innerHTML pozwala nam na umieszcze treści
// widocznej na stronie internetowej, dokładnie tak jakbyśmy umieścili treść pomiędzy
// znacznikami w kodzie HTML, np.:
<p id="x">Cześć jestem Tomek</p>
document.getElementById("x").innerHTML = "Nie cześć i nie jestem Tomkiem"
// Wkorzystywany właśnie po to aby dodać, zmienić jakiś tekst na strone poprzez wstrzyknięcie tego tekstu
// za pomocą JavaScript i HTML DOM.
// Oprócz tego, że możemy umieszczać jakiś tekst to rownież możemy go pobierac jeżeli już on istneieje.
// Metoda ta powoduje, że jeżeli za jej pomocą będziemy umieszczać treść wraz ze znacznikami formatującymi
// to zostaną zamienione na kod HTML i będą formatować tekst.
// UWAGA !!!
// Metoda zwraca całą zawartość znacznika HTML. A więc jeżeli naszą treść na stronie
// pogrubimy poprzez użycie znacznika B, np:
<p id="y">Cześć  mam na imię <b>Tomek</b></p>
// i będziemy chcieli wyświetlić zawartość akapitu o ID "y" za pomocą powyższej metody,
// to otrzymamy nastepujący ciąg znaków:
// "Cześć  mam na imię <b>Tomek</b>" - czyli wszystko to co było pomiędzy znacznikiem akapitu P,
// łącznie ze znacznikami B. Jeżeli w treści byłby też jakieś dodatkowe spacje to rownież zostałby zwrócone.
// Podczas pobierania zawartości za pomocą innerHTML, należy zwrócić na to uwagę.
// W przypadku pobierania zawartości znacznie lepsze są metody textContent bądź innerText.

element1.textContent // metdoa textContent pozwala na pobranie zawartości i jej zwrócenie
// w postaci czystego tekstu. Jeżeli w treści w kodzie HTML byłby użyte jakieś znaczniki formatujące treść
// no zostałby one pominięte a zwrócony tylko tekst, np.:
<p id="y">Cześć  mam na imię <b>Tomek</b></p>
// to wykorzystując opisywaną metodę zwórcony zostanie nastepujący ciąg znaków:
// "Cześć  mam na imię Tomek" - tylko czysty tekst znajdujący się pomiędzy znacznikiem akapitu P.
// Metoda ta pozwala również na wstawianie tekstu jednak powoduje, że jeżeli za jej pomocą
// będziemy umieszczać treść wraz ze znacznikami formatującymi to będą one potrakotowane jako
// zwykły ciąg znaków a nie kod HTML i treść nie będzie formatowana.
// UWAGA !!!
// Pomimo, że textContent zwraca czysty tekst bez znaczników go formatujących to
// nie pomija dodatkowych spacji. Należy na to zwrócic uwagę.
// Aby już całkowicie wyeliminować ten problem to należy stosować metodę innerText.

element1.innerText //metoda innerText pozwala na pobranie zawartości i zwrócenie jej
// w najbardziej czystej postaci jaka jest możliwa. Bez tagów żadnych tagów HTML
// formatujących tekst oraz bez dodatkowych spacji jeżeli zostały użyte, np.:
<p id="y">yoyoyo    <b>Tomek</b>    !!!</p>
// to wykorzystując opisaną metodę zwrócony zostanie nastepujuący ciąg znaków:
// "yoyoyo Tomek !!!" - tylko czysy tekst bez tagów B oraz bez dodatkowych spacji.

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
element3.getAttribute(#attribute); // inny sposób na dostanie się do właściwości znacznika
// i możliwości jej zwrócenia. W tym przypadku nie ma możliwości.
element3.setAttribute(#attribute, #newValue); // inny sposób na dostanie się do właściwośi
// znacznika i dokonywanie modyfikacji.

element1.style.property = new style // zmiana stylu, formatowania jakiegoś znacznika HTML.
// W ten sposób dostajemy się do formatowania CSS i zmieniamy, nadajemy itd kolejne formatowania.
// UWAGA !!!
// 	"property" jako właściwości stylów które możemy zmieniać róznią się nazwą w niektórych
// 	przypadkach pomiędzy tym co jest w CSS a tym jakiej nazwy używamy w metodzie HTML DOM.
// 	Na przykład w CSS jest "background-color", a w metodzie HTML DOM jest "backgroundColor"
// Najpierw podajemy słówko "style", co znaczy, że chcemy ustawić formatowanie, a później
// do jakiego elementu formatowania się odnosimy. Na przykład jeżeli chcemy
// ustawić / zmienić kolor tła to formuła bedzie nastepjująca:
<p id="demo">Uczymy sie HTML DOM</p>
document.getElementById("demo").style.backgroundColor = "yellow";
// Ta cześć polocenie po ".style." jest właśnie zapisywana tak jak w ustawianiu właściwości
// formatowania w pliku CSS, z tą różnicą, że w pliku CSS mamy ":" a w JavaScript "=".
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
// Kolekcje elementów HTML

// Już wcześniej była poruszana kwestia metod zwracających kolekcje elementów / znaczników HTML.
// Są min.:
document.body
document.getElementsByClassName('#CLASS');
document.getElementsByTagName('#TAG');
// I tak dalej.
// Kolekcje zwracane przez powyższe metody są rodzajem tablicy zawierającej elementy HTML.
// W zależności jakiej metody dostepowej użyjemy to takie elementy HTML będą umieszczone w tablicy.
// Jeżeli uzyjemy metody:
document.getElementsByTagName('#TAG');
// To wówczas w tablicy będą tylko elementy HTML o tym samym znaczniku.
// Ich kolejność w tablicy będzie wynikała z kolejności wystepującej w kodzie HTML.
// Numeracja jest tak jak w przypadku tablic, tzn. pierwszy element jest z indeksem 0.
// Wówczas do każdego elementu z kolekcji dostajemy się poprzez podanie w nawiasie kwadratowym
// numeru indeksu elementu.

// Tak jak talice w JavaScript posiadaja metodę sprawdzającą długość tablicy,
// tak w tym przypadku też mamy taka metodę. Nazywa się ona:
var mycollection = document.getElementsByTagName('p');
mycollection.length;
// Wówczas zwracana jest nam ilość paragrafów wystepująca na naszej stronie interentowej.

// UWAGA !!!
// Pomimo, że kolekcje elementów HTML przypominają tablicę, to nią nie są !
// Owszem możemy się odnosic do elementów w nich, jednak nie możemy używać metod
// modyfikujących je, takich jak:
valueOf()
pop()
push()
join()
