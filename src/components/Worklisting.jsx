import Listing from "./Listing"

const workListing = [{
    companyName : "Yick Solutions", duration : "June 2024 - August 2024",
     role : "Software Engineer, Web Developer"
},
{
    companyName : "Diversiboard", duration : "Feb. 2021 - Nov. 2023",
     role : "Web Developer"
}
]

export default function Worklisting(){
    return(
    <div className="all-listings">
        {workListing.map((listing, key) =>(
            <Listing
            key = {key}
            companyName = {listing.companyName}
            duration = {listing.duration}
            role = {listing.role}
            />
          
        ))}
        </div>

    )

}