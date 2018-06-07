////////////////////////////
////////////////////////////
// Węzły i relacje między nimi

// Bardzo ważnym pojęciem w przypadku HTML DOM jest pojęcia węzła.
// Węzełem w HTML DOM jest każdy element / znacznik HTML. Dodatkowo wszystkie jego atrybuty
// oraz treść zapisana w tym znaczniku są również węzłami.
// Prościej mówiąc, wszystko w dokumencie HTML jest węzłęm. Jednakże nie takim samym
// typem węzła.

// Możliwość nawigowania po elementach / znacznikach HTML DOM
// jest możliwa dzięki temu, że wystepują relacje pomiedzy węzłami.

// Rodzaje węzłów:
// - cały dokument HTML jest "węzłem dokumentu" - DOCUMENT_NODE,
// - każdy element / znacznik HTML jest "węzłem elementu" - ELEMENT_NODE,
// - treść pomiędzy znacznikami HTML (wewnątrz elementu) jest "węzłem tekstowym" - TEXT_NODE,
// - każdy atrybut w elemencie / znaczniku HTML jest "węzłem atrybutu" - ATTRIBUTE_NODE,
// - wszystkie komentarze są "węzłąmi komentarzy" - COMMENT_NODE.

// Patrz obrazek Model_DOM_tree_1.jpg lub Model_DOM_tree_2.gif.

// Wykorzystując HTML DOM wszystkie węzły, niezależnie od ich typu, są dostępne
// poprzez JavaScript. Możemy również dodawać nowe węzły, modyfikować już istniejące
// oraz je usuwać.

////////////////////////////
// Relacje między węzłami

// Węzły w drzewku wezłów (Nodes_relationships.gif) mają chierarchiczną relacje
// do siebie nawzajem. Inaczej mówiąc są węzły które są:
// - rodzicem,
// - dzieckiem,
// - rodzeństwem.

// Na poniższym przykładzie poznamy chierarchię w HTML:

<html>
  <head>
      <title>DOM Tutorial</title>
  </head>
  <body>
      <h1>DOM Lesson one</h1>
      <p>Hello world!</p>
  </body>
</html>

// A więc analizując:
// <html> jest węzłem dokumentu,
// <html> nie ma rodziców,
// <html> jest rodzicem <head> oraz <body>,
// <head> jest pierwszym dzieckiem <html>,
// <body> jest drugim dzieckiem <html>,
// oraz
// <head> ma jedno dziecko w postaci <title>,
// <title> ma jedno dziecko (węzeł tekstowy) w postaci treści: "DOM Tutorial",
// <body> ma dwoje dzieci <h1> oraz <p>,
// <h1> ma jedno dziecko (węzeł tekstowy) w postaci treści: "DOM Lesson one",
// <p> ma jedno dziecko (węzłę tekstowy) w postaci treści: "Hello world!",
// <h1> oraz <p> są rodzeństwem.

// Do nawigowania między węzłami używamy następujących metod które poprzedzamy metodą
// która pozwoli nam dostać się do okreslonego węzła posiadającego zbiór węzłów dzieci.
// Niezależnie czy będą to dzieci w postaci innych elementów / znaczników HTML, czy w postaci
// węzłu tekstowego, czy węzłu atrybuty. A więc metody do nawigowania pomiędzy węzłami:
parentNode // odnosi się do rodzica węzła na którym wywołujemy tę metodę
childNodes[numerWezla] // odnosi sie do konkretnego dziecka węzła na którym
// wywołujemy tę metodę, w nawiasie kwadratowym wskazujemy numer dziecka z kolekcji
// którą zwraca metoda dostepowa do elementu.
firstChild // odnosi się do pierwszego dziecka węzła na ktorym wywołujemy tę metdę
lastChild // odnosi się do ostatniego dziecka węzła na ktorym wywołujemy tę metdę
nextSibling // odnosi się do nastepnego węzła będącego rodzeństwem w stosunku do węzła na którym
// wywołujemy tę metodę
previousSibling // odnosi sie do poprzedniego węzła będącego rodzeństwem w stosumku do węzła
// na którym wywołujemy tę metodę

// UWAGA !!!
// Bardzo ważne
// Róznica między "innerHTML" oraz "nodeValue".
// Jedno jak i drugie zwraca nam wartość w postaci treści elementu / znacznika HTML.
// 1. "innerHTML" jest to specjalna metoda która odnosi się bezpośrednio
// 	  do węzła tekstowego danego elementu / znacznika. Zwraca nam wartość tego węzła,
//    możemy go potem modytifkować itd.
// 2. "nodeValue" zwraca nam wartość węzła w którym akutalnie jesteśmy.
//    Więc aby ta metoda zwróciła nam treść elementu / znacznika HTML musimy wcześniej odnieść
//    się do tego znacznika i użyć metody odnoszącej się do dziecka tego elementu / znacznika HTML,
//    którym właśnie będzie jego treść.
// Podsumowując:
// "innerHTML" zwraca bezpośrednio treści elementu, a "nodeValue" wartość węzła.
// Aby "nodeValue" zwrócił treść, musimy użyć metod dostepu do węzła będącego
// treścią elementu.
// Przykłady:
// W paragrafie "id02" umieścimy treść występującą w paragrafie "id01" za pomocą
// "innerHTML". Bezpośrednio porzez dostęp do paragrafu "id01":
<h1 id="id01">My First Page</h1>
<p id="id02"></p>
document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;

