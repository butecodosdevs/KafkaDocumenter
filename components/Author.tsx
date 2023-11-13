import Contributor from "@/types/ServerContributor";
const Author: React.FC<Contributor> = ({ id, login, avatar_url
     }) =>{

return(

<div key={id}>
     <p>{login}</p>
     <img src={`${avatar_url}`}></img>
</div>

);

     };

     
     export default Author;