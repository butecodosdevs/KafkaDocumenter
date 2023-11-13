import Contributor from "@/types/ServerContributor";
const Author: React.FC<Contributor & { className?: string }> = ({ id, login, avatar_url, className }) => {
     return (
       <img
         key={id}
         className={`rounded-full absolute w-[30px] h-[30px] border-5 border-cyan-50 border-opacity-20 ${className}`}
         src={`${avatar_url}`}
       />
     );
   };

     
     export default Author;