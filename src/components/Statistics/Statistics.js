import{Ulka ,LIshka,Sextion} from "./Statistics.styled"
import randomColorRGB from 'random-color-rgb'


const Statistics =({stats,title})=>{
const elements  = stats.map(el =>    
   <LIshka class="item" key={el.id} somecolor={randomColorRGB()} >
    <span class="label">{el.label}</span>
    <span class="percentage">{el.percentage}</span>
   
  </LIshka>
  )
return(
  <Sextion>
    {title && <h2 class="title">{title}</h2>}
   
  <Ulka>
{elements}
  </Ulka>
</Sextion>
)
}
export default Statistics