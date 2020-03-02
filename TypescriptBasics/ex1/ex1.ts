
namespace ex1 {

    let zelig: brasileiro = new brasileiro("Zelig");
    let rito: italiano = new italiano("Don Ritão");
    let rita: frances = new frances("Rita");
    let chiquinha: italiano = new italiano("Chiquinha");
    let sherlock: britanico = new britanico("Sherlock");
    let watson: britanico = new britanico("Watson");

    let equipe: Array<cidadao> = new Array(zelig, rito, rita, chiquinha, sherlock, watson);

    equipe.forEach(function (cidadao: cidadao): void {

        console.log(cidadao.nome + " e" + cidadao.pais.cidania);

    })

}
