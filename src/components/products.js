import '../App.css'
function Products(){

const prodcutsObj = [{
    image:'../images/3.png',
    price: '$745'
},
{
    image:'../images/2.png',
    price: '$845'
},
{
    image:'../images/1.png',
    price: '$545'
},
{
    image:'../images/4.png',
    price: '$885'
},
{
    image:'../images/5.png',
    price: '$675'
},
{
    image:'../images/6.png',
    price: '$897'
},
{
    image:'../images/7.png',
    price: '$678'
},
{
    image:'../images/8.png',
    price: '$878'
},
{
    image:'../images/9.png',
    price: '$787'
}]
  
    return(
        <>
        
<div className="products">

    <div className="one">
    {
        prodcutsObj.map((e)=>{
            return(
        <div className="image">
            <figure><img className="image" src={e.image} alt="" height="300" width="200"/>
            <figcaption> Dress Price : {e.price}</figcaption>
            </figure>
        </div>
            )
        })
    }
    </div>

</div>

        </>
    )
}

export default Products;