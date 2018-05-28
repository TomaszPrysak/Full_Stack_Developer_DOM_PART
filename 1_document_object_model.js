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
// Dostęp do istniejących znaczników HTML i manipulacja nimi

// Metody HTML DOM to akcje które można wykonać na jakimkolwiek elemencie HTML.
// Jak na przykład dodawanie lub usuwanie treści wysietlanych na stronie poprzez
// elementy HTML, bądź zmiana atrybutów tych elementów znajdujących się wewnątrz znaczników.

// UWAGA !!!
// Przyczym, to bardzo ważne, że ten znacznik który będzie wyświetlać
// treść, bądź ten którego chcemy zmienić atrybut MUSI już istnieć.

// Dostep do jakiegokolwiek znacznika na stronie HTML (a jednocześnie do jego właściwości) odbywa się poprzez HTML DOM.
// Najczęściej używane metody dostępowe do elementów HTML:

document.getElementById('#ID'); // w miejscu ID podajemy identyfokator jaki nadaliśmy znacznikowi podczas tworzenia kodu HTML,
// wiadomo, że ID jest unikatowe i może być przyporządkowane tylko do jdnego znacznika HTML.

document.getElementsByClassName('#CLASS'); // nazwa klasy nadanej znacznikowi podczas tworzenia kodu HTML,
// klasa z kolei może być przyporządkowana do kilku znaczników.

document.getElementsByTagName('#TAG'); //poprzez tą metodę odwołujemy się ogólnie do znacznika HTML,
// jezeli jest tych znaczników kilka w kodzie HTML to za jendnym razem odwołamy się do wszystkich.
// A dokładniej to metoda ta zwraca nam listę wszystkich tych samych znaczników.
// Będą one uporządkowane od wystepowania na stronie. Pierwszy znacznik bedzie
// w tej liście pod indeksem 0. Na przykład:
<p>Czesc</p>
<p>Jestem Tomek</p>
<p>Lubię motocykle</p>
var x = document.getElementsByTagName("p");
y[2].innerHTML == "Lubię motocykle" // odnośimy się do zawartości 3 z kolei akapitu.

document.querySelectorAll("znacznik.ID/className/typ/atrybut/war"); // UZUPEŁNIĆ

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

element2.attribute(.property) = nowa wartość // metoda attribute pozwala dostać się do
// właściwości jakie posiada znacznik HTML i manipulować nimi.
// Mając na myśli właściwości to są to wszystkie atrybuty które nadajemy znacznikowi
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
// Wykorzystywany jest na przykład zo zmiany wielkości obrazka po najechaniu myszką,
// bądź podmiany obrazka na inny poprzez zmianę adresu obrazka w src itd.
element3.setAttribute(#attribute, #value) // inny sposób na dostanie się do właściwośi
// znacznika i dokonanie w nim jakiejś zmiany.

element1.style.property = new style // zmiana stylu, formatowania jakiegoś znacznika HTML.
// W ten sposób dostajemy się do formatowania CSS i zmieniamy, nadajemy itd kolejne formatowania.
// Najpierw podajemy style, co znaczy, że chcemy ustawić formatowanie, a później
// do jakiego elementu formatowania się odnosimy, np.:
<p id="a">Uczymy sie HTML DOM</p>
document.getElementById("a").style.color = "blue";

// Zastosowania w konkretnych przypadkach znajdują sie na stronach min. w3school

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
<form id="frm1" action="/action_page.php">
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
document.body.appendChild(btn); // nastepnie dodajemy go do sekcji BODY, należy pamietać,
// że zostanie dodany on na samym dole, jako ostatni znacznik na stronie.
// Oczywiście musimy pamiętać również o nadaniu tekstu na nasz przycisk itd.

element4.removeChild(elementIstniejący); // usuwa z sekcji / listy istniejący element / znacznik.
// Oczywiście ten element który będziemy chcieli usunąć musi istnieć na naszej stronie.
Na przykład.:
<ul id="myList"><li>Coffee</li><li>Tea</li><li>Milk</li></ul> // stworzyliśmy nieuporządkowaną listę o ID "myList"
var list = document.getElementById("myList") // dostęp do niej przypisyujemy do zmiennej
element4.removeChild(list) // usuwamy ją z sekcji body

element4.document.replaceChild(nowyElement, elementIstniejący) // zastępuje istenijący element / znacznik
// nowym. Oczywiście najepierw musimy stworzyć wirtualnie nowy element którym bedziemy chcieli zastapić
// elementu już istniejący w sekcji.
