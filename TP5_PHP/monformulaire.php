<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Formulaire</title>
</head>
<body>
    <form id="formulaire" action="traitement.php" method = "post">
        <table>
            <tr>
                <td>Nom :</td>
                <td>
                    <input type="text" name="prénom">
                </td>
            </tr>
            <tr>
                <td>Age :</td>
                <td>
                    <input type="number" name= "Age">
                </td>
            </tr>
            <tr>
                <td>Téléphone :</td>
                <input type="text" name="telephone">
            </tr>
            <tr>
                <td colspan ="2">
                    <input type="submit" >
                </td>
            </tr>
        </table>
    </form>

</body>
</html>
