## **Operadores**

Los operadores se utilizan para realizar operaciones en variables y valores.

En el siguiente ejemplo, usamos el **operador** para sumar dos valores:

```java
int x = 100 + 50;
```

Aunque el operador `+` se usa a menudo para sumar dos valores, como en el ejemplo anterior, también se puede usar para sumar una variable y un valor, o una variable y otra variable:

```java
int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)
```

Java divide los operadores en los siguientes grupos:

- Operadores aritméticos
- Operadores de asignación
- Operadores de comparación
- Operadores lógicos
- Operadores bit a bit

### **Operadores aritméticos**

Los operadores aritméticos se utilizan para realizar operaciones matemáticas comunes.

| Operador | Nombre         | Descripción                              | Ejemplo |
| -------- | ------------- | ---------------------------------------- | ------- |
| +        | Suma          | Suma dos valores                        | x + y   |
| -        | Resta         | Resta un valor de otro                  | x - y   |
| *        | Multiplicación| Multiplica dos valores                  | x * y   |
| /        | División      | Divide un valor por otro                | x / y   |
| %        | Módulo        | Devuelve el residuo de la división      | x % y   |
| ++       | Incremento    | Aumenta el valor de una variable en 1   | ++x     |
| --       | Decremento    | Disminuye el valor de una variable en 1 | --x     |

### **Operadores de asignación**

Los operadores de asignación se utilizan para asignar valores a las variables.

Ejemplo del operador de asignación `=`:

```java
int x = 10;
```

Ejemplo del operador de asignación con suma `+=`:

```java
int x = 10;
x += 5; // x ahora es 15
```

Lista de operadores de asignación:

| Operador | Ejemplo  | Equivalente a |
| -------- | -------- | ------------- |
| =        | x = 5    | x = 5         |
| +=       | x += 3   | x = x + 3     |
| -=       | x -= 3   | x = x - 3     |
| *=       | x *= 3   | x = x * 3     |
| /=       | x /= 3   | x = x / 3     |
| %=       | x %= 3   | x = x % 3     |
| &=       | x &= 3   | x = x & 3     |
| ^=       | x ^= 3   | x = x ^ 3     |
| >>=      | x >>= 3  | x = x >> 3    |
| <<=      | x <<= 3  | x = x << 3    |

### **Operadores de comparación**

Los operadores de comparación se utilizan para comparar dos valores o variables. Devuelven `true` o `false`.

Ejemplo:

```java
int x = 5;
int y = 3;
System.out.println(x > y); // Devuelve true, porque 5 es mayor que 3
```

| Operador | Nombre                  | Ejemplo |
| -------- | ----------------------- | ------- |
| ==       | Igual a                 | x == y  |
| !=       | Diferente de            | x != y  |
| >        | Mayor que               | x > y   |
| <        | Menor que               | x < y   |
| >=       | Mayor o igual que       | x >= y  |
| <=       | Menor o igual que       | x <= y  |

### **Operadores lógicos**

Los operadores lógicos se utilizan para determinar la lógica entre variables o valores.

Ejemplo:

```java
int x = 5;
System.out.println(x > 3 && x < 10); // Devuelve true
```

| Operador | Nombre        | Descripción                                             | Ejemplo         |
| -------- | ------------ | ------------------------------------------------------- | --------------- |
| &&       | AND lógico   | Devuelve `true` si ambas condiciones son verdaderas     | x < 5 && x < 10 |
| \|\|     | OR lógico    | Devuelve `true` si al menos una condición es verdadera | x < 5 \|\| x > 3 |
| !        | NOT lógico   | Invierte el resultado de la condición                   | !(x < 5)        |

---