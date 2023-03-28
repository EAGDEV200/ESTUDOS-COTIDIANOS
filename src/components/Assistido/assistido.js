export default function Assistido ({javisto}){
    if(javisto){
      return<p className="text-success">Assistido</p>
    }else{
      return<p className="text-danger">Não Assistido</p>
    }
  }