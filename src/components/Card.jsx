
const Card = (props) => {
  return (
      <div className="container">

    <div className="row justify-content-center">
        {props.sehir.map((eleman)=>{
            const {title, image, desc, id} = eleman;

            return(
                <div className="card position-relative bg-dark text-light col-md-4 col-lg-3 p-3 m-3" style={{width: "18rem;"}} key={id}>
                    <h5 className="text-start py-3 px-3">{title.toUpperCase()}</h5>
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body overlay ">
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
                
            )




        })}

      
    </div>
      </div>
  )
}

export default Card;
