import Star from "./Star";
import {useState} from "react";

type RatingProps = {

}
export function Rating(props: RatingProps) {
    const [valueRating, setValueRating] = useState(0);
     return (
         <div>
             <Star selected={valueRating > 0} setValueRating={() =>setValueRating(1)} />
             <Star selected={valueRating > 1} setValueRating={() =>setValueRating(2)} />
             <Star selected={valueRating > 2} setValueRating={() =>setValueRating(3)} />
             <Star selected={valueRating > 3} setValueRating={() =>setValueRating(4)} />
             <Star selected={valueRating > 4} setValueRating={() =>setValueRating(5)} />
         </div>
     )
 }

 export default Rating;