//console.log muestra un mensaje en la consola web (o del intérprete JS)
console.log("Números enteros:");
console.log(13, 7, 189, 45, 70, 99999, 0, -1234, -7);
console.log(); //Imprime un salto de línea
console.log("Números racionales: ");
console.log(9.81, 2.3, 3.33, 17.1);
console.log();
console.log("Notación científica: e.g. 2.998·10^8. No realiza la operación cuando el exponente negativo es muy grande.");
console.log(2.998e8, 5.9736e20, 9.1093822e-31, 2.54e-2);
console.log();
console.log("Por definición, cualquier número dividido entre cero es igual a infinito. Esto implica, que cualquier número dividido");
console.log("entre infinito es igual a 0, ya que si cualquier número se divide entre un número muy muy grande");
console.log("el resultado se aproxima mucho a cero. Por lo tanto, si cualquier número se divide entre infinito,");
console.log("da como resultado 0.");
console.log(`E.g. 177/0 = ${177/0} esto implica 177/Infinity = ${177/Infinity}`);
console.log();
console.log("Por otro lado, también existe un valor para representar las 7 indeterminaciones que surgen de evaluar algunos");
console.log("límites de funciones i.e. Infinity/Infinity, 0/0, 0·Infinity, 0^0, Infinity^0, 1^Infinity, Infinity-Infinity");
console.log(`E.g. Infinity/Infinity = ${Infinity/Infinity}`);
console.log();
console.log("En lo que respecta a la aritmética, se puede manipular el orden de precedencia mediante paréntesis");
console.log("cuando se evalúa una operación.");
console.log(`E.g. 100 + 4 * 11 = ${100 + 4 * 11} mientras que (100 + 4) * 11 = ${(100 + 4) * 11}`);
console.log();
console.log("El tipo String se puede representar con comillas simples, dobles o backticks.");
console.log("Puede procesar caracteres especiales e.g. el salto de línea");
console.log("Esta es la primera línea\nEsta es la segunda línea");
console.log();
console.log("Las cadenas se pueden concatenar mediante el operador + e.g.");
console.log("con" + "ca" + "tenate");
console.log();
console.log("Los backticks permiten el uso de plantillas literales. Estas plantillas introducen la funcionalidad de");
console.log("interpolación de cadenas de caracteres. E.g.:");
console.log(`La mitad de 100 es ${100 / 2}`);
console.log("Se pueden ver más ejemplos arriba.");
console.log();
console.log("Los valores booleanos se escriben: true o false");
console.log();
console.log("Una variable declarada sin asignarle un valor asume implícitamente el valor undefined y su tipo es undefined.");
console.log("E.g.: let x;");
let x;
console.log(x);
console.log(typeof(x));
console.log("null en cambio, se puede asignar explícitamente a una variable para señalar que dicha variable tiene un valor");
console.log("pero este valor es vacío. E.g.: let y = null");
let y = null;
console.log(y);
console.log("null y undefined son útiles cuando se quiere distinguir entre valor no definido y sin valor");
console.log();
console.log("Operadores unarios: typeof, - y !");
console.log(typeof "hello");
console.log(typeof 6.28e4);
console.log(typeof true);
console.log(-(10 - 2));
console.log(!true);
console.log();
console.log("Conversiones de tipo automáticas:");
console.log("5" - 1) //number
console.log("5" + 1) //string
console.log();
console.log("Operadores relacionales:");
console.log(3 > 2);
console.log(3 < 2);
console.log("También se usan para comparar cadenas de caracteres. Tener en cuenta que mayus. < minus.")
console.log("Cuando JS compara cadenas, lo hace carácter por carácter de izquierda a derecha, incluyendo códigos Unicode.");
console.log('Z' < 'a');
console.log("Ismael" < "Sánchez");
console.log("casa" > "árbol");
console.log("Hello" != "Hola");
console.log("Tanenbaum" == "Andrew");
console.log("Otros operadores de interés son: >=, <=");
console.log("Por último, hay que tener en cuenta la diferencia entre la igualdad estricta y la igualdad débil.");
console.log("Igualdad estricta === Si los valores tienen tipos diferentes entonces son cosiderados diferentes.");
console.log("En cambio, la igualdad débil == compara dos valores después de convertir ambos a un tipo de datos común. E.g.:");
var num = 0;
var str = "0";
console.log(num === str);
console.log(num == str);
console.log("Para más información: https://developer.mozilla.org/es/docs/Web/JavaScript/Equality_comparisons_and_sameness")
console.log();
console.log("Los operadores lógicos: and, or y not se representan con: &&, || y ! e.g.:");
console.log(1 + 2 == 2 && 10 * 10 > 50);
console.log(1 + 2 == 2 || 10 * 10 > 50);
console.log(!1 + 2 == 2 && 10 * 10 > 50);
console.log("Al igual que los operadores aritméticos, los lógicos tienen precedencia por defecto, que se puede");
console.log("con paréntesis. E.g.:");
console.log(false && true || true); //Por defecto primero se evalúa &&, después ||
console.log(false && (true || true));
console.log();
console.log("Evaluación con cortocircuito: ");
console.log("La evaluación de una expresión con && o || puede retornar uno de sus operandos no booleanos como strings, numbers...");
console.log("cat" && "dog");
console.log(false && "dog");
console.log("cat" || "dog");
console.log(false || "dog");
console.log("Estos valores son siempre false: 0, cadena vacía, false, NaN, null y undefined");
console.log("Este comportamiento se puede utilizar para asignar un valor a una variable: ");
let nombre = null || "Desconocido";
console.log(nombre);
console.log("Para más información: https://developer.mozilla.org/ca/docs/Web/JavaScript/Referencia/Operadors/Logical_Operators")
console.log();
console.log("Operador ternario: ");
console.log(true ? 1 : 2); //1
console.log(false ? 1 : 2); //2
