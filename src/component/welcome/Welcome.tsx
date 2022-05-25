

interface Iprops {
    name:string;
    age:number;
}

export function Welcome({name,age}: Iprops){
    return <>{name} {age}</>
  }