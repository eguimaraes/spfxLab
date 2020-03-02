import{dados} from "./conexao"

export function setModel(model:any):void {
    dados.define(model.nome,model.opcoes); 

}