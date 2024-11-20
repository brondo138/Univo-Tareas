<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 14.1</title>
</head>
<body>
    <h2>Ejercicio 1</h2>
    <form method="post" id="ejercicio1">
        <input type="hidden" name="formulario" value="ejercicio1">
        <label for="numero1">Número 1</label>
        <input type="number" id="numero1" name="numero1" value="<?= $_POST['numero1'] ?? '' ?>" required>
        <br><br>
        <label for="numero2">Número 2</label>
        <input type="number" id="numero2" name="numero2" value="<?= $_POST['numero2'] ?? '' ?>" required>
        <br><br>
        <button type="submit">Calcular</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST" && $_POST["formulario"] === "ejercicio1") {
        $numero1 = $_POST["numero1"];
        $numero2 = $_POST["numero2"];

        if (is_numeric($numero1) && is_numeric($numero2)) {
            $suma = $numero1 + $numero2;
            echo "<h3>$numero1 + $numero2 = $suma</h3>";
        } else {
            echo "<h2>Por favor, ingrese valores numericos validos.</h2>";
        }
    }
    ?>

    <h2>Ejercicio 2</h2>
    <form method="post" id="ejercicio2">
        <input type="hidden" name="formulario" value="ejercicio2">
        <label for="edad">Ingresa tu edad:</label>
        <input type="number" id="edad" name="edad" value="<?= $_POST['edad'] ?? '' ?>" required>
        <button type="submit">Calcular</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST" && $_POST["formulario"] === "ejercicio2") {
        $edad = $_POST["edad"];

        if (is_numeric($edad)) {
            if ($edad <= 0) {
                echo "<h2>Por favor, ingrese valores numericos validos.</h2>";
            } elseif ($edad < 18) {
                echo "<h3>Tu edad es \"$edad\" años, por lo tanto, eres menor de edad!</h3>";
            } else {
                echo "<h3>Tu edad es \"$edad\" años, por lo tanto, eres mayor de edad!</h3>";
            }
        } else {
            echo "<h2>Por favor, ingrese valores numericos validos.</h2>";
        }
    }
    ?>

<h2>Ejercicio 3</h2>
    <form method="post" id="ejercicio3">
        <input type="hidden" name="formulario" value="ejercicio3">
        <label for="edad2">Ingresa tu edad:</label>
        <input type="number" id="edad2" name="edad2" value="<?= $_POST['edad2'] ?? '' ?>" required>
        <button type="submit">Calcular</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST" && $_POST["formulario"] === "ejercicio3") {
        $edad2 = $_POST["edad2"];

        if (is_numeric($edad2)) {
            if ($edad2 < 0) {
                echo "<h2>Por favor, ingrese valores numericos validos.</h2>";
            } elseif ($edad2 <= 10) {
                echo "<h3>Tu edad es \"$edad2\" años, por lo tanto, eres un niño!</h3>";
            } elseif($edad2>=11 && $edad2 <=30) {
                echo "<h3>Tu edad es \"$edad2\" años, por lo tanto, eres un joven!</h3>";
            }else{
                echo "<h3>Tu edad es \"$edad2\" años, por lo tanto, eres un adulto!</h3>";
            }
        } else {
            echo "<h2>Por favor, ingrese una edad valida.</h2>";
        }
    }
    ?>
</body>
</html>
