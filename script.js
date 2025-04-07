//EJERCICIO

/*Paso 1
 En robot, crea un método getter llamado energyLevel
con la palabra clave get. Deja el cuerpo de la función
en blanco por ahora */

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    return typeof this._energyLevel === "number"
      ? `My current energy level is ${this._energyLevel}`
      : `System malfunction: cannot retrieve energy level`;
  },
};

console.log(robot.energyLevel);

robot._energyLevel = "hola";

console.log(robot.energyLevel);

/*Paso 2
Dentro del mÃ©todo getter, agregue una instruciÃ³n if
para comprobar si this._energyLevel es un nÃºmero, 
utiliza el operador typeof.  Si la condiciÃ³n es ver-
dadera, devuelve 'My current energy level is ENERGYLEVEL'
Reemplace ENERGYLEVEL con el valor this._energyLevel.

Asegurate de devolver la cadena en lugar de registrarla
en la consola.*/

/*Paso 3:
Si this._energyLevel no es un nÃºmero, es posible que la 
propiedad _energyLevel se haya modificado. 
Agreguemos una declaraciÃ³n de retorno predeterminada 
para cuando se presente esta situaciÃ³n.

AÃ±ade una declaraciÃ³n else que devuelva 'System malfunction: cannot retrieve energy level'.*/

/*Paso 4: 

Registra el resultado de llamar al mÃ©todo getter energyLevelen robotla consola.

Â¡Tenga en cuenta que el mÃ©todo devolverÃ¡ una respuesta 
formateada en lugar de solo acceder a una propiedad!*/
