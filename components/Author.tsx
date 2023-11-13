import Contributor from "@/types/ServerContributor";
const Author: React.FC<Contributor> = ({ id, login, avatar_url
     }) =>{

return(

<div key={id} className="flex items-center justify-center p-1 gap-1">
    
     <img className="rounded-full max-h-[30px]" src={`${avatar_url}`}></img>
     <p>{login}</p>
</div>

);

     };

     
     export default Author;