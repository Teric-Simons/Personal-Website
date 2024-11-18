import "../css/Listing.css";


export default function Listing({key, companyName, duration, role}){
    return(
       
            <div key = {key} className="listing">
            <div className="loc-date">
                <p>{companyName}</p>
                <p>{duration}</p>
            </div>
            <div className="role">
            <p>{role}</p> 
            </div>
        </div>
        
    
       
        
    )
}