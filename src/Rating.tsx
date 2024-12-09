import Star from "./Star";

type RatingProps = {
    value: number;
}
export function Rating(props: RatingProps) {
     return (
         <div>
             {/*<Star selected={props.value > 0}/>*/}
             {/*<Star selected={props.value > 1}/>*/}
             {/*<Star selected={props.value > 2}/>*/}
             {/*<Star selected={props.value > 3}/>*/}
             {/*<Star selected={props.value > 4}/>*/}
         </div>
     )
 }

 export default Rating;