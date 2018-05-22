// Model DOM
//
// Model DOM pozwala na integrację JavaScript z elemntami wchodzącymi w skład
// składni HTML oraz CSS. Zapewnia on językowi JavaScript dostęp do zawartości
// strony internetowej, ponieważ przeglądarki wykorzystują DOM do śledzenia na stronie
// znaczników HTML. Co oznacza, że przeglądarki kolekcjonują te znaczniki jako obiekty JavaScript.
// Dzięki temu za pomocą JavaScript mamy możliwość wykonywania działania na tych znacznikach,
// dodawać nowe znaczniki, edytować już istniejące itd.

// Model DOM opiera się na zasadzie hierarchi / drzewka.
// W drzewku tym elementem głównym (rootem) będzie znacznik <HTML>.
// Każdy element wchodzący wskład strony internetowej będzie się z wywodził z <HTML>.
// Co oznacza, że element ten będzie głębokim rodzicem (dziadkiem) każdego innego elementu.
// Oczywiści elementy bardziej zagnieżdżone takiej jak na przykład akapit <P> będzie
// posiadał płytszego rodzica jakim będzie znacznik <BODY>. Natomiast sam akapit <P> będzie
// posiadał dzieci w postaci tekstu umieszczonego w tym akapicie oraz osobnym
// dzieckiem też będzie sposób formatowania tego tekstu czy atrybut w postaci identyfikatora
// bądź klasy.
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
