var afrikaemission2018:number = 1235.5;
var nordamerikaemission2018:number = 6035.6;
var südamerikaemission2018:number = 1261.5;
var europaemission2018:number = 4209.3;
var asienemission2018:number = 16274.1;
var australienemission2018:number = 2100.5;
var afrikaemission2008:number = 1028;
var nordamerikaemission2008:number = 6600.4;
var südamerikaemission2008:number = 1132.6;
var europaemission2008:number = 4965.7;
var asienemission2008:number = 12954.7;
var australienemission2008:number = 1993;

var gesamtemission2018: number = afrikaemission2018+europaemission2018+südamerikaemission2018+nordamerikaemission2018+asienemission2018+australienemission2018;

console.log("Die Emission von Afrika ist: "+afrikaemission2018+"kg CO2.");
var anteilafrika2018:number = (afrikaemission2018/gesamtemission2018)*100;
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit "+anteilafrika2018+"%.");
var wachstumafrikavon2008zu2018absolut:number = afrikaemission2018-afrikaemission2008;
var wachstumafrikavon2008zu2018prozentual:number = -((wachstumafrikavon2008zu2018absolut/afrikaemission2008)*100);
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um "+wachstumafrikavon2008zu2018prozentual+"% verändert.");
console.log("2018 im Vergleich zu 2008 sind das "+wachstumafrikavon2008zu2018absolut+"kg CO2.");



console.log("Die Emission von Nordamerika ist: "+nordamerikaemission2018+"kg CO2.");
var anteilnordamerika2018:number = (nordamerikaemission2018/gesamtemission2018)*100;
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit "+anteilnordamerika2018+"%.");
var wachstumnordamerikavon2008zu2018absolut:number = nordamerikaemission2018-nordamerikaemission2008;
var wachstumnordamerikavon2008zu2018prozentual:number = -((wachstumnordamerikavon2008zu2018absolut/nordamerikaemission2008)*100);
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+wachstumnordamerikavon2008zu2018prozentual+"% verändert.");
console.log("2018 im Vergleich zu 2008 sind das "+wachstumnordamerikavon2008zu2018absolut+"kg CO2.");



console.log("Die Emission von Südamerika ist: "+südamerikaemission2018+"kg CO2.");
var anteilsüdamerika2018:number = (südamerikaemission2018/gesamtemission2018)*100;
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit "+anteilsüdamerika2018+"%.");
var wachstumsüdamerikavon2008zu2018absolut:number = südamerikaemission2018-südamerikaemission2008;
var wachstumsüdamerikavon2008zu2018prozentual:number = -((wachstumsüdamerikavon2008zu2018absolut/südamerikaemission2008)*100);
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+wachstumsüdamerikavon2008zu2018prozentual+"% verändert.");
console.log("2018 im Vergleich zu 2008 sind das "+wachstumsüdamerikavon2008zu2018absolut+"kg CO2.");



console.log("Die Emission von Europa ist: "+europaemission2018+"kg CO2.");
var anteileuropa2018:number = (europaemission2018/gesamtemission2018)*100;
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit "+anteileuropa2018+"%.");
var wachstumeuropavon2008zu2018absolut:number = europaemission2018-europaemission2008;
var wachstumeuropavon2008zu2018prozentual:number = -((wachstumeuropavon2008zu2018absolut/europaemission2008)*100);
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "+wachstumeuropavon2008zu2018prozentual+"% verändert.");
console.log("2018 im Vergleich zu 2008 sind das "+wachstumeuropavon2008zu2018absolut+"kg CO2.");



console.log("Die Emission von Asien ist: "+asienemission2018+"kg CO2.");
var anteilasien2018:number = (asienemission2018/gesamtemission2018)*100;
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit "+anteilasien2018+"%.");
var wachstumasienvon2008zu2018absolut:number = asienemission2018-asienemission2008;
var wachstumasienvon2008zu2018prozentual:number = -((wachstumasienvon2008zu2018absolut/asienemission2008)*100);
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um "+wachstumasienvon2008zu2018prozentual+"% verändert.");
console.log("2018 im Vergleich zu 2008 sind das "+wachstumasienvon2008zu2018absolut+"kg CO2.");



console.log("Die Emission von Australien ist: "+australienemission2018+"kg CO2.");
var anteilaustralien2018:number =(australienemission2018/gesamtemission2018)*100;
console.log.apply("Relativ zur Gesamtemission der Welt verursacht Australien damit "+anteilaustralien2018+"%.");
var wachstumaustralienvon2008zu2018absolut:number = australienemission2018-australienemission2008;
var wachstumaustralienvon2008zu2018prozentual:number = -((wachstumaustralienvon2008zu2018absolut/australienemission2008)*100);
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um "+wachstumaustralienvon2008zu2018prozentual+"% verändert.");
console.log("2018 im Vergleich zu 2008 sind das "+wachstumaustralienvon2008zu2018absolut+ "kg CO2");
