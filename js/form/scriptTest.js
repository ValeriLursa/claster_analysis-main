class ScriptTest{
    id;
	result;
	resultClustering;
    constructor(){
        this.id = [];
        this.result = [];
        this.resultClustering = [];
    }
    addId(id){
        this.id.push(id)
    }
    addResult(result){
        this.result.push(result)
    }
    addResultClustering(resultClustering){
        this.resultClustering.push(resultClustering)
    }
}