// W paragrafie "id02" umieścimy treść występującą w paragrafie "id01" za pomocą
// "nodeValue". Po tym jak dostaniemy się do paragrafu "id01", musimy się jeszcze
// dostać do jego dziecka będącego treścią i wtedy użyć "nodeValue":
<h1 id="id01">My First Page</h1>
<p id="id02"></p>
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;

////////////////////////////////////////////////////
// Metody wykorzystywane w relacjach między węzłami:

// 1. Dostęp do całego dokumentu HTML:
document.body // zwraca / daje dostęp do wszystkiego co zapisane jest w znaczniku BODY.
// Zwracam nam elementy z BODY w postaci listy. Pierwszy element za BODY ma indeks 0.
// I tak dalej. Możemy to wykorzystać do dostępu do "dziecki" znacnzika BODY.
document.documentElement // podobnie jak powyżej, ale dostajemy dostęp do zawartości
// całego dokumentu HTML. Czyli wszystko to co znajduje się między znacznikami HTML.

// 2. Metoda "nodeName":
// Metoda ta zwraca nam nazwę węzła na którym jest wywoływana. Służy tylko do odczytu.
// Należy pamiętać, że:
// - metoda ta wywołana na węźle typu element zwróci nam wartość
//   w postaci nazwy znacznika HTML. Zawsze będzie to napisane wielkimi literami.
//   Na przykład:
<h1 id="id01">My First Page</h1>
<p id="id02"></p>
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;
// W paragrafie "id02" umieszczona będzie treść w postaci: "H1".
// - metoda ta wywołana na węźle typu atrybut zwróci nam nazwę atrybuty
//   elementu / znacznika HTML. Niestety nie udało mi się tego rozgryźć i ponizszy przykład
//   zwraca "undefined":
<h1 id="id01">My First Page</h1>
<p id="id02"></p>
document.getElementById("id02").innerHTML = document.getElementById("id01").id.nodeName;
// - metoda ta wywołana na węźle typu tekstowego zwraca nam informację, że to węzeł trekstowy
//   poprzez informację: "#text".
<h1 id="id01">My First Page</h1>
<p id="id02"></p>
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeName;
// W paragrafie "id02" umieszczona będzie treść w postaci: "#text".
// - metoda ta wywołana na węźle "document" zwórci "#document".
//   Na przykład:
<h1 id="id01">My First Page</h1>
<p id="id02"></p>
document.getElementById("id02").innerHTML = document.nodeName;
// W paragrafie "id02" umieszczona będzie treść w postaci: "#document".

// 3. Metoda "nodeValue":
// Metoda ta była wcześniej już opisywana.
// Metoda ta zwraca wartość węzła na którym jest wywoływana.
// Należy pamiętać, że jeżeli:
// - wywołamy te metodę na węźle typu element to wartość będzie niezdefiniowana,
//   z tego powodu, że "nodeValu" musi być wywoływane na ostatnim węźle, czyli
//   takim na który nie ma już zadnego "dziecka", tzn. jest ostatni,
//   UWAGA !!! sprawdałem to i nie zwraca "undefined" tylko pustke
// - wywołamy tę metodę na węźle typu tekstowego to zwróci nam treść zawartą
//   w elemencie / znaczniku HTML który jest "rodzicem" tego węzła,
//   Na przykład:
// - wywołamy tę funkcje na węźle typu atrybut to zwróci wartość atrybutu umieszczonego
//   w elemencie / znaczniku HTML.
//   UWAGA !!! sprawdzałem i zwraca "undefined" a nie wartość jaka jest wpisana
//   w atrybucie elementu / znacznika HTMl.

// 4. Metoda "nodeType":
// Metoda ta zwraca typ węzła na jakim została wywołana.
// Wiąże się to z tym jak na początku tego rozdziału opisywałem rodzaje węzłów.
// Typ węzła jest zwracany w postaci liczby:
// "węzeł elementu" - 1
// "węzeł atrybutu" - 2
// "węzeł tekstowy" - 3
// "węzeł komentarza" - 8
// "węzeł dokumentu" - 9 (wszystko to co pomiędzy HTML)
// "węzeł dokumentu" - 10 (<!Doctype html>)
// Przykład 1:
<h1 id="id01">My First Page</h1>
<p id="id02"></p>
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeType;
// W paragrafie "id02" umieszczona będzie treść w postaci: "3".
// Przykład 2:
<h1 id="id01">My First Page</h1>
<p id="id02"></p>
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;
// W paragrafie "id02" umieszczona będzie treść w postaci: "1".
// Przykład 3:
<h1 id="id01">My First Page</h1>
<p id="id02"></p>
document.getElementById("id02").innerHTML = document.nodeType;
// W paragrafie "id02" umieszczona będzie treść w postaci: "9".
