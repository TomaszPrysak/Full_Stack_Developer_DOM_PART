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
// Dostęp do elementów HTML ich manipulacja

// Metody HTML DOM to akcje które można wykonać na jakimkolwiek elemencie HTML.
// Jak na przykład dodawanie lub usuwanie elementów HTML.
// Właściwości HTML DOM to wartości elementów HTML jakie możemy ustawiać bądź zmieniać.
// Jak na przykład zmienianie zawartości znaczników HTML wyświetlanych na stronie w
// postaci treści.

// Dostep do jakiegokolwiek elementu na stronie HTML (a jednocześnie do jego właściwości) odbywa się poprzez HTML DOM.
// Najczęściej używane metody dostępowe do elementów HTML:

document.getElementById(#ID) // w miejscu ID podajemy identyfokator jaki nadaliśmy znacznikowi podczas tworzenia kodu HTML,
// wiadomo, że ID jest  unikatowe i może być przyporządkowane tylko do jdnego znacznika HTML.
document.getElementsByClassName(#CLASS) // nazwa klasy nadanej znacznikowi podczas tworzenia kodu HTML,
// klasa z kolei może być przyporządkowana do kilku znaczników.
document.getElementsByTagName(#TAG) //poprzez tą metodę odwołujemy się ogólnie do znacznika HTML,
// jezeli jest tych znaczników kilka w kodzie HTML to za jendnym razem odwołamy się do wszystkich.

// Powyższe metody pozwalają na dostęp do elementów HTML, ale aby coś z nimi zrobić
// musimy wywołać na nich kolejnych metod.
// Najczęściej używane metody do manipulowania elementami HTML:

var element1 = document.getElementById(#ID);
var element2 = document.getElementsByClassName(#CLASS);
var element3 = document.getElementsByTagName(#TAG);

element1.innerHTML = nowa treść
element2.attribute = nowa wartość
element3.setAttribute(#attribute, #value)
element1.style.property = new style
